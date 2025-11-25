# PRYNEX — AI & Quant Driven Market Intelligence

A premium, elegant web application for PRYNEX — a quant/algo trading, research & SaaS company. Built with Next.js, featuring a dark theme with neon accents, interactive charts, and comprehensive market intelligence tools.

![PRYNEX](public/assets/logo.png)

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **3D Animations**: Three.js particle effects and WebGL backgrounds
- **Interactive Charts**: Real-time market data visualization with Lightweight Charts
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile
- **Dark Theme**: Sophisticated dark mode with neon accents (#00d1c1, #00a3ff, #00f0ff, #00ff88)
- **Premium Components**:
  - Hero section with animated particle background
  - Feature showcase with hover effects
  - Live dashboard preview with candlestick charts
  - Founder/CEO panel with modal
  - Product pages
  - Pricing tiers
  - Education & research section
  - Comprehensive footer with legal disclaimers

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

## 🛠️ Installation

1. **Clone the repository** (or you're already in it):
```bash
cd d:\prynex
```

2. **Install dependencies**:
```bash
npm install
```

3. **Add your logo file**:
   - Copy your logo from `/mnt/data/A_logo_design_for_"PRYNEX"_is_presented_in_three_v.png`
   - Paste it to `public/assets/logo.png`
   - Optionally create variants:
     - `public/assets/logo.svg` (SVG version)
     - `public/assets/logo-light.png` (Light theme variant if needed)

4. **Create favicon files**:
   - Place `favicon.ico` in the `public/` directory
   - Place `favicon-16x16.png` in the `public/` directory
   - Place `apple-touch-icon.png` in the `public/` directory
   - Place `og-image.png` (1200x630) in the `public/` directory for social sharing

## 🚀 Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

Build the optimized production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📁 Project Structure

```
prynex/
├── public/
│   └── assets/
│       └── logo.png              # Your PRYNEX logo
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles with Tailwind
│   │   ├── layout.tsx            # Root layout with metadata
│   │   └── page.tsx              # Home page
│   └── components/
│       ├── Hero.tsx              # Hero section with Three.js
│       ├── Navigation.tsx        # Header navigation
│       ├── ParticleBackground.tsx # WebGL particle animation
│       ├── Features.tsx          # Feature cards
│       ├── DashboardPreview.tsx  # Live chart demo
│       ├── FounderPanel.tsx      # Priyanshu Shukla bio & modal
│       ├── Products.tsx          # Product showcase
│       ├── Pricing.tsx           # Pricing tiers
│       ├── Education.tsx         # Learning resources
│       └── Footer.tsx            # Footer with legal disclaimers
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎨 Design System

### Color Palette

- **Dark Backgrounds**:
  - Primary: `#0b0f13`
  - Secondary: `#0f1720`
  - Tertiary: `#1a1f2e`
  
- **Neon Accents**:
  - Teal: `#00d1c1`
  - Blue: `#00a3ff`
  - Cyan: `#00f0ff`
  - Green: `#00ff88`

- **Metallic Neutrals**:
  - Silver: `#c0c5ce`
  - Grey: `#8b92a0`

### Typography

- **Headings**: Poppins (geometric sans)
- **Body**: Inter (clean, legible)
- **Code/Mono**: JetBrains Mono

### Components

All components use Tailwind utility classes with custom theme extensions. Key component classes:

- `.glass` - Glass morphism effect
- `.btn-neon` - Neon glow buttons
- `.feature-card` - Animated feature cards
- `.gradient-text` - Gradient text effect

## 👤 Founder Information

**Priyanshu Shukla**
- Role: Founder & CEO, PRYNEX
- Founded: 2025
- Specializations: Indian equities, forex, crypto, commodities, quant & AI

The founder panel includes:
- Professional bio
- Expertise areas
- Founder message
- Certifications (NISM, etc.)
- Extended modal with full background

## ⚖️ Legal & Compliance

The application includes prominent legal disclaimers:

> "PRYNEX provides educational content, research, and software tools. We do not provide personalized investment advice unless explicitly licensed and registered."

All signals and research are clearly labeled as "research only" with appropriate risk warnings.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted with Node.js

## 📊 Performance Targets

- Lighthouse Accessibility: 90+
- Lighthouse Best Practices: 90+
- Lighthouse Performance: 70+ (acceptable due to Three.js and charts)

## 🔧 Customization

### Updating Content

- **Hero Text**: Edit `src/components/Hero.tsx`
- **Features**: Modify the `features` array in `src/components/Features.tsx`
- **Products**: Update `products` array in `src/components/Products.tsx`
- **Pricing Plans**: Edit `plans` array in `src/components/Pricing.tsx`
- **Founder Info**: Update content in `src/components/FounderPanel.tsx`

### Styling

All styling uses Tailwind CSS. Custom theme configuration is in `tailwind.config.js`.

## 📦 Key Dependencies

- **next** - React framework
- **react** - UI library
- **three** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helpers for Three.js
- **lightweight-charts** - Financial charts
- **gsap** - Animation library
- **framer-motion** - React animations
- **@heroicons/react** - Icon library
- **tailwindcss** - Utility-first CSS

## 🐛 Troubleshooting

**Issue**: Three.js particle background not showing
- **Solution**: Ensure WebGL is supported in your browser

**Issue**: Charts not rendering
- **Solution**: Check browser console for errors, ensure `lightweight-charts` is properly installed

**Issue**: Logo not displaying
- **Solution**: Verify logo file exists at `public/assets/logo.png`

## 📝 License

© 2025 PRYNEX. All rights reserved. Founded by Priyanshu Shukla.

## 🤝 Support

For questions or support:
- Email: [Your contact email]
- Website: [Your website]
- Documentation: [Link to docs]

## 🎯 Roadmap

- [ ] Add authentication system
- [ ] Integrate real market data APIs
- [ ] Build actual backtesting engine
- [ ] Implement algo bot builder
- [ ] Add user dashboard
- [ ] Create admin panel
- [ ] Mobile app (React Native)

---

Built with precision • Powered by data • Made for traders
