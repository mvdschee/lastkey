export default defineNuxtConfig(async () => {
    return {
        ssr: false,
        // global style import (should be just 1)
        css: ['assets/scss/style.scss'],
        vite: {
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: `
					@import "assets/scss/_variables.scss"; 
					@import "assets/scss/_mixins.scss";
					`,
                    },
                },
            },
            clearScreen: false,
            // to make use of `TAURI_DEBUG` and other env variables
            // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
            envPrefix: ['TAURI_'],
            build: {
                // Tauri supports es2021
                target: process.env.TAURI_PLATFORM === 'windows' ? 'chrome105' : 'safari13',
                // don't minify for debug builds
                minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
                // produce sourcemaps for debug builds
                sourcemap: !!process.env.TAURI_DEBUG,
            },
        },
    };
});
