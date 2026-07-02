import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  base: "/chez-nono/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        "a-propos": resolve(__dirname, "a-propos.html"),
        menu: resolve(__dirname, "menu.html"),
        evenements: resolve(__dirname, "evenements.html"),
        reservation: resolve(__dirname, "reservation.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
