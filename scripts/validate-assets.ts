import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

interface AssetEntry {
  id: string;
  referenceUrl: string;
  referencePage: string;
  component: string;
  mediaType: string;
  mimeType: string;
  originalFilename: string;
  originalWidth: number;
  originalHeight: number;
  displayWidth: number;
  displayHeight: number;
  aspectRatio: string;
  objectFit: string;
  objectPosition: string;
  localPath: string;
  licenseStatus: string;
  acquisitionStatus: string;
  sha256: string;
  optimizedVariants: string[];
  notes: string;
}

async function main() {
  const manifestPath = path.resolve('docs/research/asset-manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.error('Missing docs/research/asset-manifest.json');
    process.exit(1);
  }
  const manifest: AssetEntry[] = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  let valid = 0;
  let invalid = 0;

  for (const item of manifest) {
    if (!item.localPath) continue;
    const fullPath = path.resolve('public', item.localPath.replace(/^\/+/, ''));
    if (!fs.existsSync(fullPath)) {
      console.error(`MISSING: ${item.id} -> ${fullPath}`);
      invalid++;
      continue;
    }
    const buf = fs.readFileSync(fullPath);
    if (buf.length === 0) {
      console.error(`EMPTY: ${item.id} -> ${fullPath}`);
      invalid++;
      continue;
    }
    const head = buf.slice(0, 64).toString('utf8').toLowerCase();
    if (head.includes('<!doctype html') || head.includes('<html')) {
      console.error(`HTML ERROR RESPONSE: ${item.id} -> ${fullPath}`);
      invalid++;
      continue;
    }
    const sha256 = crypto.createHash('sha256').update(buf).digest('hex');
    item.sha256 = sha256;

    if (item.mediaType === 'image' && !fullPath.endsWith('.svg')) {
      try {
        const meta = await sharp(fullPath).metadata();
        item.originalWidth = meta.width || item.originalWidth;
        item.originalHeight = meta.height || item.originalHeight;
      } catch (err) {
        console.warn(`Sharp decode warning for ${fullPath}:`, (err as Error).message);
      }
    }
    valid++;
  }

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Validated ${valid} assets, ${invalid} invalid.`);
  if (invalid > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
