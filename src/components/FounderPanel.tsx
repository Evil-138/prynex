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

              {/* Connect with Priyanshu - Social Links */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-metal-silver mb-3">Connect with Priyanshu:</p>
                <div className="flex gap-3">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/priyanshu-shukla-017ba42ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 hover:border-[#0A66C2] transition-all duration-300 hover:scale-105"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-5 h-5 fill-[#0A66C2]" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span className="text-sm font-medium text-[#0A66C2] group-hover:text-white transition-colors">LinkedIn</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/iam_priyanshushukla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-br from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 hover:from-[#833AB4]/20 hover:via-[#E1306C]/20 hover:to-[#F77737]/20 border border-[#E1306C]/30 hover:border-[#E1306C] transition-all duration-300 hover:scale-105"
                    aria-label="Instagram Profile"
                  >
                    <svg className="w-5 h-5 fill-[#E1306C]" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="text-sm font-medium text-[#E1306C] group-hover:text-white transition-colors">Instagram</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Evil-138"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white transition-all duration-300 hover:scale-105"
                    aria-label="GitHub Profile"
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-sm font-medium text-white">GitHub</span>
                  </a>
                </div>
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
