'use client';

import { useState } from 'react';
import { XMarkIcon, AcademicCapIcon, ChartBarIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export default function FounderPanel() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="founder" className="section bg-dark-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Meet the <span className="gradient-text">Founder</span>
          </h2>
          <p className="text-lg text-metal-grey max-w-2xl mx-auto">
            Building the future of quantitative trading and market intelligence
          </p>
        </div>

        {/* Founder Card */}
        <div className="max-w-4xl mx-auto glass-strong rounded-2xl overflow-hidden border border-neon-teal/20">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left: Photo/Avatar */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                {/* Avatar with glow effect */}
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-neon-teal via-neon-blue to-neon-cyan p-1 animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-dark-secondary flex items-center justify-center">
                    <div className="text-6xl font-bold gradient-text">PS</div>
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-neon-teal text-dark-primary text-xs font-bold">
                  FOUNDER & CEO
                </div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="font-heading text-3xl font-bold text-white mb-2">
                  Priyanshu Shukla
                </h3>
                <p className="text-neon-teal font-semibold mb-1">Founder & CEO, PRYNEX</p>
                <p className="text-sm text-metal-grey">Founded 2025</p>
              </div>

              {/* Short Bio */}
              <div className="space-y-4 mb-6">
                <p className="text-metal-silver leading-relaxed">
                  Priyanshu Shukla is a quant-focused market analyst and algorithmic trader specializing in Indian equities, forex, crypto, and commodities.
                </p>
                <p className="text-metal-silver leading-relaxed">
                  He combines data science, AI, and practical trading experience to build market-grade algorithms and research tools.
                </p>
              </div>

              {/* Founder Message */}
              <div className="p-4 rounded-lg bg-dark-tertiary/50 border-l-4 border-neon-teal mb-6">
                <p className="text-sm italic text-metal-silver">
                  "At PRYNEX we build transparent, research-driven tools that help traders trade smarter — powered by data and responsible research."
                </p>
              </div>

              {/* Expertise Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Equities', 'Forex', 'Crypto', 'Commodities', 'Quant', 'AI/ML'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/30 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowModal(true)}
                className="btn-neon w-full md:w-auto"
              >
                Meet Priyanshu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-primary/90 backdrop-blur-sm">
          <div className="glass-strong rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto scrollbar-custom border border-neon-teal/30">
            {/* Modal Header */}
            <div className="sticky top-0 bg-dark-secondary/95 backdrop-blur-xl border-b border-dark-border/50 p-6 flex justify-between items-center">
              <h3 className="font-heading text-2xl font-bold gradient-text">
                About Priyanshu Shukla
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-dark-tertiary rounded-lg transition-colors"
              >
                <XMarkIcon className="h-6 w-6 text-metal-silver hover:text-neon-teal" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Full Bio */}
              <div>
                <h4 className="font-heading text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <AcademicCapIcon className="h-5 w-5 text-neon-teal" />
                  Background & Expertise
                </h4>
                <div className="space-y-3 text-metal-silver leading-relaxed">
                  <p>
                    Priyanshu Shukla is a quantitative analyst and algorithmic trader with deep expertise across multiple asset classes including Indian equities, forex, cryptocurrencies, and commodities. He founded PRYNEX in 2025 with a vision to democratize access to institutional-grade trading tools and research.
                  </p>
                  <p>
                    With a strong foundation in data science, machine learning, and financial markets, Priyanshu has developed sophisticated quantitative models and algorithmic trading systems that combine technical analysis, fundamental research, and AI-driven insights.
                  </p>
                  <p>
                    His approach emphasizes transparency, risk management, and evidence-based decision-making, making complex quantitative strategies accessible to retail traders while maintaining institutional-grade standards.
                  </p>
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h4 className="font-heading text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <ChartBarIcon className="h-5 w-5 text-neon-blue" />
                  Market Specializations
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'Indian Equities', desc: 'NSE/BSE stocks, indices, derivatives' },
                    { title: 'Forex Trading', desc: 'Major & exotic currency pairs' },
                    { title: 'Cryptocurrencies', desc: 'BTC, ETH, altcoins & DeFi' },
                    { title: 'Commodities', desc: 'Gold, silver, crude oil, metals' },
                  ].map((spec) => (
                    <div key={spec.title} className="p-4 rounded-lg bg-dark-tertiary/50 border border-dark-border/50">
                      <h5 className="font-semibold text-white mb-1">{spec.title}</h5>
                      <p className="text-sm text-metal-grey">{spec.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-heading text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <CpuChipIcon className="h-5 w-5 text-neon-cyan" />
                  Certifications & Achievements
                </h4>
                <ul className="space-y-2">
                  {[
                    'NISM Certified Research Analyst',
                    'Advanced Quantitative Trading Strategies',
                    'Machine Learning for Financial Markets',
                    'Risk Management & Portfolio Optimization',
                  ].map((cert) => (
                    <li key={cert} className="flex items-start gap-3">
                      <span className="text-neon-green mt-1">✓</span>
                      <span className="text-metal-silver">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vision */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-neon-teal/10 to-neon-blue/10 border border-neon-teal/30">
                <h4 className="font-heading text-xl font-semibold text-white mb-3">
                  Vision for PRYNEX
                </h4>
                <p className="text-metal-silver leading-relaxed">
                  "My goal with PRYNEX is to bridge the gap between institutional quantitative trading and retail market participants. We're building tools that are not just powerful, but also transparent, educational, and responsible. Every feature we develop prioritizes data integrity, risk awareness, and compliance with regulatory standards."
                </p>
              </div>

              {/* Contact */}
              <div className="pt-4 border-t border-dark-border/50">
                <p className="text-sm text-metal-grey mb-4">
                  Interested in connecting or learning more about PRYNEX's mission?
                </p>
                <button className="btn-neon-teal">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 209, 193, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 209, 193, 0.6);
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
