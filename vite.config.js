import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const SPRING_BOOT_PORT = 8080; 

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, 
    proxy: {
      '/api': {
        target: `http://localhost:${SPRING_BOOT_PORT}`, 
        changeOrigin: false, 
      },
    },
  },
})
