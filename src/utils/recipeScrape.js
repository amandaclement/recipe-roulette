const { chromium } = require('playwright');

// async function scrapeRecipe(url) {
(async () => {
    // Launch Chromium browser
    const browser = await chromium.launch();

    // Create a new context and a new page inside that context
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Navigate to the recipe URL
        await page.goto('https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/');

        // Wait for the first h1 element to load/appear
        await page.waitForSelector('h1');

        // Extract text content of the first h1 element
        const h1Text = await page.evaluate(() => {
            return document.querySelector('h1').innerText;
        });

        console.log('First h1:', h1Text);

    } catch(error) {
        console.error('Error during scraping:', error);

    } finally {
        // Close the browser
        await browser.close();
    };
})();
// }
