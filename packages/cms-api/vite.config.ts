import { viteBasicFunction } from '@dxtmisha/configuration/viteBasicFunction'

// https://vite.dev/config/
export default viteBasicFunction({
  entry: [
    'src/library.ts',
    'src/media/translate/translate.ts'
  ]
})
