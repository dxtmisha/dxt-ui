import { viteBasicFunction } from '@dxtmisha/configuration/viteBasicFunction'

// https://vite.dev/config/
export default viteBasicFunction(
  undefined,
  'node20',
  [
    'src/library.ts',
    'src/library-ai.ts',
    'src/config.ts'
  ]
)
