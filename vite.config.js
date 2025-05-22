import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // pode ser './' mesmo na Vercel
  plugins: [react()],
})
