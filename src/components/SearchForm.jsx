import { useState } from 'react';

export default function SearchForm({ recipeSearch }) {
    const [recipeName, setRecipeName] = useState('');

    // Handles submit button
    function handleSubmit(e) {
        // Prevent page reload
        e.preventDefault();

        // Lift state up by passing recipeName to recipeSearch() in App
        recipeSearch(recipeName);
    }

    return (
        <div className="search-form-container">
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Recipe Name: </label>
                    <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} /><br/><br/>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </div>
    );
}