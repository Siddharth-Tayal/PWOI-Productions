// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or your framework's plugin
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.example.com', // replace with your domain
      routes: [
        '/',
        '/#/features',
        '/feature/gcp',
        '/feature/film-production',
        '/feature/schools-colleges-function',
        '/#/footer',
        // Add your routes here
      ],
    }),
  ],
});
