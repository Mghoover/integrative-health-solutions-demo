import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bestflorencechiropractor.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/intake/')
    })
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp"
    }
  }
});
