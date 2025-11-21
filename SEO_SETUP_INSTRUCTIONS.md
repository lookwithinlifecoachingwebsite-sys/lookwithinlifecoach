# SEO Setup Instructions

## Overview

Your website has been optimized for Google search engines with comprehensive SEO enhancements. This document outlines what has been implemented and the next steps you need to take.

---

## What Has Been Implemented

### 1. Enhanced Metadata (`app/layout.js`)

- ✅ Optimized title with relevant keywords
- ✅ Comprehensive meta description highlighting your services
- ✅ Relevant keywords for search engine discovery
- ✅ Author, creator, and publisher information
- ✅ Robot directives for proper indexing
- ✅ Canonical URL specification

### 2. Open Graph Tags

- ✅ Facebook/LinkedIn sharing optimization
- ✅ Proper OG image dimensions (1200x630)
- ✅ Site name, title, and description
- ✅ URL and locale information

### 3. Twitter Card Tags

- ✅ Large image card for Twitter sharing
- ✅ Optimized title and description
- ✅ Social media preview image

### 4. Structured Data (JSON-LD)

- ✅ Schema.org markup for ProfessionalService
- ✅ Business information (name, phone: 866-280-4175, description)
- ✅ Founder information (Shelia Malcolm - Certified John Maxwell Transformational Life Coach)
- ✅ Service catalog listing:
  - Individual Coaching
  - Group Coaching
  - Corporate Services
- ✅ Social media profile links
- ✅ Helps Google show rich snippets in search results

### 5. robots.txt

- ✅ Allows all search engine crawlers
- ✅ Points to sitemap location
- ✅ Ready for future private pages if needed

### 6. sitemap.xml

- ✅ Lists all main pages with priorities
- ✅ Update frequencies for each page
- ✅ Helps Google discover and index all pages

---

## Next Steps (Action Required)

### 1. Google Search Console Setup

**Priority: High**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (website)
3. Verify ownership using one of these methods:
   - **HTML tag method**: Copy the verification code from Google
   - Update the verification code in `app/layout.js`:
     ```javascript
     verification: {
       google: 'your-google-verification-code', // Replace this
     }
     ```
   - Push changes and let Google verify
4. Submit your sitemap: `https://lookwithinlifecoaching.com/sitemap.xml`

### 2. Create Social Media Preview Image

**Priority: High**

1. Create an image file named `og-image.jpg`
2. **Dimensions**: 1200px × 630px
3. **Content suggestions**:
   - Your logo
   - Tagline: "Transform your life through personalized coaching"
   - Professional photo of Shelia Malcolm
   - Brand colors (cream/beige background #faedcd)
4. Place the file in `/public/og-image.jpg`
5. This image will appear when your site is shared on social media

### 3. Update Social Media Links

**Priority: Medium**

Update the actual social media URLs in `app/layout.js`:

```javascript
"sameAs": [
  "https://linkedin.com/company/YOUR-ACTUAL-LINKEDIN", // Update
  "https://youtube.com/@YOUR-ACTUAL-YOUTUBE",         // Update
  "https://instagram.com/YOUR-ACTUAL-INSTAGRAM",      // Update
  "https://tiktok.com/@YOUR-ACTUAL-TIKTOK"            // Update
]
```

### 4. Update Domain Name

**Priority: High (Before Deployment)**

Replace all instances of `lookwithinlifecoaching.com` with your actual domain:

**Files to update:**
- `app/layout.js` (multiple locations)
- `public/sitemap.xml` (all URL entries)
- `public/robots.txt` (sitemap location)

**Find and replace:**
- Old: `https://lookwithinlifecoaching.com`
- New: `https://your-actual-domain.com`

### 5. Google Analytics Setup (Optional but Recommended)

**Priority: Medium**

1. Create a Google Analytics account
2. Get your GA4 measurement ID
3. Add to your site by creating `app/components/GoogleAnalytics.js`
4. This will work with the cookie consent banner already implemented

### 6. Update Sitemap Dates

**Priority: Low (Ongoing)**

When you make significant page updates, update the `<lastmod>` dates in `public/sitemap.xml`:

```xml
<lastmod>2025-01-10</lastmod> <!-- Update to current date -->
```

---

## Monitoring and Maintenance

### Weekly Tasks

- Check Google Search Console for:
  - Indexing status
  - Search queries bringing traffic
  - Any crawl errors

### Monthly Tasks

- Update sitemap.xml if new pages are added
- Review and update meta descriptions if needed
- Monitor keyword rankings

### When Adding New Pages

1. Add the page to `public/sitemap.xml`
2. Update the `<lastmod>` date
3. Consider adding page-specific metadata

---

## Testing Your SEO

### Before Going Live

1. **Google Rich Results Test**
   - Go to: https://search.google.com/test/rich-results
   - Test your homepage URL
   - Verify structured data appears correctly

2. **Facebook Sharing Debugger**
   - Go to: https://developers.facebook.com/tools/debug/
   - Test your URL
   - Verify Open Graph image and text appear correctly

3. **Twitter Card Validator**
   - Go to: https://cards-dev.twitter.com/validator
   - Test your URL
   - Verify card preview appears correctly

4. **Mobile-Friendly Test**
   - Go to: https://search.google.com/test/mobile-friendly
   - Test your URL
   - Ensure mobile optimization

---

## SEO Keywords Targeting

Your site is optimized for these keywords:
- Life coaching
- Transformational coaching
- John Maxwell coach
- Individual coaching
- Group coaching
- Corporate coaching
- Leadership development
- Career transition
- Work-life balance
- Personal growth
- Shelia Malcolm

---

## Additional Recommendations

### Content Optimization

1. **Blog Content**: Regularly publish blog posts with relevant keywords
2. **Testimonials**: Add reviews with names and locations for local SEO
3. **Alt Tags**: Add descriptive alt tags to all images
4. **Internal Linking**: Link between related pages on your site

### Technical SEO

1. **Page Speed**: Monitor and optimize loading times
2. **HTTPS**: Ensure SSL certificate is active
3. **Mobile Responsiveness**: Already implemented ✅
4. **Core Web Vitals**: Monitor in Google Search Console

### Local SEO (If Applicable)

1. Create Google Business Profile
2. Add business location to structured data
3. Get listed in relevant directories
4. Encourage client reviews on Google

---

## Support Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Schema.org Documentation](https://schema.org)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

---

## Questions?

If you need help with any of these steps, refer to the documentation links above or consult with a web developer.

**Last Updated**: January 2025
