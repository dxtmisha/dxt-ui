import { viteBasicFunction } from '@dxtmisha/configuration/viteBasicFunction'

// https://vite.dev/config/
export default viteBasicFunction({
  entry: [
    'src/library.ts',
    'src/flags.ts',
    'src/files.ts',
    'src/socials.ts'
  ]
})
