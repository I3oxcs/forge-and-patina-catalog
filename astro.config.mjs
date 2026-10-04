// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The address the site is published at. GitHub Pages addresses are
  // always lowercase, whatever the case of the username.
  site: 'https://i3oxcs.github.io',

  // The sub-folder within that address — the repository's name.
  // Every link goes through url() in src/utils/url.ts, which reads this,
  // so links and images all point inside /forge-and-patina-catalog/.
  base: '/forge-and-patina-catalog',
});
