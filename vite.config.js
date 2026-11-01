import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Garante resposta tanto em localhost quanto em 127.0.0.1 e rede local (corrige conflito IPv4/IPv6 no Windows)
    port: 5173,
    open: true, // Abre o navegador automaticamente na porta correta assim que o Vite estiver pronto
  },
})
