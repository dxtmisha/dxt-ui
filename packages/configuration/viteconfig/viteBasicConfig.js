import { resolve } from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import dtsPlugin from 'vite-plugin-dts'

import autoprefixer from 'autoprefixer'
import cssnanoPlugin from 'cssnano'

// https://vitejs.dev/config/
export const viteBasicConfig = (
  {
    name,
    dirname,
    base
  }
) => defineConfig(() => {
  console.log('a', dtsPlugin({
    entryRoot: resolve(dirname, 'src'),
    tsconfig: resolve(dirname, 'tsconfig.json')
  }))

  return {
    plugins: [
      vue(),
      dtsPlugin({
        entryRoot: resolve(dirname, 'src'),
        tsconfig: resolve(dirname, 'tsconfig.json')
      })
    ],
    base,
    build: {
      sourcemap: false,
      cssCodeSplit: true,
      lib: {
        entry: {
          index: resolve(dirname, 'src/library.ts')
        },
        name
      },
      rollupOptions: {
        output: {}
      }
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          cssnanoPlugin({
            preset: 'default'
          })
        ]
      }
    }
  }
})
