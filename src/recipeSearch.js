import axios from 'axios';

// Set API key and Custom Search Engine ID
const API_KEY = process.env.REACT_APP_CS_API_KEY;
const CSE_ID = process.env.REACT_APP_CS_ENGINE_ID;

// Use Google Custom Search API to get URLs for chosen recipe
export async function getRecipeUrls(recipeName) {
    try {
        // Set search query
        const query = 'highest rated ' + recipeName + ' recipe';

        // Construct API URL
        const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CSE_ID}&q=${encodeURIComponent(query)}`;

        // Make API request
        const response = await axios.get(url);

        // Extract URLs from the response. By default, returns first 10 URLs
        const urls = response.data.items.map(item => item.link);

        // Log URLs
        console.log('Top URLs for query: ' + query);
        urls.forEach((url, index) => {
            console.log(`${index + 1}. ${url}`);
        });
        
        // Return URLs
        return urls;

    } catch (error) {
        console.error('Error searching for query', error);
        return [];
    }
}