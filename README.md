
# Weather Scraper

This project consists of a Node.js server and a React front-end application that scrapes weather data from the Weather Channel website based on a ZIP code input by the user. 

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Introduction

The Weather Scraper project allows users to input a ZIP code and receive the current weather information for that location. The backend Node.js server scrapes the data from the Weather Channel website, and the front-end React application displays the weather information to the user.

## Features

- Input ZIP code to get weather information
- Display city name, temperature, weather condition, wind speed, and humidity
- Simple and intuitive user interface

## Installation

### Backend (Node.js Server)

1. Clone the repository:
   ```sh
   git clone https://github.com/zkm/weather-scraper.git
   cd weather-scraper
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   node index.js
   ```

### Frontend (React Application)

1. Navigate to the React app directory:
   ```sh
   cd ../weather-app
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Start the React development server:
   ```sh
   npm start
   ```

## Usage

1. Ensure the Node.js server is running by visiting `http://localhost:3001/` in your browser. You should see "Welcome to the Weather Scraper API".
2. Open another terminal window and start the React development server.
3. Open your browser and navigate to `http://localhost:3000/`.
4. Enter a ZIP code in the input field and click "Get Weather".
5. The weather information for the entered ZIP code will be displayed.

## Project Structure

```
weather-scraper/
├── index.js                # Node.js server entry
├── package.json            # Root server/package config
└── weather-app/            # React (Vite) application
   ├── public/
   ├── src/
   │   ├── components/
   │   │   └── Weather.jsx
   │   ├── App.jsx
   │   ├── index.jsx
   │   └── ...
   ├── package.json
   └── vite.config.js
```

## Dependencies

### Backend

- [express](https://www.npmjs.com/package/express)
- [axios](https://www.npmjs.com/package/axios)
- [cheerio](https://www.npmjs.com/package/cheerio)
- [cors](https://www.npmjs.com/package/cors)

### Frontend

- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [vite](https://www.npmjs.com/package/vite)
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)

## Continuous Integration & Deployment

GitHub Actions workflows automate testing and deployment:

1. CI (`.github/workflows/ci.yml`)
   - Installs root and `weather-app` dependencies
   - Runs (placeholder) tests
   - Builds the React application to ensure production build stays green

2. Deployment (`.github/workflows/deploy.yml`)
   - Triggers on pushes to `main`
   - Builds the Vite React app
   - Publishes `weather-app/dist` to the `gh-pages` branch using `peaceiris/actions-gh-pages`

### GitHub Pages Configuration

- The React app lives in `weather-app/` but is now deployed at the repository root URL: `https://zkm.github.io/weather-scraper/`.
- `homepage` in `weather-app/package.json` and `base` in `vite.config.js` are set to `/weather-scraper/` so built asset paths resolve correctly.
- If you ever split multiple apps under this repo, you can revert to a subfolder deployment by changing both values accordingly and adjusting the Pages URL.

### Local Production Preview

After building:
```sh
cd weather-app
npm run build
npm run preview
```
Open the shown localhost URL to preview the production build.

### Hosting the Backend API

The frontend (GitHub Pages) is static and cannot proxy to `localhost:3001` in production. Deploy the Node server (`index.js`) to a host (Render, Railway, Fly.io, etc.) and expose it over HTTPS. Then build the frontend with an environment variable:

Create `weather-app/.env.production` (not committed) or set in your CI build step:
```
VITE_API_BASE_URL=https://your-deployed-weather-backend.example.com
```

`Weather.jsx` reads `import.meta.env.VITE_API_BASE_URL`. If unset it will attempt same-origin (which will fail on Pages) so setting this is required for production data.

Example manual production build:
```sh
cd weather-app
VITE_API_BASE_URL=https://your-deployed-weather-backend.example.com npm run build
```

Then deploy as usual (workflow will upload the artifact containing correct absolute API calls).

#### CORS
The server currently enables permissive `cors()`. For tighter security, replace with:
```js
app.use(cors({ origin: ['https://zkm.github.io'], methods: ['GET'] }));
```
Adjust the origin to match your GitHub Pages domain (organization/user pages do not include the repo name in origin).

### Adding Real Tests

Currently tests are placeholders. To add real tests:
```sh
cd weather-app
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
```
Add a `vitest.config.js` and replace the `test` script with `vitest run` (or `vitest`). Update the CI workflow to call `npm test` (already present) which will then execute real tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
