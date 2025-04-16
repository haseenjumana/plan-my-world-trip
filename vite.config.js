import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './plan-my-world-trip',
  server: {
    port: 8080 // ✅ optional: to run on localhost:8080
  }
})


