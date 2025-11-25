'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'mono' | 'gradient';
}

export default function Logo({ className = '', showText = false, variant = 'default' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image */}
      <Image 
        src="/assets/prynex-logo.png"
        alt="PRYNEX - Algo Quant Research"
        width={240}
        height={80}
        priority
        unoptimized
        className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,255,200,0.3)]"
      />
    </div>
  );
}
