const { recipeSearch } = require('./api/recipeSearch.js');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies for incoming requests and to enable CORS requests from different origins (for backend - frontend communication)
app.use(express.json());
app.use(cors());

// Endpoint to receive recipeName via POST request and return recipes data
app.post('/recipes', async (req, res) => {
    try {
        // Extract recipeName from the request body sent by the client
        const recipeName = req.body.recipeName;

        // Perform recipe search based on the received recipeName
        const recipes = await recipeSearch(recipeName);

        // Send response back to client
        res.json({ recipes });
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: 'Error fetching recipes' });
    }
});
  
// Start server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 
