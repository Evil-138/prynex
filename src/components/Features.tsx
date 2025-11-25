'use client';

import { useInView } from 'react-intersection-observer';
import { 
  CpuChipIcon, 
  ChartBarIcon, 
  MagnifyingGlassIcon, 
  ArrowPathIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Algo Engine',
    description: 'Build, backtest, and deploy sophisticated trading algorithms with our no-code builder.',
    icon: CpuChipIcon,
    color: 'neon-teal',
  },
  {
    name: 'Quant Research',
    description: 'Access institutional-grade market research, factor analysis, and quantitative models.',
    icon: ChartBarIcon,
    color: 'neon-blue',
  },
  {
    name: 'Market Screener',
    description: 'Filter thousands of stocks, forex, crypto, and commodities with real-time market data.',
    icon: MagnifyingGlassIcon,
    color: 'neon-cyan',
  },
  {
    name: 'Backtester',
    description: 'Test strategies against historical data with precision tick-level accuracy.',
    icon: ArrowPathIcon,
    color: 'neon-green',
  },
  {
    name: 'AI Assistant',
    description: 'Get intelligent trade insights and automated portfolio optimization powered by AI.',
    icon: SparklesIcon,
    color: 'neon-teal',
  },
];

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="section bg-dark-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-teal/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div ref={ref} className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Powerful Tools</span> for Modern Traders
          </h2>
          <p className="text-lg md:text-xl text-metal-grey max-w-3xl mx-auto">
            Research-driven tools combining AI, quantitative analysis, and market-grade infrastructure
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.name}
              className={`feature-card group cursor-pointer ${
                inView ? 'animate-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${idx * 100}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-${feature.color}/10 border border-${feature.color}/30 mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`h-8 w-8 text-${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl mb-3 text-white group-hover:text-neon-teal transition-colors">
                {feature.name}
              </h3>
              <p className="text-metal-grey leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* CTA Link */}
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#products"
            className="btn-neon text-lg inline-flex items-center gap-2"
          >
            Explore All Features
            <ChartBarIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: animate-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
