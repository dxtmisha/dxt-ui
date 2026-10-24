import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  resolve: {
    alias: {
      '@dxtmisha/functional-basic': fileURLToPath(new URL('../functional-basic/src/library.ts', import.meta.url)),
      '@dxtmisha/functional': fileURLToPath(new URL('./src/library.ts', import.meta.url))
    }
  },
  test: {
    include: ['src/**/__tests__/*.test.ts']
  }
})
