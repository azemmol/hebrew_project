const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const PORT = 4000;  // Changed from 5000 to 4000

// Basic CORS setup
app.use(cors());
app.use(express.json());


const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Make sure .env is loaded!
});

// Test root endpoint
app.get('/', (req, res) => {
  console.log('GET request received');
  res.send('Server is running correctly on port 4000');
});

// POST endpoint for thoughts
app.post('/submit-thought', async (req, res) => {
  const instructions = "You are a Hebrew teacher helping an intermediate-advanced student sound natural and fluent like an Israeli. Correct grammar, improve phrasing, and suggest new vocabulary.";
  const thought = req.body.thought;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",  
      messages: [
        { role: "system", content: instructions },
        { role: "user", content: thought }
      ]
    });

    // Use 'response' not 'gptResponse'
    const feedback = response.choices[0].message.content;
    res.json({ message: feedback });   
  } catch (error) {
    console.error("OpenAI error:", error.message);
    res.status(500).json({ message: "Failed to get feedback" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


