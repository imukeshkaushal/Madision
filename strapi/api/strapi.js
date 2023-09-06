const axios = require('axios');

export default async function handler(req, res) {
  try {
    // Use the URL of your locally running Strapi server
    const response = await axios.get('http://localhost:1337/api');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
