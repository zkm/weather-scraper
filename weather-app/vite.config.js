import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages deployment. The repository name is 'weather-scraper'.
// App is inside 'weather-app' folder; we deploy dist to gh-pages root so base should match repo path.
// If you later move the React app to repo root, update base to '/weather-scraper/'.
export default defineConfig(({ mode }) => ({
  base: '/weather-scraper/weather-app/',
  plugins: [react()],
  server: {
    open: true,
  },
}));
