/// <reference types="vitest" />


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        exclude: ['tests/**', 'tests-examples/**', 'node_modules'],
        setupFiles: './vitest.setup.ts',
    }
});
