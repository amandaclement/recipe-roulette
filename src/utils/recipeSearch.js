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