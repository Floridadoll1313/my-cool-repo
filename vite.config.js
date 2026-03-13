import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ensuring absolute path resolution fixes build-time errors [6]
      '@': path.resolve(__dirname, './src'),
    },
  },
});