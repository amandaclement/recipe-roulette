const { getRecipeUrls } = require('./api/recipeSearch.js');
const { getRecipeData } = require('./api/recipeScrape.js');

let recipes = [];

// Scrape recipe URL to get relevant data
async function recipeScrape(url) {
    try {
        return await getRecipeData(url);
    } catch(error) {
        console.error(`Error scraping recipe ${url}: `, error);
    }
}

// Search for recipe URLs, scraping relevant content from each page
async function recipeSearch(recipeName) {
    try {
        // Get recipe URLs
        const urls = await getRecipeUrls(recipeName);

        // Populate recipes array and log content
        for (let i = 0; i < urls.length; i++) {
            recipes[i] = await recipeScrape(urls[i]);
            console.log(recipes[i].title + ': ' + recipes[i].url);
        }

    } catch(error) {
        console.error(`Error fetching recipe URLs for ${recipeName}: `, error);
    }
}

// Test
recipeSearch('lemon cookies');
