import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-fls-homework/12',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src', // Відносний шлях до src
    },
  },
})
