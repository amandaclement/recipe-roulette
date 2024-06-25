import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm.jsx';

const backendUrl = 'http://localhost:5000';

export default function App() {
    const [recipes, setRecipes] = useState([]);

    // Fetch recipes
    useEffect(() => {
        fetch(`${backendUrl}/data`)
            .then(res => res.json())
            .then(data => {
                setRecipes(data.recipes);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    return (
        <main>
            {/* <SearchForm recipeSearch={recipeSearch} /> */}
            <ol>
                {/* Map over recipes and render as list item */}
                {recipes.map((recipe) => (
                    <li key={recipe.url}>
                        <a href={recipe.url}>{recipe.title}</a>
                    </li>
                ))}
            </ol>
        </main>
    );
}