import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/person-website/',
  build: {
    assetsInlineLimit: 500000, // 小于500KB的图片转为base64
  },
})
