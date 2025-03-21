import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rick_morty/',  // Adicione o caminho base do seu repositório no GitHub Pages
  plugins: [react()],
})
