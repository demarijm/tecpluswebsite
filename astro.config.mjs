import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/static';
import alpinejs from "@astrojs/alpinejs";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  site: 'https://cassyork.com',
  integrations: [mdx(), sitemap(), tailwind(), alpinejs(), sanity()],
  adapter: vercel({
    analytics: true
  })
});