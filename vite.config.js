import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['./static']
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },
};

export default config;
