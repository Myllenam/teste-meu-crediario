import react from "@vitejs/plugin-react";
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default () => {

  return defineConfig({
    plugins: [
      react(),

    ],
    server: {
      port: 5173,
    }
    ,

    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: 'src/tests/setup.ts',
    },
    resolve: {
      alias: {
        src: "/src",
      },
    }

  });
};
