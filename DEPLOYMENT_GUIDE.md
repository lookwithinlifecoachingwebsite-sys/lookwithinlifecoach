# Deployment Guide - Look Within Life Coaching

This guide explains how to deploy to each environment in our three-tier deployment pipeline.

## Overview

We have three environments:
- **Development** - For active development and testing features
- **QA** - For quality assurance and pre-production testing
- **Production** - Live site for end users

## Environment URLs

After deployment, your sites will be available at:

- **Development:** `https://development--[your-site-name].netlify.app`
- **QA:** `https://qa--[your-site-name].netlify.app`
- **Production:** `https://[your-site-name].netlify.app`

---

## Deployment Workflow

### Standard Flow
```
Feature Development → Development → QA → Production
```

---

## How to Deploy to Each Environment

### 1. Deploy to Development

Development is where you test new features and changes first.

**Steps:**

```bash
# Make sure you're on the development branch
git checkout development

# Make your changes to the code
# (edit files as needed)

# Stage and commit your changes
git add .
git commit -m "Description of your changes"

# Push to GitHub
git push origin development
```

**What Happens:**
- GitHub Actions automatically triggers
- Builds and deploys to development environment
- Available at: `https://development--[your-site-name].netlify.app`
- Check progress: https://github.com/[your-repo]/actions

**When to Use:**
- Testing new features
- Experimenting with code
- Quick iterations
- Developer testing

---

### 2. Deploy to QA

QA is where you verify everything works before going to production.

**Steps:**

```bash
# Switch to QA branch
git checkout qa

# Pull latest changes
git pull origin qa

# Merge development into QA
git merge development

# Push to GitHub
git push origin qa
```

**Alternative - Direct Changes to QA:**

```bash
# If you need to make a hotfix directly on QA
git checkout qa
# Make your changes
git add .
git commit -m "QA hotfix: description"
git push origin qa
```

**What Happens:**
- GitHub Actions automatically triggers
- Builds and deploys to QA environment
- Available at: `https://qa--[your-site-name].netlify.app`
- Check progress: https://github.com/[your-repo]/actions

**When to Use:**
- Testing approved features before production
- QA team testing
- Stakeholder review
- Integration testing

---

### 3. Deploy to Production

Production is your live site. Only deploy tested and approved changes.

**Steps:**

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge QA into main (after QA approval)
git merge qa

# Push to GitHub
git push origin main
```

**What Happens:**
- GitHub Actions automatically triggers
- Builds and deploys to production
- Available at: `https://[your-site-name].netlify.app`
- Check progress: https://github.com/[your-repo]/actions

**When to Use:**
- After successful QA testing
- For approved releases
- When you're ready to go live

---

## Common Workflows

### Working on a New Feature

```bash
# 1. Start from development
git checkout development
git pull origin development

# 2. Create a feature branch (optional but recommended)
git checkout -b feature/my-new-feature

# 3. Make changes and commit
git add .
git commit -m "Add new feature"

# 4. Push feature branch
git push origin feature/my-new-feature

# 5. Create Pull Request on GitHub
# Go to GitHub and create PR: feature/my-new-feature → development

# 6. After PR is merged, development deploys automatically
```

### Promoting from Dev → QA → Production

```bash
# 1. Development is tested and ready
git checkout qa
git merge development
git push origin qa
# Wait for QA deployment and testing

# 2. QA is approved
git checkout main
git merge qa
git push origin main
# Production deploys automatically
```

### Hotfix for Production

```bash
# 1. Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug

# 2. Make fix and commit
git add .
git commit -m "Fix critical bug"

# 3. Merge back to main
git checkout main
git merge hotfix/critical-bug
git push origin main

# 4. Backport to other branches
git checkout qa
git merge main
git push origin qa

git checkout development
git merge qa
git push origin development
```

---

## Monitoring Deployments

### GitHub Actions
View deployment progress:
1. Go to: https://github.com/lookwithinlifecoachingwebsite-sys/lookwithinlifecoach/actions
2. Click on the running workflow
3. Watch the build and deployment steps

### Netlify Dashboard
View deployment status:
1. Go to: https://app.netlify.com/
2. Click on your site
3. Go to "Deploys" tab
4. See all deployments by branch

---

## Rollback

If you need to rollback a deployment:

### Option 1: Netlify UI (Fastest)
1. Go to Netlify Dashboard → Deploys
2. Find the last working deployment
3. Click "Publish deploy"

### Option 2: Git Revert
```bash
# On the affected branch
git checkout main  # or qa, or development
git log  # Find the commit to revert
git revert <commit-hash>
git push origin main
```

---

## Branch Management

### Keeping Branches in Sync

Always maintain this flow:
```
development (most changes) → qa (tested changes) → main (approved changes)
```

**Sync development with main periodically:**
```bash
git checkout development
git merge main
git push origin development
```

---

## Troubleshooting

### Deployment Failed in GitHub Actions
1. Check the Actions tab for error logs
2. Verify secrets are set correctly:
   - `NETLIFY_AUTH_TOKEN`
   - `NETLIFY_SITE_ID`
3. Check build logs for errors

### Styling Not Working
- Ensure `netlify.toml` is present
- Verify `@netlify/plugin-nextjs` is configured
- Check that all dependencies are installed

### Changes Not Showing Up
1. Clear browser cache
2. Check the correct environment URL
3. Verify deployment completed successfully
4. Wait 1-2 minutes for CDN propagation

---

## Best Practices

1. ✅ **Always test in development first**
2. ✅ **Never push directly to main** - always go through QA
3. ✅ **Use descriptive commit messages**
4. ✅ **Pull before you push** to avoid conflicts
5. ✅ **Tag production releases** for easy tracking
6. ✅ **Review changes before merging** to QA or production
7. ✅ **Keep development, QA, and main in sync**
8. ✅ **Test thoroughly in QA** before promoting to production

---

## Quick Reference Commands

```bash
# Deploy to Development
git checkout development
git add .
git commit -m "Your message"
git push origin development

# Promote to QA
git checkout qa
git merge development
git push origin qa

# Promote to Production
git checkout main
git merge qa
git push origin main

# Check current branch
git branch

# View deployment status
# GitHub: https://github.com/[your-repo]/actions
# Netlify: https://app.netlify.com/
```

---

## Support

For issues or questions:
- Check GitHub Actions logs
- Review Netlify deployment logs
- Verify environment variables
- Ensure all dependencies are installed

---

**Last Updated:** 2025-10-09
