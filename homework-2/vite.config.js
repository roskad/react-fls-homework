import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-fls-homeworks/02/',
  plugins: [
    react(),
    tailwindcss()
  ],
  css: {
    modules: {
      generateScopedName: '[local]_[hash:base64:5]',
    },
  },
})
