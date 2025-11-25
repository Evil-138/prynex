'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'mono' | 'gradient';
}

export default function Logo({ className = '', showText = false, variant = 'default' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Image - Large and Prominent */}
      <Image 
        src="/assets/prynex-logo.png"
        alt="PRYNEX - Algo Quant Research"
        width={400}
        height={120}
        priority
        unoptimized
        className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_25px_rgba(0,212,255,0.5)] hover:drop-shadow-[0_0_35px_rgba(0,212,255,0.7)] transition-all duration-300"
      />
    </div>
  );
}
