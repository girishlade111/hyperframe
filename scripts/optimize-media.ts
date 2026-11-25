import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

async function optimizeDir(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await optimizeDir(full);
    } else if (/\.(png|jpe?g|webp|avif)$/i.test(entry.name)) {
      const meta = await sharp(full).metadata();
      console.log(`${path.relative(process.cwd(), full)}: ${meta.format} ${meta.width}x${meta.height} (${(fs.statSync(full).size / 1024).toFixed(1)} KB)`);
    }
  }
}

async function main() {
  const imagesDir = path.resolve('public/assets/images');
  if (!fs.existsSync(imagesDir)) {
    console.log('No public/assets/images directory found yet.');
    return;
  }
  await optimizeDir(imagesDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
