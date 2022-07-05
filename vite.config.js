import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import laravel from 'laravel-vite-plugin';
import { resolve } from "path";

export default defineConfig({
    plugins: [
        laravel([
            'resources/js/app.js',
        ]),
        svelte(),

    ],
    optimizeDeps: {
        include: ['@inertiajs/inertia'],
    },
    resolve: {
        alias: {
            '@': resolve('./resources/js'),
        },
    },
});
