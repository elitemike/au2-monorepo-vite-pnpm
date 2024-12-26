import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
//import { VitePluginCssModules } from 'vite-plugin-css-modules';
import { patchCssModules } from 'vite-css-modules'
import aurelia from '@aurelia/vite-plugin';

export default defineConfig({
  server: {
    open: !process.env.CI,
    port: 9000,
  },
  esbuild: {
    target: 'es2022'
  },
  plugins: [
    aurelia({
      useDev: true,
    }),
    nodePolyfills(),
    patchCssModules()
    // VitePluginCssModules()
  ]
});
