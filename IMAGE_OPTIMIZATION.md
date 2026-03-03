# Image Optimization Guide

## Setup

### 1. Run Image Optimization
```bash
node optimize-images.js
```

This script will:
- Read images from `public/Images to add in website/`
- Compress and resize them to max 1920x1440px
- Generate WebP format (primary, ~80% quality)
- Generate JPG fallback (75% quality, progressive)
- Save to `public/optimized-images/` organized by category:
  - `about/` - About section images
  - `hero/` - Hero section images
  - `transforming/` - Transforming area images
  - `portfolio/` - Portfolio images

### 2. Update Components

Use the image manifest in your components:

```jsx
import { getImageUrl, getImageFallback } from '../utils/imageManifest';

// In your component:
<picture>
  <source srcSet={getImageUrl('portfolio', 'imageName')} type="image/webp" />
  <img src={getImageFallback('portfolio', 'imageName')} alt="description" />
</picture>
```

Or for background images:
```jsx
<div style={{ backgroundImage: `url("${getImageUrl('portfolio', 'imageName')}")` }} />
```

## Benefits

✅ **WebP Format** - 25-35% smaller than JPG
✅ **Optimized Size** - Max 1920x1440px (no upscaling)
✅ **Progressive JPG** - Better perceived loading
✅ **Organized Structure** - Easy to manage by category
✅ **Fallback Support** - Works in older browsers

## File Size Reduction

Typical results:
- Original: 2-5MB per image
- Optimized WebP: 200-600KB
- Optimized JPG: 300-800KB

**Total reduction: 60-80% smaller**

## Next Steps

1. Run `node optimize-images.js`
2. Update your components to use `getImageUrl()` helper
3. Remove old image folders from `public/`
4. Test in browser DevTools (Network tab) to verify loading
