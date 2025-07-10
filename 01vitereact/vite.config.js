import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// vite.config.js or main.js
if (!globalThis.crypto?.subtle) {
  globalThis.crypto = require('node:crypto').webcrypto;
}
