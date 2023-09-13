require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY : 'YOUR_API_KEY';

const secrets = {
  apiKey, 
}

module.exports = secrets