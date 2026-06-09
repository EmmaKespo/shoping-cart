import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  test: {
    // Enables global test methods like describe, it, expect without manual imports
    globals: true, 
    // Emulates a browser environment in Node.js
    environment: 'jsdom', 
    // Path to initialization scripts run before each test file
    setupFiles: './src/setupTests.js',
  },
})
