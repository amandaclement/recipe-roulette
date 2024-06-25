const { recipeSearch } = require('./api/recipeSearch.js');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Tell server to allow requests from different origins to effectively communicate between the backend and frontend
app.use(cors());

// Endpoing to return the scraped recipe data
app.get('/data', async (req, res) => {
    try {
        const recipes = await recipeSearch('lemon cookies');
        res.send({ recipes });
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).send('Error fetching recipes');
    }
});
  
// Start server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 
