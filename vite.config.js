import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/projeto-nath/', // 👈 ISSO É ESSENCIAL
  plugins: [react()],
});
