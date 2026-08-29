import { viteBasicFunction } from './viteBasicFunction.config.js'

// https://vite.dev/config/
export const viteFlags = viteBasicFunction({
  entry: ['src/flags.ts']
})
