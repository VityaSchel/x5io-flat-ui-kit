import fs from 'fs'
import path from 'path'
import { build } from 'vite'
import { babel } from '@rollup/plugin-babel'
import glob from 'fast-glob'

import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


const getImports = async () => {
  const imports = []
  const files = await glob(['./src/**/package.json', '!**/node_modules/**/*'])
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8')
    const pkg = JSON.parse(content)
    imports.push({
      name: pkg.name,
      lib: path.resolve(file, '../index.tsx'),
      style: path.resolve(file, '../styles.module.scss')
    })
    // if (pkg.imports) {
    // }
  })
  return imports
}

const imports = await getImports()

const promises = await Promise.all(
  imports.map(async item => {
    return await build({
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
            entryFileNames: () => `${item.name}/[name].[format].js`
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
)

imports.forEach(item => {
  fs.writeFileSync('./dist/' + item.name + '/package.json', JSON.stringify({
    'main': './index.umd.js',
    'module': './index.es.js',
    'types': './index.d.ts',
    'exports': {
      '.': {
        'import': './index.es.js',
        'require': './index.umd.js'
      }
    }
  }), 'utf-8')
})