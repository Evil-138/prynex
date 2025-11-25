'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import ParticleBackground from './ParticleBackground';
import Navigation from './Navigation';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { SparklesIcon, ChartBarIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      
      heroRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-primary via-dark-secondary to-dark-primary">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Hero Content */}
      <div ref={heroRef} className="container-custom relative z-10 text-center px-4 py-32 transition-transform duration-200 ease-out">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-primary/40 mb-8 animate-float">
          <SparklesIcon className="h-4 w-4 text-accent-primary" />
          <span className="text-sm font-medium text-accent-primary">AI & Quant Powered Trading Intelligence</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">PRYNEX</span>
          <br />
          <span className="gradient-text text-neon-glow drop-shadow-[0_0_40px_rgba(0,255,200,0.5)]">
            AI & Quant Driven
          </span>
          <br />
          <span className="text-metal-silver">Market Intelligence</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-metal-grey max-w-3xl mx-auto mb-12 leading-relaxed">
          Algo trading tools • Quant research • Market-grade analytics
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link 
            href="#trial" 
            className="btn-neon-green text-lg px-8 py-4 group flex items-center gap-2"
          >
            Start Free Trial
            <ChevronRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="#labs" 
            className="btn-neon-blue text-lg px-8 py-4 group flex items-center gap-2"
          >
            View Labs
            <ChartBarIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </Link>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            { icon: CpuChipIcon, text: 'Algo Engine' },
            { icon: ChartBarIcon, text: 'Quant Research' },
            { icon: SparklesIcon, text: 'AI Assistant' },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-accent-primary/30 hover:border-accent-primary transition-all duration-300 hover:scale-105"
            >
              <feature.icon className="h-4 w-4 text-accent-secondary" />
              <span className="text-metal-silver">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-accent-primary/50 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-accent-primary animate-pulse shadow-[0_0_10px_rgba(0,255,200,0.5)]" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-primary to-transparent pointer-events-none" />
    </section>
  );
}
