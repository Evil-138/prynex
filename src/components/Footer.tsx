import Link from 'next/link';
import Logo from './Logo';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Products', href: '#products' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'API Docs', href: '#api' },
  ],
  company: [
    { name: 'About', href: '#founder' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'Documentation', href: '#docs' },
    { name: 'Research', href: '#research' },
    { name: 'Tutorials', href: '#tutorials' },
    { name: 'Community', href: '#community' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'Compliance', href: '#compliance' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
  { name: 'LinkedIn', href: '#', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
  { name: 'GitHub', href: '#', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-primary border-t border-accent-primary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Main Footer */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Logo variant="gradient" className="mb-4" />
              <p className="text-metal-grey text-sm leading-relaxed mb-6">
                AI & Quant Driven Market Intelligence. Building transparent, research-driven tools for modern traders.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-dark-surface border border-accent-primary/30 hover:border-accent-primary hover:bg-accent-primary/10 transition-all duration-300 flex items-center justify-center group hover:scale-110"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5 fill-metal-grey group-hover:fill-accent-primary transition-colors" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h3 className="font-heading font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-metal-grey hover:text-neon-teal transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-metal-grey hover:text-neon-teal transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-metal-grey hover:text-neon-teal transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-metal-grey hover:text-neon-teal transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="py-6 border-t border-dark-border/30">
          <div className="glass p-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 mb-6">
            <h4 className="font-semibold text-yellow-200 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Important Legal Disclaimer
            </h4>
            <p className="text-sm text-yellow-100 leading-relaxed">
              <strong>PRYNEX provides educational content, research, and software tools.</strong> We do not provide personalized investment advice unless explicitly licensed and registered. All trading signals, model portfolios, and research content are labeled as "research only" and include appropriate risk warnings. Trading and investing involve substantial risk of loss. Past performance is not indicative of future results. Please consult with a licensed financial advisor before making investment decisions.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-dark-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-metal-grey">
              © 2025 PRYNEX. All rights reserved. Founded by Priyanshu Shukla.
            </p>
            <p className="text-xs text-metal-grey">
              Made with precision • Powered by data • Built for traders
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
