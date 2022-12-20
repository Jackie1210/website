import { defineConfig } from 'vite'
import path from 'path'
import solid from 'vite-plugin-solid'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@/', replacement: `${path.resolve(__dirname, 'src')}/`}
    ]
  },
  plugins: [solid()]
})
