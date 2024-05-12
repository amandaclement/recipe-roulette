import { getRecipeUrls } from './recipeSearch.js';

export default function App() {
    // Custom Search API test
    const recipeName = 'oatmeal raisin cookie';
    getRecipeUrls(recipeName);
}