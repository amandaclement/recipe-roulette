import { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm.jsx';

const backendUrl = 'http://localhost:5000';

export default function App() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    // Handle search form submit by fetching recipes
    async function handleSubmit(recipeName) {
        try {
            setLoading(true);

            // Send recipeName to backend using Axios
            const response = await axios.post(`${backendUrl}/recipes`, { recipeName });

            // Update state with backend response
            setRecipes(response.data.recipes);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <main>
            <SearchForm handleSubmit={handleSubmit} />
            {loading && 'Loading...'}
            <ol>
                {/* Map over recipes and render as list items */}
                {recipes.map((recipe) => (
                    <li key={recipe.url}>
                        <a href={recipe.url}>{recipe.title}</a>
                    </li>
                ))}
            </ol>
        </main>
    );
}