import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json',
          dest: '.',
        },
        {
          src: 'src/assets/img/icon-32.png',
          dest: '.',
        },
        {
          src: 'src/assets/img/icon-128.png',
          dest: '.',
        },
      ],
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/Content/main.tsx'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'contentScript',
    },
  },
  define: {
    'process.env': {},
  },
})
