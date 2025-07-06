import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

const COMPRESSION_QUALITY = 90; // Можно поиграться с сжатием картинок, 100 - максимальное
// качество, 1 - минимальное качество. Работает только при билде (npm run build).

export default defineConfig({
  root: "./src",
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },

  plugins: [
    tailwindcss(),
    ViteImageOptimizer({
      png: {
        quality: COMPRESSION_QUALITY,
      },
      jpeg: {
        quality: COMPRESSION_QUALITY,
      },
      jpg: {
        quality: COMPRESSION_QUALITY,
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: "js/*",
          dest: "js",
        },
      ],
    }),
  ],
  customLogger: (() => {
    const originalWarn = console.warn;
    const originalError = console.error;

    console.warn = (...args) => {
      const message = args.join(" ");
      if (
        message.includes("source map") ||
        message.includes("Failed to load source map")
      ) {
        return;
      }
      originalWarn(...args);
    };

    console.error = (...args) => {
      const message = args.join(" ");
      if (
        message.includes("source map") ||
        message.includes("Failed to load source map")
      ) {
        return;
      }
      originalError(...args);
    };
  })(),
});
