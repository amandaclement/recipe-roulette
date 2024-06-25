const { chromium } = require('playwright');

// Scrape recipe URL, returning relevant data
async function getRecipeData(url) {
    // Launch Chromium browser
    const browser = await chromium.launch();

    // Create a new context and a new page inside that context
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Navigate to the recipe URL
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        const title = await page.title();

        // Return url and title
        return {
            url: url,
            title: title
        };

    } catch(error) {
        console.error(`Error during scraping ${url}:`, error);

    } finally {
        // Close the browser
        await browser.close();
    }
}

// Scrape recipe URL to get relevant data
async function recipeScrape(url) {
    try {
        return await getRecipeData(url);
    } catch(error) {
        console.error(`Error scraping recipe ${url}: `, error);
    }
}

module.exports = { recipeScrape };
