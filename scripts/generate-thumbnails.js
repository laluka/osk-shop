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

    console.log('🚀 Starting dev server...');
    const server = spawn('npm', ['run', 'dev', '--', '--port', PORT.toString(), '--strictPort'], {
        shell: true,
        stdio: 'inherit'
    });

    // Give the server time to start and be ready
    await new Promise(resolve => setTimeout(resolve, 8000));

    console.log('📸 Starting browser...');
    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        deviceScaleFactor: 1,
    });

    for (const route of routes) {
        const page = await context.newPage();

        // Log browser console messages to help debug
        page.on('console', msg => console.log(`PAGE LOG: ${msg.text()}`));
        page.on('pageerror', err => console.error(`PAGE ERROR: ${err.message}`));

        const url = `${BASE_URL}${route.path}`;
        console.log(`🖼️  Capturing ${url}...`);

        try {
            await page.goto(url, { waitUntil: 'load', timeout: 30000 });

            // Wait for the app to actually render something inside #root
            await page.waitForSelector('#root > *', { timeout: 10000 });

            // Wait a bit more for animations (framer motion) to finish
            await page.waitForTimeout(3000);

            await page.screenshot({
                path: path.join(OUTPUT_DIR, `${route.name}.png`),
                fullPage: false,
                omitBackground: false
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
