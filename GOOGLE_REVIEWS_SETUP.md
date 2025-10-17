# Google Reviews API Setup Guide

This guide will walk you through setting up Google Reviews API integration for Look Within Life Coaching website.

## Overview

We'll use Google's Places API to dynamically fetch and display your Google Business reviews on your website. This will replace the static 4.9/5 rating with live Google reviews data.

---

## Prerequisites

- Google Account
- Google Business Profile for Look Within Life Coaching
- Credit card (required for Google Cloud, but won't be charged with free tier)

---

## Step 1: Find Your Google Place ID

Your Place ID is a unique identifier for your business location on Google.

### Method 1: Using Place ID Finder Tool

1. Visit: https://googlebusinessprofileplaces.com/place-id-finder/
2. Search for: **"Look Within Life Coaching"**
3. Find your business in the results
4. Copy the **Place ID** (format: `ChIJN1t_tDeuEmsRUsoyG83frY4`)
5. Save this Place ID - you'll need it later

### Method 2: Using Google's Official Tool

1. Visit: https://developers.google.com/maps/documentation/places/web-service/place-id
2. Click on **"Place ID Finder"**
3. Search for your business name or address
4. Click on your business location on the map
5. Copy the **Place ID** from the information panel
6. Save this Place ID

### Method 3: Manual Search

1. Go to Google Maps: https://maps.google.com
2. Search for **"Look Within Life Coaching"**
3. Click on your business
4. Look at the URL - it contains a long code after `!1s` - this is your Place ID
5. Example URL: `https://www.google.com/maps/place/.../@...!1s0x1234567890:0xabcdef!...`
6. The Place ID is the part that looks like: `ChIJN1t_tDeuEmsRUsoyG83frY4`

---

## Step 2: Create Google Cloud Project

### 2.1 Access Google Cloud Console

1. Go to: https://console.cloud.google.com/
2. Sign in with your Google account
3. Accept the Terms of Service if prompted

### 2.2 Create New Project

1. Click the **project dropdown** at the top of the page (next to "Google Cloud")
2. Click **"NEW PROJECT"** button
3. Enter project details:
   - **Project name:** `Look Within Life Coaching Website`
   - **Organization:** Leave as default (or select if you have one)
   - **Location:** Leave as default
4. Click **"CREATE"**
5. Wait for the project to be created (takes ~30 seconds)
6. Select your new project from the dropdown

### 2.3 Set Up Billing (Required)

**Note:** You won't be charged with normal usage due to $200 monthly free credit.

1. In the console, click **"Billing"** in the left menu (or top navigation)
2. Click **"LINK A BILLING ACCOUNT"**
3. Click **"CREATE BILLING ACCOUNT"**
4. Fill in your information:
   - Country
   - Business name (optional)
   - Payment method (credit card)
5. Click **"START MY FREE TRIAL"** or **"SUBMIT AND ENABLE BILLING"**

---

## Step 3: Enable Required APIs

### 3.1 Enable Places API

1. In Google Cloud Console, go to **"APIs & Services"** → **"Library"**
2. Search for: **"Places API"**
3. Click on **"Places API"** (the new one, not "Places API (Legacy)")
4. Click **"ENABLE"**
5. Wait for activation (~10-30 seconds)

### 3.2 Enable Maps JavaScript API (Optional but Recommended)

1. Still in the API Library, search for: **"Maps JavaScript API"**
2. Click on **"Maps JavaScript API"**
3. Click **"ENABLE"**

---

## Step 4: Create API Key

### 4.1 Generate API Key

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"+ CREATE CREDENTIALS"** at the top
3. Select **"API key"**
4. Your API key will be created and displayed
5. **IMPORTANT:** Copy this key immediately and save it securely
6. Click on the **"Edit API key"** button (or the pencil icon)

### 4.2 Restrict API Key (CRITICAL for Security)

**Application Restrictions:**

1. Under **"Application restrictions"**, select **"HTTP referrers (web sites)"**
2. Click **"+ ADD AN ITEM"**
3. Add these referrers (one at a time):
   ```
   http://localhost:3000/*
   https://lookwithinlifecoaching.com/*
   https://*.lookwithinlifecoaching.com/*
   ```
4. This ensures only your website can use this API key

**API Restrictions:**

1. Under **"API restrictions"**, select **"Restrict key"**
2. Click the dropdown under **"Select APIs"**
3. Check **"Places API"**
4. Uncheck all other APIs
5. Click **"SAVE"**

### 4.3 Save Your API Key

Copy your API key and save it somewhere secure. Format:
```
AIzaSyD1234567890abcdefghijklmnopqrstuvwxyz
```

---

## Step 5: Add Credentials to Your Website

### 5.1 Create Local Environment File

1. Open your project folder: `/Users/oyiekd/Desktop/Lookwithinlifecoaching/lookwithin-app/`
2. Create a new file called `.env.local` (if it doesn't exist)
3. Add the following lines:

```env
# Google Places API Configuration
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_PLACE_ID=your_place_id_here
GOOGLE_PLACES_API_KEY=your_api_key_here
```

4. Replace `your_api_key_here` with your actual API key
5. Replace `your_place_id_here` with your actual Place ID
6. Save the file

### 5.2 Update Other Environment Files

**For Development (.env.development):**
```env
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_PLACE_ID=your_place_id_here
GOOGLE_PLACES_API_KEY=your_api_key_here
```

**For Production (.env.production):**
```env
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_PLACE_ID=your_place_id_here
GOOGLE_PLACES_API_KEY=your_api_key_here
```

### 5.3 Important Security Notes

- **NEVER** commit `.env.local` to Git
- The `.env.local` file should already be in `.gitignore`
- When deploying, add these environment variables to your hosting platform (Vercel/Netlify)

---

## Step 6: Verify Your Setup

### 6.1 Test Your Place ID

1. Visit: https://developers.google.com/maps/documentation/places/web-service/place-details
2. Click **"Try it!"** in the right panel
3. Enter your **Place ID**
4. Click **"Execute"**
5. You should see your business details returned
6. Look for the `rating` and `reviews` fields

### 6.2 Test Your API Key

Open this URL in your browser (replace with your values):
```
https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=name,rating,reviews,user_ratings_total&key=YOUR_API_KEY
```

You should see JSON response with your business details.

---

## Step 7: Understanding API Usage & Costs

### Free Tier
- Google provides **$200 free credit per month**
- This covers approximately **30,000+ Place Details requests**
- Our implementation will use caching to minimize requests

### Typical Usage for Your Site
- **With Caching:** ~100-500 requests/month
- **Cost:** $0 (well within free tier)
- **Cache Duration:** 24 hours (reviews update once daily)

### Request Pricing
- Place Details API: $0.017 per request (Basic Data)
- Reviews are included in Basic Data
- First $200/month is free

### Monitoring Usage
1. Go to Google Cloud Console
2. Navigate to **"Billing"** → **"Reports"**
3. View your API usage and costs
4. Set up budget alerts if desired

---

## Step 8: Implementation on Your Website

Once you provide the credentials, I will:

### 8.1 Create API Route
- **File:** `app/api/google-reviews/route.js`
- Fetches reviews from Google Places API
- Implements server-side caching (24 hours)
- Keeps API key secure on the server

### 8.2 Create Google Reviews Component
- **File:** `app/components/GoogleReviews.js`
- Displays star rating
- Shows total number of reviews
- Renders individual review cards (optional)

### 8.3 Update Rating Section
- Replace static 4.9/5 rating with live Google rating
- Display total review count
- Add "View on Google" link
- Maintain existing styling

### 8.4 Features Included
- ⭐ Live star rating from Google
- 📊 Total review count
- 🔄 Auto-refresh (daily cache)
- 📱 Responsive design
- 🎨 Matches your existing style
- 🚀 Fast loading with caching
- 🔒 Secure API key handling

---

## Step 9: Deployment

### For Vercel (Recommended)
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   - `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY`: Your API key
   - `NEXT_PUBLIC_GOOGLE_PLACE_ID`: Your Place ID
   - `GOOGLE_PLACES_API_KEY`: Your API key (for server-side)
4. Redeploy your site

### For Netlify
1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add the same variables as above
4. Redeploy your site

---

## Troubleshooting

### Issue: "API key not valid"
**Solution:**
- Check that Places API is enabled
- Verify API restrictions include your domain
- Wait 5-10 minutes after creating/updating key

### Issue: "This API project is not authorized"
**Solution:**
- Enable Places API in Google Cloud Console
- Check billing is set up correctly
- Verify you're using the correct API key

### Issue: "Request denied"
**Solution:**
- Check HTTP referrer restrictions
- Ensure your domain is added to allowed referrers
- Verify API key is restricted to Places API

### Issue: Reviews not showing
**Solution:**
- Verify Place ID is correct
- Check that your business has reviews on Google
- Look at browser console for error messages
- Verify environment variables are set correctly

### Issue: "Quota exceeded"
**Solution:**
- Check usage in Google Cloud Console
- Verify caching is working properly
- Consider increasing cache duration

---

## Maintenance

### Regular Tasks
- **Monitor API usage** monthly in Google Cloud Console
- **Check for billing alerts** (should stay within free tier)
- **Review cached data** to ensure it's updating properly

### Updating Reviews
- Reviews automatically update every 24 hours
- Manual refresh: Clear browser cache or wait for next scheduled update
- Server-side cache can be adjusted in the API route

---

## Security Best Practices

✅ **DO:**
- Keep API key in environment variables only
- Use HTTP referrer restrictions
- Restrict API key to only Places API
- Monitor API usage regularly
- Use server-side API routes for sensitive operations

❌ **DON'T:**
- Commit API keys to Git
- Share API keys publicly
- Remove API restrictions
- Hardcode credentials in source code
- Use client-side requests with unrestricted keys

---

## Next Steps

Once you have completed Steps 1-5:

1. **Share with me:**
   - ✓ Your Google Place ID
   - ✓ Your Google API Key

2. **I will implement:**
   - ✓ API route for fetching reviews
   - ✓ Google Reviews component
   - ✓ Update rating section
   - ✓ Add caching mechanism
   - ✓ Test implementation

3. **You will:**
   - ✓ Review the implementation
   - ✓ Test on localhost
   - ✓ Deploy to production
   - ✓ Add environment variables to hosting platform

---

## Support Resources

- **Google Places API Documentation:** https://developers.google.com/maps/documentation/places/web-service/overview
- **Google Cloud Console:** https://console.cloud.google.com/
- **API Key Best Practices:** https://developers.google.com/maps/api-security-best-practices
- **Pricing Calculator:** https://developers.google.com/maps/billing/understanding-cost-of-use

---

## Contact

If you encounter any issues during setup, please share:
1. Screenshot of the error
2. Step where you got stuck
3. Any error messages from Google Cloud Console

I'll help you troubleshoot and complete the setup!

---

**Last Updated:** October 2025
**Created for:** Look Within Life Coaching Website
