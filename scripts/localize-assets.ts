import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

interface DomAsset {
  route: string;
  url: string;
  mediaType: string;
  component: string;
  displayWidth: number;
  displayHeight: number;
  naturalWidth: number;
  naturalHeight: number;
  objectFit: string;
  objectPosition: string;
  alt: string;
}

function classifyLocalDir(filename: string, url: string): string {
  const lower = filename.toLowerCase();
  if (lower.endsWith('.ttf') || lower.endsWith('.woff2') || lower.endsWith('.otf')) return 'fonts';
  if (lower.includes('logo') || lower.includes('favicon') || lower.includes('available')) return 'brand';
  if (
    lower.endsWith('.svg') &&
    (lower.includes('icon') ||
      lower.includes('arrow') ||
      lower.includes('star') ||
      lower.includes('facebook') ||
      lower.includes('instagram') ||
      lower.includes('linkedin') ||
      lower.includes('sponsor') ||
      lower.includes('rotashow') ||
      lower.includes('play') ||
      lower.includes('tick') ||
      lower.includes('plus') ||
      lower.includes('minus') ||
      lower.includes('hf-value') ||
      lower.includes('hf-process'))
  ) {
    return 'icons';
  }
  if (lower.includes('404') || lower.includes('lock-icon')) return 'images/errors';
  if (lower.includes('hero')) return 'images/hero';
  if (lower.includes('project') || lower.includes('challenge') || lower.includes('approach') || lower.includes('result')) return 'images/projects';
  if (lower.includes('service')) return 'images/services';
  if (lower.includes('team')) return 'images/team';
  if (lower.includes('testimonial') || lower.includes('trusted') || lower.includes('author')) return 'images/testimonials';
  if (lower.includes('blog')) return 'images/blog';
  if (lower.includes('process')) return 'images/process';
  if (lower.includes('about') || lower.includes('story') || lower.includes('value') || lower.includes('awwards')) return 'images/about';
  if (lower.includes('contact') || lower.includes('why')) return 'images/workspace';
  if (lower.includes('license')) return 'images/licenses';
  if (lower.includes('bg') || lower.includes('pricing') || lower.includes('cta') || lower.includes('inner') || lower.includes('changelog')) return 'images/backgrounds';
  if (lower.includes('hf-content-block')) return 'icons';
  return 'images/misc';
}

function sanitizeFilename(url: string): string {
  const parsed = new URL(url);
  let base = decodeURIComponent(path.basename(parsed.pathname));
  // Strip Webflow hash prefix up to first underscore if it's 24+ hex chars
  base = base.replace(/^[0-9a-f]{24}_([0-9a-f]{32}_)?/i, '');
  base = base.replace(/\s+/g, '-').replace(/[()%]+/g, '').replace(/-+/g, '-');
  if (parsed.hostname.includes('fonts.gstatic.com')) {
    return 'BebasNeue-Regular.woff2';
  }
  return base;
}

async function main() {
  const domAssets: DomAsset[] = JSON.parse(fs.readFileSync('docs/research/discovered-dom-assets.json', 'utf8'));
  const netAssets: Record<string, { contentType: string; size: number }> = JSON.parse(
    fs.readFileSync('docs/research/discovered-network-assets.json', 'utf8')
  );
  const cssText = fs.readFileSync('docs/research/reference-shared.css', 'utf8');
  const homeHtml = fs.readFileSync('docs/research/home.html', 'utf8');

  // Collect all candidate URLs from DOM, Network, CSS, and HTML
  const urlMap = new Map<
    string,
    {
      url: string;
      pages: Set<string>;
      components: Set<string>;
      displayWidth: number;
      displayHeight: number;
      naturalWidth: number;
      naturalHeight: number;
      objectFit: string;
      objectPosition: string;
      mediaType: string;
    }
  >();

  const addUrl = (rawUrl: string, partial: Partial<DomAsset> = {}) => {
    if (!rawUrl) return;
    if (rawUrl.includes('challenges.cloudflare.com')) return;
    if (rawUrl.match(/\.(js|css)(\?|$)/i)) return;
    if (!rawUrl.includes('website-files.com') && !rawUrl.includes('fonts.gstatic.com')) return;
    // Normalize responsive Webflow variants (-p-500, -p-800, -p-1080, -p-1600) to original full-res if possible
    const cleanUrl = rawUrl.replace(/-p-\d+(?=\.(avif|webp|png|jpe?g)$)/i, '');
    const existing = urlMap.get(cleanUrl);
    if (!existing) {
      urlMap.set(cleanUrl, {
        url: cleanUrl,
        pages: new Set(partial.route ? [partial.route] : []),
        components: new Set(partial.component ? [partial.component] : []),
        displayWidth: partial.displayWidth || 0,
        displayHeight: partial.displayHeight || 0,
        naturalWidth: partial.naturalWidth || 0,
        naturalHeight: partial.naturalHeight || 0,
        objectFit: partial.objectFit || '',
        objectPosition: partial.objectPosition || '',
        mediaType: partial.mediaType || (cleanUrl.endsWith('.svg') ? 'svg' : cleanUrl.match(/\.(ttf|woff2)/i) ? 'font' : 'image'),
      });
    } else {
      if (partial.route) existing.pages.add(partial.route);
      if (partial.component) existing.components.add(partial.component);
      if ((partial.displayWidth || 0) > existing.displayWidth) existing.displayWidth = partial.displayWidth || 0;
      if ((partial.displayHeight || 0) > existing.displayHeight) existing.displayHeight = partial.displayHeight || 0;
      if ((partial.naturalWidth || 0) > existing.naturalWidth) existing.naturalWidth = partial.naturalWidth || 0;
      if ((partial.naturalHeight || 0) > existing.naturalHeight) existing.naturalHeight = partial.naturalHeight || 0;
    }
  };

  for (const d of domAssets) addUrl(d.url, d);
  for (const u of Object.keys(netAssets)) addUrl(u, { route: 'network' });
  for (const m of cssText.matchAll(/url\(["']?(https:\/\/[^"')]+)["']?\)/g)) {
    addUrl(m[1], { route: 'css', component: 'stylesheet' });
  }
  for (const m of homeHtml.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^\s"'<>]+/g)) {
    addUrl(m[0], { route: '/', component: 'html' });
  }

  // Also ensure all project/service/blog full-res URLs from page-contents.json are included
  const pageContents = JSON.parse(fs.readFileSync('docs/research/page-contents.json', 'utf8'));
  for (const [route, pdata] of Object.entries(pageContents) as Array<[string, { images?: Array<{ src: string; className: string }> }]>) {
    for (const img of pdata.images || []) {
      addUrl(img.src, { route, component: img.className });
    }
  }

  console.log(`Unique canonical asset URLs to acquire: ${urlMap.size}`);

  const manifest: Array<Record<string, unknown>> = [];
  const usedPaths = new Set<string>();
  const shaToLocal = new Map<string, string>();
  let idx = 1;

  for (const entry of urlMap.values()) {
    let filename = sanitizeFilename(entry.url);
    const subDir = classifyLocalDir(filename, entry.url);
    let relPath = `/assets/${subDir}/${filename}`;
    // Avoid collisions with different files having same sanitized name
    if (usedPaths.has(relPath)) {
      const ext = path.extname(filename);
      const base = path.basename(filename, ext);
      relPath = `/assets/${subDir}/${base}-${idx}${ext}`;
    }
    const diskPath = path.resolve('public', relPath.slice(1));
    fs.mkdirSync(path.dirname(diskPath), { recursive: true });

    let downloadUrl = entry.url;
    let res = await fetch(downloadUrl);
    if (!res.ok) {
      // Fallback: check if original responsive URL exists in netAssets
      const fallbackUrl = Object.keys(netAssets).find((u) => u.replace(/-p-\d+(?=\.(avif|webp|png|jpe?g)$)/i, '') === entry.url);
      if (fallbackUrl) {
        downloadUrl = fallbackUrl;
        res = await fetch(downloadUrl);
      }
    }

    if (!res.ok) {
      console.warn(`FAILED (${res.status}): ${downloadUrl}`);
      manifest.push({
        id: `asset-${String(idx).padStart(3, '0')}`,
        referenceUrl: downloadUrl,
        referencePage: [...entry.pages].join(', '),
        component: [...entry.components].slice(0, 3).join(', '),
        mediaType: entry.mediaType,
        mimeType: '',
        originalFilename: filename,
        originalWidth: entry.naturalWidth,
        originalHeight: entry.naturalHeight,
        displayWidth: entry.displayWidth,
        displayHeight: entry.displayHeight,
        aspectRatio: entry.naturalHeight ? `${entry.naturalWidth}:${entry.naturalHeight}` : '',
        objectFit: entry.objectFit,
        objectPosition: entry.objectPosition,
        localPath: '',
        licenseStatus: 'check-template-license',
        acquisitionStatus: `failed-${res.status}`,
        sha256: '',
        optimizedVariants: [],
        notes: 'Download failed',
      });
      idx++;
      continue;
    }

    const buf = Buffer.from(await res.arrayBuffer());
    const ct = res.headers.get('content-type') || '';
    const sha256 = crypto.createHash('sha256').update(buf).digest('hex');

    let finalRelPath = relPath;
    let status = 'acquired';
    if (shaToLocal.has(sha256)) {
      finalRelPath = shaToLocal.get(sha256)!;
      status = 'deduplicated';
    } else {
      fs.writeFileSync(diskPath, buf);
      usedPaths.add(relPath);
      shaToLocal.set(sha256, relPath);
    }

    let origW = entry.naturalWidth;
    let origH = entry.naturalHeight;
    if (entry.mediaType === 'image' && !filename.endsWith('.svg') && status === 'acquired') {
      try {
        const meta = await sharp(buf).metadata();
        origW = meta.width || origW;
        origH = meta.height || origH;
      } catch {
        // ignore
      }
    }

    manifest.push({
      id: `asset-${String(idx).padStart(3, '0')}`,
      referenceUrl: downloadUrl,
      referencePage: [...entry.pages].join(', '),
      component: [...entry.components].slice(0, 3).join(', '),
      mediaType: entry.mediaType,
      mimeType: ct,
      originalFilename: filename,
      originalWidth: origW,
      originalHeight: origH,
      displayWidth: entry.displayWidth,
      displayHeight: entry.displayHeight,
      aspectRatio: origH ? `${origW}:${origH}` : '',
      objectFit: entry.objectFit,
      objectPosition: entry.objectPosition,
      localPath: finalRelPath,
      licenseStatus: 'template-preview-asset',
      acquisitionStatus: status,
      sha256,
      optimizedVariants: [],
      notes: '',
    });
    idx++;
  }

  fs.writeFileSync('docs/research/asset-manifest.json', JSON.stringify(manifest, null, 2));

  // Build clean human-readable summary of all 32 pages for accurate implementation
  let summary = '# HyperFrame Reference Pages Summary\n\n';
  for (const [route, data] of Object.entries(pageContents) as Array<[string, { status: number; title: string; metaDescription: string; headings: Array<{ tag: string; text: string; fontSize: string }>; images: Array<{ src: string; alt: string; className: string }>; textBlocks: Array<{ tag: string; className: string; text: string; href?: string }> }]>) {
    summary += `## ${route} (HTTP ${data.status})\n`;
    summary += `Title: ${data.title}\nMeta: ${data.metaDescription}\n\nHeadings:\n`;
    for (const h of data.headings) {
      summary += `- ${h.tag} (${h.fontSize}): ${h.text}\n`;
    }
    summary += `\nImages (${data.images.length}):\n`;
    const uniqueImgs = new Set<string>();
    for (const im of data.images) {
      const clean = im.src.replace(/-p-\d+(?=\.(avif|webp|png|jpe?g)$)/i, '');
      if (!uniqueImgs.has(clean)) {
        uniqueImgs.add(clean);
        summary += `- [${im.className}] ${sanitizeFilename(clean)}\n`;
      }
    }
    summary += `\nKey Text Blocks:\n`;
    const seenTxt = new Set<string>();
    for (const tb of data.textBlocks) {
      if (tb.className.includes('nav-') || tb.className.includes('footer-') || tb.className.includes('menu-')) continue;
      const key = `${tb.className}|${tb.text}`;
      if (seenTxt.has(key)) continue;
      seenTxt.add(key);
      summary += `- [${tb.tag}.${tb.className}] ${tb.text}${tb.href ? ` -> ${tb.href}` : ''}\n`;
    }
    summary += '\n---\n\n';
  }
  fs.writeFileSync('docs/research/extracted-pages-summary.md', summary);

  // Build route-manifest.json
  const discoveredRoutes = JSON.parse(fs.readFileSync('docs/research/discovered-routes.json', 'utf8'));
  const routeManifest = discoveredRoutes.map((r: { referenceUrl: string; localRoute: string; title: string; links: string[]; sections: Array<{ className: string }> }) => ({
    referenceUrl: r.referenceUrl,
    localRoute: r.localRoute,
    pageTitle: r.title,
    pageType: r.localRoute.startsWith('/project/')
      ? 'Project Details'
      : r.localRoute.startsWith('/service/')
        ? 'Service Details'
        : r.localRoute.startsWith('/blog/')
          ? 'Blog Details'
          : r.localRoute === '/'
            ? 'Home'
            : r.localRoute.slice(1),
    parentCmsCollection: r.localRoute.startsWith('/project/')
      ? 'Projects'
      : r.localRoute.startsWith('/service/')
        ? 'Services'
        : r.localRoute.startsWith('/blog/')
          ? 'Blogs'
          : null,
    sectionOrder: r.sections.map((s) => s.className),
    linkedRoutes: r.links,
    inspectionStatus: 'verified-live',
  }));
  fs.writeFileSync('docs/research/route-manifest.json', JSON.stringify(routeManifest, null, 2));

  console.log(`Manifest written: ${manifest.length} records. Summary written to docs/research/extracted-pages-summary.md`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
