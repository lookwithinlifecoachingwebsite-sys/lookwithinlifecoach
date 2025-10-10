# GitHub Actions Deployment Pipeline

This directory contains GitHub Actions workflows for automated deployments.

## Setup Required

Before the workflows can run, you need to add the following secrets to your GitHub repository:

### Adding GitHub Secrets

1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

#### Required Secrets

1. **NETLIFY_AUTH_TOKEN**
   - Get this from: https://app.netlify.com/user/applications#personal-access-tokens
   - Click "New access token"
   - Give it a name like "GitHub Actions"
   - Copy the token and add it as a secret

2. **NETLIFY_SITE_ID**
   - Go to your Netlify site dashboard
   - Go to **Site settings** → **General** → **Site details**
   - Copy the "Site ID" (starts with a UUID like `abc123-def456...`)
   - Add it as a secret

### Setting Up Environment Protection Rules

To enable manual approval for production deployments:

1. Go to **Settings** → **Environments**
2. Click **New environment** or select **production**
3. Enable **Required reviewers**
4. Add yourself or team members as required reviewers
5. Save protection rules

Repeat for `development` and `qa` environments (but don't add reviewers - only for production)

## How the Pipeline Works

### Development Environment
- **Trigger:** Automatic on push to `development` branch
- **Approval:** None required
- **Deploys to:** Netlify development alias

### QA Environment
- **Trigger:** Automatic on push to `qa` branch
- **Approval:** None required
- **Includes:** Test execution (if tests exist)
- **Deploys to:** Netlify QA alias

### Production Environment
- **Trigger:** Push to `main` branch OR manual workflow dispatch
- **Approval:** REQUIRED (via GitHub Environment protection)
- **Includes:** Test execution, deployment tagging
- **Deploys to:** Netlify production

## Workflow Process

```
┌─────────────┐
│ Development │ ← Push to development branch
│   (Auto)    │   Automatically deploys
└──────┬──────┘
       │ Merge when ready
       ▼
┌─────────────┐
│     QA      │ ← Push/merge to qa branch
│   (Auto)    │   Automatically deploys + runs tests
└──────┬──────┘
       │ Merge when QA approved
       ▼
┌─────────────┐
│ Production  │ ← Push/merge to main branch
│  (Manual)   │   Requires manual approval in GitHub
└─────────────┘   Creates deployment tag
```

## Manual Deployment

You can also trigger deployments manually:

1. Go to **Actions** tab
2. Select **Staged Deployment Pipeline**
3. Click **Run workflow**
4. Select the environment to deploy to
5. Click **Run workflow**

## Deployment URLs

After deployment, you can find the URLs in:
- GitHub Actions run summary
- Netlify dashboard
- Commit comments (automatically posted by the workflow)

## Troubleshooting

### Workflow not running?
- Check that secrets are properly set
- Verify branch names match exactly
- Check workflow permissions in repo settings

### Deployment failed?
- Check the Actions tab for detailed logs
- Verify Netlify site ID is correct
- Ensure Netlify auth token has proper permissions

### Need to rollback?
- Go to Netlify dashboard
- Find the previous successful deploy
- Click "Publish deploy"
