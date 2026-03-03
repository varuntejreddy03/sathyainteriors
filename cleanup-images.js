import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

// Folders to keep
const keepFolders = ['optimized-images'];
const keepFiles = ['vite.svg', 'logo.jpeg', 'about-bg.png', 'hero-bg.png', 'heroimage.png'];

function removeOldImages() {
  console.log('🧹 Cleaning up old image folders...\n');

  const items = fs.readdirSync(publicDir);
  let removed = 0;

  items.forEach(item => {
    const itemPath = path.join(publicDir, item);
    const stat = fs.statSync(itemPath);

    // Skip files we want to keep
    if (keepFiles.includes(item)) {
      console.log(`✓ Keeping: ${item}`);
      return;
    }

    // Skip optimized-images folder
    if (keepFolders.includes(item)) {
      console.log(`✓ Keeping: ${item}/`);
      return;
    }

    // Remove old image folders
    if (stat.isDirectory()) {
      fs.rmSync(itemPath, { recursive: true, force: true });
      console.log(`✗ Removed: ${item}/`);
      removed++;
    }
  });

  console.log(`\n✅ Cleanup complete! Removed ${removed} old folder(s)`);
  console.log('📂 Your optimized images are in: public/optimized-images/');
}

removeOldImages();
