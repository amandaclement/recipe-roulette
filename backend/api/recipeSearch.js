require('dotenv').config();
const { recipeScrape } = require('./recipeScrape.js');

// Set API key and Custom Search Engine ID
const API_KEY = process.env.CS_API_KEY;
const CSE_ID = process.env.CS_ENGINE_ID;

// Use Google Custom Search API to get URLs for chosen recipe
async function getRecipeUrls(recipeName) {
    try {
        // Set search query
        const query = `highest rated ${recipeName} recipe`;

        // Construct API URL
        const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CSE_ID}&q=${encodeURIComponent(query)}`;

        // Make API call to get URLs, using await to pause this function's execution until the promise is settled
        const response = await fetch(url);

        // Check if response is successful (status code 200-299)
        if (!response.ok) {
            throw new Error('Failed to fetch URLs');
        }

        // Parse the response body as JSON, using await to pause this function's execution until the promise is settled
        const responseData = await response.json();

        // Extract URLs from the response. By default, returns first 10 URLs
        const urls = responseData.items.map(item => item.link);
        
        // Return URLs
        return urls;

    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

// Search for recipe URLs, scraping relevant content from each page
async function recipeSearch(recipeName) {
    let recipes = [];

    try {
        // Get recipe URLs
        const urls = await getRecipeUrls(recipeName);

        // Populate recipes array and log content
        for (let i = 0; i < urls.length; i++) {
            recipes[i] = await recipeScrape(urls[i]);
        }

        return recipes;

    } catch(error) {
        console.error(`Error fetching recipe URLs for ${recipeName}: `, error);
    }
}

module.exports = { recipeSearch };