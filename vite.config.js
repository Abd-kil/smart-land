import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

// Relative paths let the same dist folder work on GitHub Pages project sites.
export default defineConfig({
  base: './',
  plugins: [react(), imagetools()],
});
