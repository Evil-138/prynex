# PRYNEX Web App - Deployment Guide

## Pre-Deployment Checklist

Before deploying to production, ensure you've completed:

### 1. Assets ✓
- [ ] Logo file added to `public/assets/logo.png`
- [ ] Favicon files created (`favicon.ico`, `favicon-16x16.png`)
- [ ] Apple touch icon (`apple-touch-icon.png`)
- [ ] Open Graph image (`og-image.png` - 1200x630px)

### 2. Content Review ✓
- [ ] Founder information is accurate
- [ ] All links work correctly
- [ ] Contact information updated
- [ ] Social media links added
- [ ] Legal disclaimers reviewed
- [ ] Pricing is correct

### 3. Testing ✓
- [ ] Tested on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Tested on mobile devices
- [ ] Tested on tablets
- [ ] All forms work
- [ ] Charts render properly
- [ ] Three.js animations run smoothly
- [ ] Navigation works on all screen sizes

### 4. Performance ✓
- [ ] Images optimized
- [ ] Lighthouse score checked
- [ ] Bundle size acceptable
- [ ] No console errors

### 5. SEO & Analytics ✓
- [ ] Meta tags configured
- [ ] Open Graph tags set
- [ ] Analytics installed (optional)
- [ ] Sitemap generated (optional)

## Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Built specifically for Next.js
- Zero configuration
- Automatic HTTPS
- Global CDN
- Preview deployments for every push

**Steps:**

1. **Install Vercel CLI** (optional):
   ```powershell
   npm install -g vercel
   ```

2. **Initialize Git** (if not done):
   ```powershell
   git init
   git add .
   git commit -m "Initial commit - PRYNEX web app"
   ```

3. **Push to GitHub**:
   ```powershell
   # Create repo on GitHub first, then:
   git remote add origin https://github.com/your-username/prynex.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! 🎉

**Custom Domain:**
```
1. Go to your project in Vercel
2. Settings → Domains
3. Add your domain (e.g., prynex.com)
4. Update DNS records as instructed
```

### Option 2: Netlify

**Steps:**

1. **Build the project**:
   ```powershell
   npm run build
   ```

2. **Deploy via Netlify CLI**:
   ```powershell
   npm install -g netlify-cli
   netlify deploy --prod
   ```

   Or drag & drop `.next` folder to [netlify.com](https://netlify.com)

**Configuration:**
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Option 3: AWS Amplify

**Steps:**

1. **Push to GitHub** (as above)

2. **Connect on AWS Amplify**:
   - Go to AWS Amplify Console
   - Click "New App" → "Host web app"
   - Connect GitHub
   - Select repository
   - Configure build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```

### Option 4: Self-Hosted VPS

**Requirements:**
- Ubuntu 20.04+ or similar Linux server
- Node.js 18+
- Nginx (for reverse proxy)
- PM2 (process manager)

**Steps:**

1. **Install Node.js on server**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install PM2**:
   ```bash
   sudo npm install -g pm2
   ```

3. **Upload your code** (via Git or SCP):
   ```bash
   git clone https://github.com/your-username/prynex.git
   cd prynex
   npm install
   npm run build
   ```

4. **Start with PM2**:
   ```bash
   pm2 start npm --name "prynex" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx**:
   ```nginx
   server {
       listen 80;
       server_name prynex.com www.prynex.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **SSL with Let's Encrypt**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d prynex.com -d www.prynex.com
   ```

### Option 5: Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

**Build and run:**
```bash
docker build -t prynex-web .
docker run -p 3000:3000 prynex-web
```

## Environment Variables

If you need environment variables, create them in your hosting platform:

**Vercel/Netlify:**
- Go to project settings
- Add environment variables
- Redeploy

**Common variables:**
```env
NEXT_PUBLIC_SITE_URL=https://prynex.com
NEXT_PUBLIC_API_URL=https://api.prynex.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Post-Deployment

### 1. Monitor Performance

**Google Analytics** (optional):
```typescript
// Add to src/app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### 2. Set Up Monitoring

**Vercel Analytics** (if on Vercel):
```powershell
npm install @vercel/analytics
```

```typescript
// Add to src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 3. Regular Updates

**Keep dependencies updated:**
```powershell
# Check for updates
npm outdated

# Update dependencies
npm update

# Or use npm-check-updates
npx npm-check-updates -u
npm install
```

## Rollback Plan

If something goes wrong:

**Vercel:**
- Go to Deployments tab
- Click on previous working deployment
- Click "Promote to Production"

**Git-based:**
```powershell
git revert HEAD
git push
```

## Troubleshooting

### Issue: Build fails on deployment
**Check:**
- All dependencies are in `package.json`
- No TypeScript errors locally
- Build succeeds with `npm run build`
- Node version matches (18+)

### Issue: Images not loading
**Solution:**
- Verify image paths are correct
- Use `/assets/logo.png` not `../assets/logo.png`
- Check Next.js Image optimization settings

### Issue: 404 on routes
**Solution:**
- Ensure you're using Next.js's file-based routing
- Check if dynamic routes are properly configured
- Verify `next.config.js` settings

## Security Checklist

Before going live:

- [ ] No API keys in client-side code
- [ ] Environment variables properly set
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] CORS properly configured (if using API)
- [ ] Input validation on all forms
- [ ] Rate limiting on API routes (if any)

## Next Steps After Deployment

1. **Set up domain email** (info@prynex.com)
2. **Configure DNS records** (A, CNAME, MX records)
3. **Enable CDN** (usually automatic with Vercel/Netlify)
4. **Set up backup** (GitHub is your backup!)
5. **Monitor uptime** (UptimeRobot, Pingdom)
6. **Set up error tracking** (Sentry - optional)

## Continuous Deployment

Once connected to Git:
1. Push to `main` branch
2. Automatic deployment triggered
3. Preview deployments for PRs
4. Zero downtime deployments

---

**Ready to deploy PRYNEX? Choose your platform and follow the steps above! 🚀**

Need help? Check the platform-specific documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [AWS Amplify Docs](https://docs.amplify.aws)
