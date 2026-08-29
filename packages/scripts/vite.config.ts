import { viteBasicFunction } from '@dxtmisha/configuration/viteBasicFunction'

// https://vite.dev/config/
export default viteBasicFunction({
  target: 'node20',
  entry: [
    'src/library.ts',
    'src/library-ai.ts',
    'src/library-figma.ts',
    'src/library-ui.ts',
    'src/config.ts'
  ]
})
