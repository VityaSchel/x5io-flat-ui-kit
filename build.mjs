import fs from 'fs'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { build } from 'vite'
import { babel } from '@rollup/plugin-babel'
import glob from 'fast-glob'

import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const imports = []

const getImports = async () => {
  const files = await glob([path.resolve('../../components/**/package.json'), '!**/node_modules/**/*'])
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8')
    const pkg = JSON.parse(content)
    if (pkg.imports) {
      imports.push({
        name: pkg.name,
        lib: path.resolve(file, '../', pkg.imports.lib),
        style: path.resolve(file, '../', pkg.imports.style)
      })
    }
  })
}

await getImports()

imports.forEach(async item => {
  await build({
    configFile: false,
    build: {
      lib: {
        entry: item.lib,
        name: item.name
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          },
          assetFileNames: `${item.name}/[name].[ext]`,
          entryFileNames: () => '[name]/[name].[format].js'
        }
      }
    },
    plugins: [
      svgr({exportAsDefault: true}),
      cssInjectedByJsPlugin(),
      react(),
      dts({
        insertTypesEntry: true,
      }),
      // vue(), babel({ babelHelpers: 'bundled' })
    ]
  })
})
