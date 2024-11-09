import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // ...
  integrations: [react(), tailwind()],
  css: {
    preprocessorOptions: {
        scss: {
            api: 'modern-compiler',
        },
        sass: {
            silenceDeprecations: ['sass'],
        },
    },
},
});