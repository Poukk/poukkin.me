// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://poukkin.me/',
	integrations: [tailwind()],
	prefetch: true,
});
