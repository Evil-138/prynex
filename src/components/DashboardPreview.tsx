'use client';

import { useEffect, useRef, useState } from 'react';
import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts';

export default function DashboardPreview() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candlestickSeriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);
  const [currentPrice, setCurrentPrice] = useState(52340.50);
  const [priceChange, setPriceChange] = useState(1250.30);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Create chart
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: '#0f1720' },
        textColor: '#8b92a0',
      },
      grid: {
        vertLines: { color: '#1a1f2e' },
        horzLines: { color: '#1a1f2e' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        borderColor: '#2a2f3e',
      },
      rightPriceScale: {
        borderColor: '#2a2f3e',
      },
    });

    chartRef.current = chart;

    // Add candlestick series
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#00ff88',
      downColor: '#ff0066',
      borderUpColor: '#00ff88',
      borderDownColor: '#ff0066',
      wickUpColor: '#00ff88',
      wickDownColor: '#ff0066',
    });

    candlestickSeriesRef.current = candlestickSeries;

    // Generate mock data
    const generateMockData = () => {
      const data = [];
      let basePrice = 50000;
      const now = Math.floor(Date.now() / 1000);
      
      for (let i = 200; i > 0; i--) {
        const time = now - i * 300; // 5-minute candles
        const open = basePrice + (Math.random() - 0.5) * 1000;
        const close = open + (Math.random() - 0.5) * 500;
        const high = Math.max(open, close) + Math.random() * 200;
        const low = Math.min(open, close) - Math.random() * 200;
        
        data.push({
          time: time as any,
          open,
          high,
          low,
          close,
        });
        
        basePrice = close;
      }
      
      setCurrentPrice(data[data.length - 1].close);
      return data;
    };

    candlestickSeries.setData(generateMockData());

    // Simulate real-time updates
    const interval = setInterval(() => {
      if (!candlestickSeriesRef.current) return;
      
      const lastBar = candlestickSeriesRef.current as any;
      const time = Math.floor(Date.now() / 1000);
      const randomChange = (Math.random() - 0.5) * 100;
      const newPrice = currentPrice + randomChange;
      
      setCurrentPrice(newPrice);
      setPriceChange(prev => prev + randomChange);
      
      candlestickSeriesRef.current.update({
        time: time as any,
        open: currentPrice,
        high: Math.max(currentPrice, newPrice) + Math.random() * 50,
        low: Math.min(currentPrice, newPrice) - Math.random() * 50,
        close: newPrice,
      });
    }, 2000);

    // Handle resize
    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  const signals = [
    { symbol: 'NIFTY 50', action: 'BUY', strength: 85, change: '+2.4%' },
    { symbol: 'BANKNIFTY', action: 'HOLD', strength: 60, change: '+1.2%' },
    { symbol: 'BTC/USDT', action: 'BUY', strength: 78, change: '+3.8%' },
    { symbol: 'RELIANCE', action: 'SELL', strength: 70, change: '-1.5%' },
  ];

  return (
    <section id="dashboard" className="section bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="gradient-text">Live Dashboard</span> Preview
          </h2>
          <p className="text-lg text-metal-grey max-w-2xl mx-auto">
            Real-time market data with interactive charts and algorithmic signals
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="glass-strong rounded-2xl p-6 max-w-6xl mx-auto">
          {/* Top Bar - Ticker */}
          <div className="mb-6 pb-4 border-b border-dark-border/50">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-3xl font-bold text-white">
                    ${currentPrice.toFixed(2)}
                  </span>
                  <span className={`text-lg font-semibold ${priceChange >= 0 ? 'text-neon-green' : 'text-red-500'}`}>
                    {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)} 
                    ({((priceChange / currentPrice) * 100).toFixed(2)}%)
                  </span>
                </div>
                <p className="text-sm text-metal-grey mt-1">BTC/USDT • 5m Chart</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-neon-teal/10 text-neon-teal border border-neon-teal/30 text-sm hover:bg-neon-teal/20 transition-colors">
                  Indicators
                </button>
                <button className="px-4 py-2 rounded-lg bg-dark-tertiary text-metal-silver border border-dark-border text-sm hover:border-neon-blue/50 transition-colors">
                  Timeframe
                </button>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div ref={chartContainerRef} className="rounded-lg overflow-hidden mb-6" />

          {/* Signals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {signals.map((signal, idx) => (
              <div key={idx} className="glass p-4 rounded-lg border border-dark-border/50 hover:border-neon-teal/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-sm font-semibold text-white">{signal.symbol}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    signal.action === 'BUY' 
                      ? 'bg-neon-green/20 text-neon-green' 
                      : signal.action === 'SELL'
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {signal.action}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-metal-grey mb-1">Signal Strength</p>
                    <p className="text-lg font-bold text-neon-blue">{signal.strength}%</p>
                  </div>
                  <p className={`text-sm font-semibold ${signal.change.startsWith('+') ? 'text-neon-green' : 'text-red-400'}`}>
                    {signal.change}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
            <p className="text-xs text-yellow-200">
              <strong>Research Only:</strong> Signals and data are for educational and research purposes only. Not personalized investment advice.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="btn-neon-blue text-lg">
            Request Full Demo
          </button>
        </div>
      </div>
    </section>
  );
}
