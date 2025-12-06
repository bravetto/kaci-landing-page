import { defineConfig } from 'vite';

export default defineConfig({
  // No React plugin - serving static HTML
  server: {
    port: 3001,
  },
  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
});

