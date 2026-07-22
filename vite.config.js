import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from https://<user>.github.io/<repo>/, so asset
// URLs must be prefixed with the repo name. Without this the built index.html asks
// for /assets/*.js at the domain root, those 404, and the page renders blank.
// BASE_PATH lets `npm run dev` and other hosts stay on "/".
const base = process.env.BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [react()],
})
