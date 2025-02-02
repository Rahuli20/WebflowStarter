import { defineConfig } from 'vite'

const PORT = 5173

export default defineConfig({
  server: {
    cors: true,
    hmr: true,
    port: PORT,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'src/main.js',
      output: {
        format: 'es',
        entryFileNames: 'main.js',
        manualChunks: undefined
      }
    },
    minify: true,
    sourcemap: true
  }
})
