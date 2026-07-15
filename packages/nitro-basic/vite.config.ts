import { mergeConfig } from 'vite'
import { viteBasicFunction } from '@dxtmisha/configuration/viteBasicFunction'

// https://vite.dev/config/
export default mergeConfig(
  viteBasicFunction(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    true
  ) as any,
  {
    build: {
      lib: {
        entry: [
          'src/library-client.ts',
          'src/library-plugin.ts'
        ]
      }
    }
  }
)
