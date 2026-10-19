import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  // Saat build, situs dilayani di https://<user>.github.io/bookthemeporto/
  base: command === 'build' ? '/bookthemeporto/' : '/',
  plugins: [react(), tailwindcss()],
}))
