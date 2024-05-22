
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
   cd weather-scraper/weather-scraper
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
├── weather-scraper/         # Node.js server
│   ├── node_modules/
│   ├── package.json
│   ├── index.js
│   └── ...
└── weather-app/             # React application
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   └── Weather.js
    │   ├── App.css
    │   ├── App.js
    │   ├── index.css
    │   ├── index.js
    │   └── ...
    ├── package.json
    └── ...
```

## Dependencies

### Backend

- [express](https://www.npmjs.com/package/express)
- [axios](https://www.npmjs.com/package/axios)
- [cheerio](https://www.npmjs.com/package/cheerio)
- [cors](https://www.npmjs.com/package/cors)

### Frontend

- [react](https://www.npmjs.com/package/react)
- [axios](https://www.npmjs.com/package/axios)
- [react-scripts](https://www.npmjs.com/package/react-scripts)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
