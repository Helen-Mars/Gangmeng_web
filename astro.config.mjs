// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://yourdomain.com',
  adapter: cloudflare()
});