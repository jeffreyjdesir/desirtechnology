import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {

  preprocess: vitePreprocess(),

  kit: {
    adapter: adapterStatic({
      fallback: 'index.html',
    }),
    
    alias: {
      '$lib': './src/lib',
      '$styles': './src/styles',
      '$components': './src/components'
    }
  }
};

export default config;
