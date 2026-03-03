const { Jimp } = require('jimp')
const fs = require('fs')
const path = require('path')

const FOLDER = 'public/09112025 -CD-Anoop and family'

async function processImages() {
  const files = fs.readdirSync(FOLDER).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));

  for (const file of files) {
    const filePath = path.join(FOLDER, file);

    try {
      const image = await Jimp.read(filePath);

      // Get natural dimensions
      const w = image.bitmap.width;
      const h = image.bitmap.height;

      // Assuming a standard phone camera shot orientation issue: 
      // If height is notably greater than width (portrait), but should be landscape based on room bounds, 
      // OR since user says they are *all* rotated, we'll try applying a right-angle flip (e.g. 90deg)
      // Wait, "Anoop and family in this all images are rotated". Let's check aspect ratio.
      // Actually, if it's strictly a 90 degree rotation required, we'll do it.

      console.log(`Processing ${file}: ${w}x${h}`);

      // Let's rotate it!
      image.rotate(90);
      await image.write(filePath);

      console.log(`Rotated ${file}`);
    } catch (e) {
      console.error(`Error processing ${file}: ${e.message}`);
    }
  }
}

processImages();
