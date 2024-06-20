import { useState } from 'react';
import SearchForm from './components/SearchForm.jsx';

export default function App() {
    const [recipeUrls, setRecipeUrls] = useState([]);

    // Use Custom Search API to update recipeUrls with URLs for chosen recipe
    // async function recipeSearch(recipeName) {
    //     try {
    //         // Call getRecipeUrls() and wait for it to complete since getRecipeUrls() is async
    //         const urls = await getRecipeUrls(recipeName);

    //         // Update state variable
    //         setRecipeUrls(urls);

    //     } catch(error) {
    //         console.error('Error fetching recipe URLs:', error);
    //     }
    // }

    return (
        <main>
            {/* <SearchForm recipeSearch={recipeSearch} /> */}
            <ol>
                {/* Map over recipeUrls and render each URL as a list item */}
                {recipeUrls.map((url, index) => (
                    <li key={index}><a href={url} target="_blank">{url}</a></li>
                ))}
            </ol>
        </main>
    );
}