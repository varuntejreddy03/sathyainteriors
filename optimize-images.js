import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sourceDir = path.join(__dirname, 'public', 'Images to add in website');
const outputDir = path.join(__dirname, 'public', 'optimized-images');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const categories = {
  'About us store area image to add': 'about',
  'Homepage entrance image with pooja unit with living room': 'hero',
  'our work transforming area to add': 'transforming',
  'Portfolio area images to add': 'portfolio'
};

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  for (const [folderName, category] of Object.entries(categories)) {
    const folderPath = path.join(sourceDir, folderName);
    
    if (!fs.existsSync(folderPath)) {
      console.log(`⚠️  Folder not found: ${folderName}`);
      continue;
    }

    const categoryDir = path.join(outputDir, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    const files = fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    
    console.log(`📁 Processing ${category} (${files.length} images)...`);

    for (const file of files) {
      const inputPath = path.join(folderPath, file);
      const baseName = path.parse(file).name;
      const webpPath = path.join(categoryDir, `${baseName}.webp`);
      const jpgPath = path.join(categoryDir, `${baseName}.jpg`);

      try {
        // Create WebP (primary format)
        await sharp(inputPath)
          .resize(1920, 1440, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(webpPath);

        // Create fallback JPG
        await sharp(inputPath)
          .resize(1920, 1440, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 75, progressive: true })
          .toFile(jpgPath);

        console.log(`  ✓ ${baseName}`);
      } catch (err) {
        console.error(`  ✗ Error processing ${file}:`, err.message);
      }
    }
    console.log('');
  }

  console.log('✅ Image optimization complete!');
  console.log(`📂 Optimized images saved to: ${outputDir}`);
}

optimizeImages().catch(err => console.error('Fatal error:', err));
