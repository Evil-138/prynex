# PRYNEX - Quick Customization Guide

This guide helps you quickly customize the PRYNEX web app without diving deep into the code.

## 🎨 Brand & Identity

### Logo
**File**: `public/assets/logo.png`
**Used in**: Navigation header, Footer
**Recommended size**: 160x40px

To change:
1. Replace `public/assets/logo.png` with your logo
2. Keep the filename the same for automatic updates

### Colors
**File**: `tailwind.config.js`

Current neon colors:
```javascript
neon: {
  teal: '#00d1c1',    // Primary accent
  blue: '#00a3ff',    // Secondary accent
  cyan: '#00f0ff',    // Tertiary accent
  green: '#00ff88',   // CTA buttons
}
```

To change brand colors, update these hex values.

### Fonts
**File**: `src/app/layout.tsx`

Current fonts:
- Headings: Poppins
- Body: Inter
- Code: JetBrains Mono

To change, update the font imports.

## 📝 Content Updates

### Hero Section
**File**: `src/components/Hero.tsx`

**Main headline** (line 41):
```typescript
<span className="text-white">PRYNEX</span>
<span className="gradient-text text-neon-glow">
  AI & Quant Driven
</span>
<span className="text-metal-silver">Market Intelligence</span>
```

**Subtext** (line 50):
```typescript
Algo trading tools • Quant research • Market-grade analytics
```

**CTA buttons** (line 56-67):
- "Start Free Trial" - link to `#trial`
- "View Labs" - link to `#labs`

### Founder Information
**File**: `src/components/FounderPanel.tsx`

**Name** (line 43):
```typescript
<h3>Priyanshu Shukla</h3>
```

**Title** (line 45):
```typescript
<p>Founder & CEO, PRYNEX</p>
```

**Founded** (line 46):
```typescript
<p>Founded 2025</p>
```

**Short bio** (lines 52-57):
```typescript
<p>Priyanshu Shukla is a quant-focused market analyst...</p>
```

**Founder message** (line 62):
```typescript
"At PRYNEX we build transparent, research-driven tools..."
```

**Skills/Expertise** (line 71):
```typescript
['Equities', 'Forex', 'Crypto', 'Commodities', 'Quant', 'AI/ML']
```

### Features
**File**: `src/components/Features.tsx`

Update the `features` array (lines 10-42):
```typescript
const features = [
  {
    name: 'Feature Name',
    description: 'Feature description...',
    icon: IconComponent,
    color: 'neon-teal',
  },
  // Add more features...
];
```

### Products
**File**: `src/components/Products.tsx`

Update the `products` array (lines 12-53):
```typescript
const products = [
  {
    name: 'Product Name',
    description: 'Product description...',
    icon: IconComponent,
    features: ['Feature 1', 'Feature 2', ...],
    badge: 'Popular', // Optional
  },
  // Add more products...
];
```

### Pricing
**File**: `src/components/Pricing.tsx`

Update the `plans` array (lines 5-61):
```typescript
const plans = [
  {
    name: 'Plan Name',
    price: '$99',
    period: 'per month',
    description: 'Plan description',
    features: ['Feature 1', 'Feature 2', ...],
    cta: 'Button text',
    highlighted: false,
  },
  // Add more plans...
];
```

## 🔗 Links & Navigation

### Navigation Menu
**File**: `src/components/Navigation.tsx`

Update menu items (lines 7-13):
```typescript
const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Products', href: '#products' },
  // Add more menu items...
];
```

### Footer Links
**File**: `src/components/Footer.tsx`

Update footer sections (lines 3-34):
```typescript
const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    // Add more links...
  ],
  // More sections...
};
```

### Social Media
**File**: `src/components/Footer.tsx`

Update social links (lines 36-40):
```typescript
const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/yourhandle', icon: '...' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/yourcompany', icon: '...' },
  // Add more social links...
];
```

## 📧 Contact Information

### Email Addresses
Update these throughout the site:

1. **Footer** (`src/components/Footer.tsx`):
   - General inquiries: info@prynex.com
   - Support: support@prynex.com

2. **Newsletter** (`src/components/Education.tsx`, line 182):
   ```typescript
   <input type="email" placeholder="Enter your email" />
   ```

### Contact Links
**File**: `src/components/Footer.tsx`

Update contact section (lines 83-91):
```typescript
{ name: 'Contact', href: '#contact' }
// Change to actual contact page or email link
```

## 📊 SEO & Metadata

### Page Title & Description
**File**: `src/app/layout.tsx`

Update metadata (lines 23-30):
```typescript
export const metadata: Metadata = {
  title: 'PRYNEX — AI & Quant Driven Market Intelligence',
  description: 'Your description here...',
  keywords: 'your, keywords, here',
  // ...
};
```

### Open Graph Image
**File**: `public/og-image.png`
**Size**: 1200x630px
**Purpose**: Social media preview image

Create this image with:
- PRYNEX logo
- Tagline
- Brand colors

## 🎭 Legal Content

### Main Disclaimer
**File**: `src/components/Footer.tsx` (lines 148-154)

Update legal disclaimer text:
```typescript
<p className="text-sm text-yellow-100 leading-relaxed">
  <strong>PRYNEX provides educational content...</strong>
  Your custom legal text here...
</p>
```

### Dashboard Disclaimer
**File**: `src/components/DashboardPreview.tsx` (line 204)

Update research disclaimer:
```typescript
<strong>Research Only:</strong> Your custom disclaimer...
```

## 🖼️ Images & Assets

### Required Files
```
public/
├── favicon.ico              # Browser icon (32x32)
├── favicon-16x16.png        # Small favicon (16x16)
├── apple-touch-icon.png     # Apple devices (180x180)
├── og-image.png             # Social preview (1200x630)
└── assets/
    └── logo.png             # Main logo (160x40)
```

### Creating Favicon
Use these tools:
- [favicon.io](https://favicon.io)
- [realfavicongenerator.net](https://realfavicongenerator.net)

## 🎨 Styling Tweaks

### Button Styles
**File**: `src/app/globals.css` (lines 32-51)

Three button variants:
- `.btn-neon` - Teal button
- `.btn-neon-green` - Green button (CTAs)
- `.btn-neon-blue` - Blue button (secondary)

### Card Styles
**File**: `src/app/globals.css` (lines 54-57)

Feature cards with hover effect:
```css
.feature-card {
  @apply glass p-6 rounded-xl transition-all duration-300;
  @apply hover:-translate-y-2 hover:shadow-glass hover:border-neon-teal/50;
}
```

### Background Colors
**File**: `tailwind.config.js` (lines 12-17)

Dark backgrounds:
```javascript
dark: {
  primary: '#0b0f13',    // Darkest
  secondary: '#0f1720',  // Medium
  tertiary: '#1a1f2e',   // Lightest
}
```

## 📱 Mobile Responsiveness

All components are responsive by default using Tailwind breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

To adjust mobile behavior, update the responsive classes in each component.

## 🔧 Quick Fixes

### Change Main CTA Color
Find all instances of `btn-neon-green` and replace with desired variant.

### Update Copyright Year
**File**: `src/components/Footer.tsx` (line 168)
```typescript
© 2025 PRYNEX
```

### Disable Animations
**File**: `src/lib/utils.ts` (lines 95-98)

Check `prefersReducedMotion()` function - it automatically respects user preferences.

### Change Chart Colors
**File**: `src/components/DashboardPreview.tsx` (lines 41-48)
```typescript
upColor: '#00ff88',      // Green candles
downColor: '#ff0066',    // Red candles
```

## 📦 Adding New Sections

1. Create component in `src/components/YourSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to page structure:
```typescript
<main className="relative">
  <Hero />
  <Features />
  <YourSection /> {/* Add here */}
  <Footer />
</main>
```

## 🚀 Performance Tips

### Optimize Images
- Use WebP format when possible
- Compress before uploading
- Use Next.js Image component for automatic optimization

### Reduce Bundle Size
- Remove unused dependencies
- Code-split heavy components
- Lazy load below-the-fold content

### Speed Up Build
```powershell
# Clear Next.js cache
Remove-Item -Recurse -Force .next
npm run build
```

## 📋 Pre-Launch Checklist

- [ ] Logo added and displays correctly
- [ ] All text customized (hero, founder, features, etc.)
- [ ] Contact information updated
- [ ] Social media links added
- [ ] Legal disclaimers reviewed
- [ ] Favicon set created
- [ ] OG image created
- [ ] Mobile tested
- [ ] Forms tested
- [ ] Links verified
- [ ] SEO metadata updated

## 🆘 Need Help?

- **Next.js Issues**: Check [Next.js docs](https://nextjs.org/docs)
- **Styling**: See [Tailwind docs](https://tailwindcss.com/docs)
- **Components**: Review component files with comments
- **Deployment**: Read `DEPLOYMENT.md`

---

**Pro Tip**: Use VS Code's search (Ctrl+Shift+F) to find any text you want to change across all files!
