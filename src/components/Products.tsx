'use client';

import { 
  CpuChipIcon, 
  ArrowPathIcon, 
  MagnifyingGlassIcon, 
  ChartPieIcon,
  CodeBracketIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const products = [
  {
    name: 'Algo Bot Builder',
    description: 'Design, test, and deploy custom trading algorithms with our intuitive no-code interface. Supports multiple strategies and asset classes.',
    icon: CpuChipIcon,
    features: ['No-code builder', 'Multi-asset support', 'Cloud deployment', 'Real-time monitoring'],
    badge: 'Popular',
  },
  {
    name: 'Backtester Pro',
    description: 'Test your strategies against years of historical data with tick-level precision. Comprehensive performance analytics and risk metrics.',
    icon: ArrowPathIcon,
    features: ['Tick-level accuracy', 'Walk-forward analysis', 'Monte Carlo simulation', 'Risk metrics'],
  },
  {
    name: 'Market Screener',
    description: 'Filter and discover opportunities across 10,000+ instruments with real-time data. Advanced filters and custom criteria.',
    icon: MagnifyingGlassIcon,
    features: ['Real-time screening', 'Custom filters', 'Alert system', 'Export to Excel'],
  },
  {
    name: 'Sentiment Engine',
    description: 'AI-powered sentiment analysis from news, social media, and market data. Get the pulse of the market in real-time.',
    icon: SparklesIcon,
    features: ['News analysis', 'Social sentiment', 'Market mood tracking', 'Alert triggers'],
    badge: 'New',
  },
  {
    name: 'Quant Analytics',
    description: 'Institutional-grade factor models, risk analytics, and portfolio optimization tools for serious quantitative traders.',
    icon: ChartPieIcon,
    features: ['Factor analysis', 'Portfolio optimization', 'Risk modeling', 'Performance attribution'],
  },
  {
    name: 'API Access',
    description: 'RESTful and WebSocket APIs for developers. Build custom applications with our market data and execution infrastructure.',
    icon: CodeBracketIcon,
    features: ['REST & WebSocket', 'Real-time data', 'Historical data', 'Documentation'],
  },
];

export default function Products() {
  return (
    <section id="products" className="section bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-64 -right-64 w-[600px] h-[600px] bg-neon-teal/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Premium Tools</span> for Every Trader
          </h2>
          <p className="text-lg md:text-xl text-metal-grey max-w-3xl mx-auto">
            From algo development to portfolio analytics — everything you need in one platform
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, idx) => (
            <div
              key={product.name}
              className="glass-strong p-6 rounded-xl hover:-translate-y-2 hover:shadow-glass transition-all duration-300 border border-dark-border/50 hover:border-neon-teal/50 relative group"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-neon-green text-dark-primary text-xs font-bold">
                  {product.badge}
                </div>
              )}

              {/* Icon */}
              <div className="inline-flex p-3 rounded-lg bg-neon-teal/10 border border-neon-teal/30 mb-4 group-hover:scale-110 transition-transform">
                <product.icon className="h-8 w-8 text-neon-teal" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl mb-3 text-white">
                {product.name}
              </h3>
              <p className="text-metal-grey leading-relaxed mb-4 text-sm">
                {product.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-4">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="text-neon-green mt-0.5">✓</span>
                    <span className="text-metal-silver">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="text-sm font-medium text-neon-teal hover:text-neon-cyan transition-colors flex items-center gap-2 group">
                Learn more
                <svg 
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-metal-grey mb-6">
            All tools include comprehensive documentation and dedicated support
          </p>
          <button className="btn-neon-green text-lg px-8 py-4">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
