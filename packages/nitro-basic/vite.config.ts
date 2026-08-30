import { viteBasicFunction } from '@dxtmisha/configuration/viteBasicFunction'

// https://vite.dev/config/
export default viteBasicFunction({
  entry: [
    'src/library.ts',
    'src/library-client.ts',
    'src/library-plugin.ts'
  ]
})
