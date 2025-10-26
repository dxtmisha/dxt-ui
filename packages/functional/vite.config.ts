import { mergeConfig } from 'vite'
import { viteFlags } from '@dxtmisha/configuration/viteFlags'

// https://vite.dev/config/
export default mergeConfig(
  viteFlags,
  {
    build: {
      lib: {
        entry: [
          'src/library-lite.ts'
        ]
      }
    }
  }
)
