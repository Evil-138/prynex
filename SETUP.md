# Setup Instructions for PRYNEX Web App

## Quick Start Guide

### Step 1: Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required packages including:
- Next.js framework
- React Three Fiber for 3D graphics
- Lightweight Charts for market data
- Tailwind CSS for styling
- All TypeScript types

### Step 2: Add Your Logo

**IMPORTANT**: Copy your logo file from:
```
/mnt/data/A_logo_design_for_"PRYNEX"_is_presented_in_three_v.png
```

To:
```
d:\prynex\public\assets\logo.png
```

Steps to do this:
1. Create the assets directory if it doesn't exist:
   ```powershell
   New-Item -Path "public\assets" -ItemType Directory -Force
   ```

2. Copy your logo file and rename it to `logo.png`

3. Place it in `public\assets\logo.png`

### Step 3: Create Favicon and Social Images

Create these image files in the `public/` directory:

1. **favicon.ico** (32x32 or 16x16) - Browser tab icon
2. **favicon-16x16.png** - Small favicon variant
3. **apple-touch-icon.png** (180x180) - Apple device icon
4. **og-image.png** (1200x630) - Social media preview image

You can create these from your main logo using:
- Online tools like favicon.io
- Image editing software (Photoshop, GIMP, Figma)
- Or use your existing logo temporarily

### Step 4: Run Development Server

```powershell
npm run dev
```

The app will be available at: http://localhost:3000

### Step 5: Build for Production

When ready to deploy:

```powershell
npm run build
npm start
```

## Detailed Setup

### Directory Structure After Setup

```
d:\prynex\
├── node_modules/          # Created after npm install
├── public/
│   ├── assets/
│   │   └── logo.png       # YOUR LOGO HERE
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── apple-touch-icon.png
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Hero.tsx
│       ├── Navigation.tsx
│       ├── ParticleBackground.tsx
│       ├── Features.tsx
│       ├── DashboardPreview.tsx
│       ├── FounderPanel.tsx
│       ├── Products.tsx
│       ├── Pricing.tsx
│       ├── Education.tsx
│       └── Footer.tsx
├── .gitignore
├── .eslintrc.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Customization Checklist

After initial setup, customize these files:

### 1. Founder Information
File: `src/components/FounderPanel.tsx`
- Update bio text
- Add/remove certifications
- Modify expertise areas
- Change founder message

### 2. Company Information
File: `src/app/layout.tsx`
- Update meta description
- Change keywords
- Add contact information
- Update Open Graph details

### 3. Features & Products
- `src/components/Features.tsx` - Edit feature cards
- `src/components/Products.tsx` - Update product offerings

### 4. Pricing
File: `src/components/Pricing.tsx`
- Adjust pricing tiers
- Modify feature lists
- Update CTAs

### 5. Contact & Social Links
File: `src/components/Footer.tsx`
- Add social media URLs
- Update contact information
- Modify footer links

## Testing Checklist

Before going live:

- [ ] All pages load without errors
- [ ] Logo displays correctly in header
- [ ] Three.js particle background animates smoothly
- [ ] Charts render properly in dashboard preview
- [ ] Founder modal opens and closes
- [ ] All links work
- [ ] Mobile responsive (test on phone)
- [ ] Forms work (newsletter signup)
- [ ] Legal disclaimers are visible
- [ ] Social media preview shows correct image

## Performance Optimization

After setup:

1. **Optimize Images**:
   ```powershell
   # Install sharp for automatic image optimization
   npm install sharp
   ```

2. **Check Bundle Size**:
   ```powershell
   npm run build
   # Review the output for any large bundles
   ```

3. **Test Lighthouse Score**:
   - Open in Chrome
   - F12 → Lighthouse tab
   - Run audit

## Deployment Options

### Option 1: Vercel (Easiest)

1. Push code to GitHub:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Deploy!

### Option 2: Netlify

1. Build the project:
   ```powershell
   npm run build
   ```

2. Drag the `.next` folder to [netlify.com](https://netlify.com)

### Option 3: Self-Hosted

Requirements:
- Node.js 18+ server
- PM2 or similar process manager

```bash
npm run build
npm start
```

## Environment Variables (Optional)

If you need API keys or secrets, create `.env.local`:

```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## Troubleshooting

### Issue: npm install fails
**Solution**: 
```powershell
# Clear npm cache
npm cache clean --force
# Try again
npm install
```

### Issue: Port 3000 is already in use
**Solution**:
```powershell
# Use a different port
$env:PORT=3001; npm run dev
```

### Issue: Images not loading
**Solution**: 
- Verify file exists at `public/assets/logo.png`
- Check file permissions
- Clear browser cache

### Issue: TypeScript errors
**Solution**:
```powershell
# Install dependencies again
npm install
# Restart VS Code
```

## Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Add your logo file
3. ✅ Create favicon files
4. ✅ Run dev server (`npm run dev`)
5. ✅ Customize content
6. ✅ Test thoroughly
7. ✅ Build for production
8. ✅ Deploy!

## Support & Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Three.js: https://threejs.org/docs
- Lightweight Charts: https://tradingview.github.io/lightweight-charts/

---

**Ready to launch PRYNEX? Let's build the future of quantitative trading! 🚀**
