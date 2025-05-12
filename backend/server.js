const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();


const app = express();
const PORT = 4000;  // Changed from 5000 to 4000

// Basic CORS setup
app.use(cors());
app.use(express.json());

// Test root endpoint
app.get('/', (req, res) => {
  console.log('GET request received');
  res.send('Server is running correctly on port 4000');
});

// POST endpoint for thoughts
app.post('/submit-thought', (req, res) => {
  const thought = req.body.thought;
  console.log('Thought received:', thought);
  res.json({ message: `Thought received: ${thought}` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


