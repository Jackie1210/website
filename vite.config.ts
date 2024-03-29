import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  resolve: {
    alias: [
      { find: '@/', replacement: `${path.resolve(__dirname, 'src')}/`}
    ]
  },
  plugins: [react(), inspect()]
})
