import { defineConfig } from 'vitest/config'



// https://vitejs.dev/config/
export default () => {
 
  return defineConfig({
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