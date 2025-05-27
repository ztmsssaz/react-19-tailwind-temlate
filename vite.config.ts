import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      react(),
      VitePWA({
         registerType: 'autoUpdate',
         includeAssets: [
            'favicon.ico',
            'apple-touch-icon.png',
            'maskable-icon-512x512.png',
            'mask-icon.svg',
         ],
         manifest: {
            name: 'Template',
            short_name: 'PWA App',
            theme_color: '#ffffff',
            icons: [
               {
                  src: 'pwa-64x64.png',
                  sizes: '64x64',
                  type: 'image/png',
               },
               {
                  src: 'pwa-192x192.png',
                  sizes: '192x192',
                  type: 'image/png',
               },
               {
                  src: 'pwa-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'any',
               },
               {
                  src: 'maskable-icon-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'maskable',
               },
            ],
         },
         srcDir: 'src',
         filename: 'sw.js', // دقیقا اسم فایل
         strategies: 'injectManifest', // استفاده از فایل خودت
      }),
   ],
})
