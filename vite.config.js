import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 AVISA ao Vite onde o projeto será hospedado
export default defineConfig({
  base: '/projeto-nath/', // MUITO IMPORTANTE para GitHub Pages
  plugins: [react()],
})
