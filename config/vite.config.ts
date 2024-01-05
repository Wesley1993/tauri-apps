import {resolve} from "path"
import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import svgLoader from "vite-svg-loader"
import Unocss from "unocss/vite"
import configArcoStyleImportPlugin from "./plugin/arcoStyleImport"

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({svgoConfig: {}}),
    configArcoStyleImportPlugin(),
    Unocss({configFile: "../uno.config.ts"}),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "../src"),
      },
      {
        find: "assets",
        replacement: resolve(__dirname, "../src/assets"),
      },
      {
        find: "vue-i18n",
        replacement: "vue-i18n/dist/vue-i18n.cjs.js",
      },
      {
        find: "vue",
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
    ],
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
  },
  // 3. to make use of `TAURI_DEBUG` and other env variables
  // https://tauri.app/v1/api/config#buildconfig.beforedevcommand
  envPrefix: ["VITE_", "TAURI_"],
}))
