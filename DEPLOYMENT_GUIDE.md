# How to Deploy Deja's Butters Website to GitHub Pages

This guide will help you get your website online at a custom URL like dejasbutters.com using GitHub Pages.

## Step 1: Create a GitHub Account (if you don't have one)

1. Go to https://github.com
2. Click "Sign up"
3. Follow the steps to create your free account

## Step 2: Create a New Repository on GitHub

1. Log into GitHub
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `dejas-butters-website` (or any name you prefer)
5. Choose "Public" (required for free GitHub Pages)
6. **DO NOT** check "Initialize with README" (we already have files)
7. Click "Create repository"

## Step 3: Push Your Website to GitHub

Open Git Bash or Command Prompt and run these commands:

```bash
cd "C:\Users\15013\Documents\Projects\Deja's Butters Website"

# Add all your files
git add .

# Create your first commit
git commit -m "Initial commit - Deja's Butters website"

# Connect to your GitHub repository (replace YOUR-USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/dejas-butters-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** GitHub may ask for your username and password. You'll need to use a Personal Access Token instead of your password:
- Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
- Generate new token with "repo" permissions
- Use this token as your password when pushing

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Click "Pages" (left sidebar)
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes for deployment

Your site will be live at: `https://YOUR-USERNAME.github.io/dejas-butters-website/`

## Step 5: Connect Your Custom Domain (dejasbutters.com)

### A. Purchase the Domain

1. Go to a domain registrar:
   - **Namecheap** (recommended, ~$8-12/year): https://www.namecheap.com
   - **Google Domains**: https://domains.google
   - **GoDaddy**: https://www.godaddy.com

2. Search for "dejasbutters.com"
3. Purchase the domain (usually $8-15 per year)

### B. Configure DNS Settings

In your domain registrar's DNS settings, add these records:

**For the root domain (dejasbutters.com):**
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

**For www subdomain (www.dejasbutters.com):**
```
Type: CNAME
Host: www
Value: YOUR-USERNAME.github.io
```

### C. Add Custom Domain to GitHub Pages

1. Go back to your GitHub repository
2. Go to Settings > Pages
3. Under "Custom domain", enter: `dejasbutters.com`
4. Click "Save"
5. Check "Enforce HTTPS" (wait a few minutes for it to become available)

### D. Wait for DNS Propagation

- DNS changes can take 24-48 hours to fully propagate
- Your site should be accessible at dejasbutters.com within a few hours
- You can check status at: https://www.whatsmydns.net

## Step 6: Make Your Site Searchable on Google

Once your site is live, submit it to Google:

1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter your domain: `dejasbutters.com`
4. Follow verification steps
5. Submit your sitemap (we'll create one below)

### Create a Sitemap

Create a file called `sitemap.xml` in your website folder with this content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://dejasbutters.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://dejasbutters.com/about.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://dejasbutters.com/faq.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://dejasbutters.com/product.html</loc>
    <priority>0.7</priority>
  </url>
</urlset>
```

Then push it to GitHub:
```bash
git add sitemap.xml
git commit -m "Add sitemap for SEO"
git push
```

## Quick Summary

1. ✅ Create GitHub account
2. ✅ Create new repository
3. ✅ Push your code to GitHub
4. ✅ Enable GitHub Pages
5. ✅ Buy domain (dejasbutters.com)
6. ✅ Configure DNS settings
7. ✅ Add custom domain to GitHub Pages
8. ✅ Submit to Google Search Console

## Cost Breakdown

- **GitHub Pages Hosting**: FREE ✨
- **Domain Name**: $8-15/year
- **Total Annual Cost**: ~$8-15/year

## Need Help?

If you get stuck:
- GitHub Pages Documentation: https://docs.github.com/en/pages
- GitHub Support: https://support.github.com
- Namecheap Support: https://www.namecheap.com/support

---

**Your website is ready to go live! Just follow these steps and dejasbutters.com will be online.** 🚀👑
