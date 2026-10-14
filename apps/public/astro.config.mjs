import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  outDir: './dist',
  site: 'https://arthurfontes189.github.io/DK-revestimentos/',
  base: '/DK-revestimentos',
});
