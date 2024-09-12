import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        target: 'esnext'
    },
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    // base: "/studio-design-landing-page-react/",
    // base: "/",
});
