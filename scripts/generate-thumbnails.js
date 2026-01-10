import { chromium } from 'playwright';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 5176;
const BASE_URL = `http://localhost:${PORT}/osk-shop/`;
const OUTPUT_DIR = path.join(__dirname, '../public/assets/thumbnails');

const routes = [
    { path: '', name: 'home' },
    { path: 'pentest', name: 'pentest' },
    { path: 'training', name: 'training' },
    { path: 'mentoring', name: 'mentoring' },
    { path: 'faq', name: 'faq' }
];

async function generateThumbnails() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('🚀 Starting preview server...');
    const server = spawn('npm', ['run', 'preview', '--', '--port', PORT.toString()], {
        shell: true,
        stdio: 'inherit'
    });

    // Give the server time to start
    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log('📸 Starting browser...');
    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 1200, height: 630 }, // OG standard size
        deviceScaleFactor: 2,
    });

    for (const route of routes) {
        const page = await context.newPage();
        const url = `${BASE_URL}${route.path}`;
        console.log(`🖼️  Capturing ${url}...`);

        try {
            await page.goto(url, { waitUntil: 'networkidle' });
            // Wait a bit for animations (framer motion) to settle
            await page.waitForTimeout(2000);

            await page.screenshot({
                path: path.join(OUTPUT_DIR, `${route.name}.png`),
                fullPage: false
            });
            console.log(`✅ Saved ${route.name}.png`);
        } catch (err) {
            console.error(`❌ Failed ${route.name}:`, err.message);
        } finally {
            await page.close();
        }
    }

    await browser.close();
    server.kill();
    console.log('✨ All thumbnails generated!');
    process.exit(0);
}

generateThumbnails().catch(err => {
    console.error('💥 Fatal error:', err);
    process.exit(1);
});
