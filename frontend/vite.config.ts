import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["goal-setter-2pa7.onrender.com"],
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
  },
})
