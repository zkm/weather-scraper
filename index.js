const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Allow configurable CORS origin for production; default is permissive for dev.
const allowedOrigin = process.env.ALLOWED_ORIGIN;
if (allowedOrigin) {
  app.use(cors({ origin: allowedOrigin }));
  console.log(`CORS restricted to origin: ${allowedOrigin}`);
} else {
  app.use(cors());
  console.log('CORS enabled for all origins (development default)');
}

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Weather Scraper API');
});

// Weather route
app.get('/weather', async (req, res) => {
  const { zip } = req.query;
  if (!zip) {
    return res.status(400).send('ZIP code is required');
  }

  try {
    const { data } = await axios.get(`https://weather.com/weather/today/l/${zip}:4:US`);
    const $ = cheerio.load(data);
    const weather = {
      city: $('h1').text().trim(),
      temperature: $('span[data-testid="TemperatureValue"]').first().text().trim(),
      condition: $('div[data-testid="wxPhrase"]').text().trim(),
      wind: $('span[data-testid="Wind"]').text().trim(),
      humidity: $('span[data-testid="PercentageValue"]').first().text().trim(),
    };
    res.json(weather);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching weather data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
