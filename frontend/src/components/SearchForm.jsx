import { useState } from 'react';

export default function SearchForm({ handleSubmit }) {
    const [recipeName, setRecipeName] = useState('');

    // Handles submit button
    function handleFormSubmit(e) {
        e.preventDefault();

        // Lift state up by passing recipeName to handleSubmit() in App
        handleSubmit(recipeName);
    }

    return (
        <div className="search-form-container">
            <form onSubmit={handleFormSubmit}>
                <p>
                    <label>Recipe Name: </label>
                    <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} /><br/><br/>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </div>
    );
}