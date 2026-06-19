# Deployment Guide for Lijun Zhang Portfolio Site

## 📋 Pre-Deployment Checklist

- [ ] All images and videos added to `/public` directory
- [ ] Environment variables configured
- [ ] Email credentials tested
- [ ] Contact form tested locally
- [ ] All social links updated
- [ ] Performance data reviewed and accurate
- [ ] SEO metadata verified
- [ ] TypeScript types checked (`npm run type-check`)

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the official deployment platform for Next.js and offers the best experience.

#### Steps:

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   - In Vercel Dashboard, go to Settings → Environment Variables
   - Add:
     - `EMAIL_USER`: Your Gmail address
     - `EMAIL_PASSWORD`: Your Gmail App Password
     - `EMAIL_RECIPIENT`: Email to receive messages
     - `NEXT_PUBLIC_SITE_URL`: Your production URL

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Your site will be live at `https://my-portfolio-site.vercel.app`

#### Custom Domain:

1. Go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Automatic HTTPS certificate will be issued

### Option 2: Netlify

#### Steps:

1. **Connect Repository**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and your repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Add Environment Variables**
   - Site settings → Build & deploy → Environment
   - Add all required environment variables

4. **Deploy**
   - Netlify will automatically build and deploy

### Option 3: AWS Amplify

#### Steps:

1. **Connect Repository**
   - Visit AWS Amplify Console
   - Connect GitHub repository
   - Select main branch

2. **Configure Build Settings**
   - Framework: Next.js
   - Build command: `npm run build`
   - Start command: `npm run start`

3. **Environment Variables**
   - Add all required environment variables in Amplify console

4. **Deploy**
   - Amplify handles the deployment

## 🔐 Gmail App Password Setup (Required for Email)

1. Go to [Google Account](https://myaccount.google.com)
2. Select "Security" from left menu
3. Enable "2-Step Verification" if not already enabled
4. Find "App passwords" section
5. Select "Mail" and "Windows Computer" (or your device)
6. Copy the 16-character password
7. Use this in `EMAIL_PASSWORD` environment variable

## 📊 Post-Deployment

### Performance Monitoring

- **Vercel Analytics**: Included automatically
- **Web Vitals**: Monitor in Vercel Dashboard
- **Error Tracking**: Check function logs for issues

### Custom Domain Setup

1. Update domain DNS records (instructions provided by platform)
2. Verify HTTPS certificate (automatic for Vercel/Netlify)
3. Set up redirects from www to non-www (optional)

### Email Configuration Troubleshooting

**Issue: "Invalid login credentials"**
- Verify Gmail address is correct
- Ensure 2-Step Verification is enabled
- Check App Password (not regular password)
- Wait a few minutes after generating App Password

**Issue: "SMTP connection timeout"**
- Check firewall/network settings
- Try different email service provider
- Contact hosting provider support

**Issue: "Email sent but not received"**
- Check spam/junk folder
- Verify recipient email address
- Check email provider's security settings

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments:

- Push to `main` branch → Automatic production deployment
- Push to other branches → Preview deployments (optional)
- Pull requests → Preview URL generated

## 📈 SEO & Analytics

### Add Google Analytics

1. Create property in [Google Analytics](https://analytics.google.com)
2. Get your Measurement ID
3. Add to environment variables or directly in code

### Add Search Console

1. Verify domain in [Google Search Console](https://search.google.com/search-console)
2. Submit XML sitemap (auto-generated at `/sitemap.xml`)
3. Monitor search performance

## 🔧 Rollback & Updates

### Rollback to Previous Version

**Vercel:**
- Go to Deployments tab
- Select previous deployment
- Click "Promote to Production"

**Netlify:**
- Go to Deploys tab
- Select previous deploy
- Click "Publish deploy"

### Update Dependencies

```bash
npm outdated  # Check for updates
npm update    # Update all packages
npm install   # Install latest versions
git commit -am "Update dependencies"
git push      # Trigger new deployment
```

## 💡 Performance Tips

1. **Image Optimization**
   - Use WebP format where supported
   - Compress images with TinyPNG/ImageOptim
   - Use Next.js Image component

2. **Video Optimization**
   - Keep video files under 10MB
   - Use H.264 codec for compatibility
   - Host on CDN or YouTube for large files

3. **Caching**
   - Enable Vercel Edge Caching
   - Set appropriate cache headers
   - Leverage browser caching

## 📞 Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion

---

**Last Updated**: June 2024
