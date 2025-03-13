import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const PORT = env.VITE_PORT ?? 3000

  return {
    plugins: [react()],
    server: {
      host: true,
      port: parseInt(PORT),
    },
    preview: {
      port: parseInt(PORT),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
