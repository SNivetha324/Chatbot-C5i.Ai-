// src/routes/api.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { getLLMResponse } = require('../config/llm');

// Endpoint for querying sales data
router.get('/sales', (req, res) => {
  const query = 'SELECT * FROM sales'; // Example query
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

// Endpoint for interacting with LLM
router.post('/query', async (req, res) => {
  try {
    const { query } = req.body;
    const llmResponse = await getLLMResponse(query);
    res.json(llmResponse);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get response from LLM' });
  }
});

module.exports = router;
