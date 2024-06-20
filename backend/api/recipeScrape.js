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
        await page.goto(url);

        // Extract data (URL and title)
        const data = await page.evaluate((url) => {
            return {
                url: url,
                title: document.title
            };
        }, url); // Pass url as an argument to page.evaluate()

        return data;

    } catch(error) {
        console.error(`Error during scraping ${url}:`, error);

    } finally {
        // Close the browser
        await browser.close();
    }
}

module.exports = { getRecipeData };
