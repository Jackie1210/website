import { defineConfig } from 'vite'
import path from 'path'
import solid from 'vite-plugin-solid'

console.log(path.resolve(__dirname, 'src'))
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@/', replacement: `${path.resolve(__dirname, 'src')}/`}
    ]
  },
  plugins: [solid()]
})
