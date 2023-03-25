
import path from 'node:path'
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [
    svgr({exportAsDefault: true}),
    cssInjectedByJsPlugin(),
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    // lib: {
    //   entry: {
    //     Input: path.resolve(__dirname, 'src/Input/index.tsx'),
    //     Button: path.resolve(__dirname, 'src/Button/index.tsx'),
    //     Checkbox: path.resolve(__dirname, 'src/Checkbox/index.tsx'),
    //   },
    //   name: 'Checkout',
    //   formats: ['es', 'umd'],
    //   fileName: (format) => `${format === 'es' ? 'esm' : 'cjs'}.js`,
    // },
    rollupOptions: {
      external: ['react', 'react-dom'],
      input: [
        /*Input: */path.resolve(__dirname, 'src/Input/index.tsx'),
        /*Button: */path.resolve(__dirname, 'src/Button/index.tsx'),
        /*Checkbox: */path.resolve(__dirname, 'src/Checkbox/index.tsx'),
      ],
      output: {
        preserveModules: false,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    },
  },
})
