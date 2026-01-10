import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, '../dist');
const BASE_URL = 'https://laluka.github.io/osk-shop/';

const routes = [
  { path: 'pentest', name: 'pentest', title: 'OffenSkill | Pentest & Audits', desc: 'Expert security assessments for your applications and infrastructure.' },
  { path: 'training', name: 'training', title: 'OffenSkill | Training Programs', desc: 'Master offensive security from rookie to expert levels.' },
  { path: 'mentoring', name: 'mentoring', title: 'OffenSkill | Mentoring', desc: 'Personalized guidance to accelerate your cybersecurity career.' },
  { path: 'faq', name: 'faq', title: 'OffenSkill | Q&A', desc: 'Frequently asked questions about our services and methodology.' }
];

async function injectMeta() {
  const indexHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('❌ dist/index.html not found! Run npm run build first.');
    return;
  }

  const originalHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  for (const route of routes) {
    const routeDir = path.join(DIST_DIR, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    console.log(`🛠️  Generating index.html for /${route.path}...`);

    let newHtml = originalHtml;

    // Replace Title
    newHtml = newHtml.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);

    // Replace Meta Description
    newHtml = newHtml.replace(/name="description"\s+content=".*?"/s, `name="description" content="${route.desc}"`);

    // Replace OG Title
    newHtml = newHtml.replace(/property="og:title"\s+content=".*?"/s, `property="og:title" content="${route.title}"`);

    // Replace OG Description
    newHtml = newHtml.replace(/property="og:description"\s+content=".*?"/s, `property="og:description" content="${route.desc}"`);

    // Replace OG Image
    const thumbUrl = `${BASE_URL}assets/thumbnails/${route.name}.png`;
    newHtml = newHtml.replace(/property="og:image"\s+content=".*?"/s, `property="og:image" content="${thumbUrl}"`);
    newHtml = newHtml.replace(/property="twitter:image"\s+content=".*?"/s, `property="twitter:image" content="${thumbUrl}"`);

    // Replace OG URL
    const fullUrl = `${BASE_URL}${route.path}/`;
    newHtml = newHtml.replace(/property="og:url"\s+content=".*?"/s, `property="og:url" content="${fullUrl}"`);
    newHtml = newHtml.replace(/property="twitter:url"\s+content=".*?"/s, `property="twitter:url" content="${fullUrl}"`);

    fs.writeFileSync(path.join(routeDir, 'index.html'), newHtml);
    console.log(`✅ Created ${route.path}/index.html`);
  }

  // Also update the main index.html OG image to home.png
  let homeHtml = originalHtml;
  homeHtml = homeHtml.replace(/property="og:image" content=".*?"/, `property="og:image" content="${BASE_URL}assets/thumbnails/home.png"`);
  homeHtml = homeHtml.replace(/property="twitter:image" content=".*?"/, `property="twitter:image" content="${BASE_URL}assets/thumbnails/home.png"`);
  fs.writeFileSync(indexHtmlPath, homeHtml);
  console.log('✅ Updated main index.html with home thumbnail');
}

injectMeta().catch(err => {
  console.error('💥 Error during meta injection:', err);
  process.exit(1);
});
