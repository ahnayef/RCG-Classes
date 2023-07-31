import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "pwa-icon-512.png", "android-chrome-512x512.png", "apple-touch-icon.png", "mask-icon.svg", "cr.jpg"],
  manifest: {
    name: "Routine | Spring 23",
    short_name: "Routine",
    description: "Spring23 routine app",
    icons: [
      {
        src: "src/assets/img/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "./apwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "src/assets/img/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "src/assets/img/mask-icon.svg",
        sizes: "144x65",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
      {
        src: "src/assets/img/cr.jpg",
        sizes: "457x450",
        type: "image/jpg",
        purpose: "any maskable",
      },
    ],
    theme_color: "#1e1e1e",
    background_color: "#1e1e1e",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
  build: {
    outDir: "dist",
  },
});
