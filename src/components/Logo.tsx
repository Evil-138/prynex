'use client';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'default' | 'mono' | 'gradient';
}

export default function Logo({ className = 'h-10 w-auto', showText = true, variant = 'default' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_10px_rgba(0,255,200,0.5)]"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffc8" />
            <stop offset="50%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#b84fff" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Hexagonal frame */}
        <path 
          d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z" 
          stroke={variant === 'gradient' ? "url(#logoGradient)" : "#00ffc8"}
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        />
        
        {/* Inner hexagon */}
        <path 
          d="M50 15 L75 30 L75 70 L50 85 L25 70 L25 30 Z" 
          stroke={variant === 'gradient' ? "url(#logoGradient)" : "#00d4ff"}
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        
        {/* P letter - stylized */}
        <path 
          d="M40 35 L40 65 M40 35 L52 35 C57 35 60 38 60 43 C60 48 57 51 52 51 L40 51" 
          stroke={variant === 'gradient' ? "url(#logoGradient)" : "#00ffc8"}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />
        
        {/* X letter - stylized */}
        <path 
          d="M65 50 L75 65 M75 50 L65 65" 
          stroke={variant === 'gradient' ? "url(#logoGradient)" : "#00ffc8"}
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        
        {/* Circuit lines */}
        <line x1="50" y1="5" x2="50" y2="15" stroke="#00ffc8" strokeWidth="1" opacity="0.5" />
        <line x1="85" y1="27.5" x2="75" y2="30" stroke="#00ffc8" strokeWidth="1" opacity="0.5" />
        <line x1="85" y1="72.5" x2="75" y2="70" stroke="#00ffc8" strokeWidth="1" opacity="0.5" />
        
        {/* Corner dots */}
        <circle cx="50" cy="5" r="2" fill="#00ffc8" filter="url(#glow)" />
        <circle cx="85" cy="27.5" r="2" fill="#00d4ff" filter="url(#glow)" />
        <circle cx="85" cy="72.5" r="2" fill="#b84fff" filter="url(#glow)" />
        <circle cx="50" cy="95" r="2" fill="#00ffc8" filter="url(#glow)" />
        <circle cx="15" cy="72.5" r="2" fill="#00d4ff" filter="url(#glow)" />
        <circle cx="15" cy="27.5" r="2" fill="#b84fff" filter="url(#glow)" />
      </svg>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-heading font-black text-2xl tracking-wider leading-none ${
            variant === 'gradient' 
              ? 'gradient-text' 
              : 'text-white'
          }`}>
            PRYNEX
          </span>
          <span className="text-[10px] tracking-[0.2em] text-accent-secondary font-medium uppercase">
            Quant Trading
          </span>
        </div>
      )}
    </div>
  );
}
