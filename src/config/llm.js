// src/config/llm.js
const axios = require('axios');
require('dotenv').config();

const llmApiUrl = process.env.LLM_API_URL;
const llmApiKey = process.env.LLM_API_KEY;

const getLLMResponse = async (query) => {
  try {
    const response = await axios.post(llmApiUrl, {
      query: query,
    }, {
      headers: {
        'Authorization': `Bearer ${llmApiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching LLM response:', error);
    throw error;
  }
};

module.exports = {
  getLLMResponse,
};
