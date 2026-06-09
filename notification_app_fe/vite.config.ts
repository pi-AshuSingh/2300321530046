import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@logging': path.resolve(__dirname, '../logging_middleware')
    }
  },
  server: {
    fs: {
      allow: [path.resolve(__dirname, '..')]
    },
    port: 3000,
    host: 'localhost'
  },
  preview: {
    port: 3000,
    host: 'localhost'
  }
});
