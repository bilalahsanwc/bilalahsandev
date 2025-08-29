import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // 👈 allows LAN access (shows your 192.168.x.x)
    port: 5173,   // 👈 optional, but good to keep fixed
  }
})
