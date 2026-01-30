# Quick Start - Deploy Your Website in 5 Steps! 🚀

Your website is ready to go live! Follow these simple steps:

## Step 1: Configure Git (One-Time Setup)

Open Command Prompt or Git Bash and run:

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

Replace with your actual name and email.

## Step 2: Create Your GitHub Account

1. Go to https://github.com
2. Click "Sign up" (if you don't have an account)
3. Create your free account

## Step 3: Create a New Repository

1. Click the "+" in the top right on GitHub
2. Select "New repository"
3. Repository name: `dejas-butters-website`
4. Make it **Public**
5. **Don't check** any boxes
6. Click "Create repository"

## Step 4: Push Your Code to GitHub

GitHub will show you commands. Use these instead:

```bash
cd "C:\Users\15013\Documents\Projects\Deja's Butters Website"

# Create the first commit
git commit -m "Initial commit - Deja's Butters website"

# Connect to GitHub (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/dejas-butters-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** When prompted for a password, you need a Personal Access Token:
- Go to GitHub Settings > Developer settings > Personal access tokens
- Click "Generate new token (classic)"
- Select "repo" scope
- Copy the token and use it as your password

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" (left sidebar)
4. Under "Source", select "main" branch
5. Click "Save"

**Your site is now live!** It will be at:
`https://YOUR-USERNAME.github.io/dejas-butters-website/`

---

## Want a Custom Domain (dejasbutters.com)?

See the full [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for instructions on:
- Buying dejasbutters.com (~$10/year)
- Connecting it to your GitHub Pages site
- Making it searchable on Google

---

## Files Ready for Deployment

✅ All 11 website files
✅ Git repository initialized
✅ Sitemap.xml for SEO
✅ Robots.txt for search engines
✅ All files staged and ready to commit

**You're all set! Just follow the 5 steps above.** 🎉

Need help? Check the DEPLOYMENT_GUIDE.md for detailed instructions.
