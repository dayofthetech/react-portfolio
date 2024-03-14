import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// using css modules - allows to have multiple css
//  files using the same className as long as in imported
//  sepaterly
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  }
})
