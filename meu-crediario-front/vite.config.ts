import react from "@vitejs/plugin-react";
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default ({ mode }) => {

  return defineConfig({
    plugins: [
      react(),

    ],

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
