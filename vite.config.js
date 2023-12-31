import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "pwa-icon-512.png", "android-chrome-256x256.png", "apple-touch-icon.png", "mask-icon.svg", "cr.jpg"],
  manifest: {
    name: "Routine | MAT",
    short_name: "Routine",
    description: "MAT Courses Routine",
    icons: [
      {
        src: "src/assets/img/android-chrome-265x256.png",
        sizes: "256x256",
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
        sizes: "81x113",
        type: "image/svg+xml",
        purpose: "any maskable",
      }
      
    ],
    theme_color: "#31393c",
    background_color: "#31393c",
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
