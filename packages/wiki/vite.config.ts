import { viteMdx } from '@dxtmisha/configuration/viteMdx'
import { mergeConfig } from 'vite'

// https://vite.dev/config/
export default mergeConfig(
  viteMdx,
  {
    build: {
      lib: {
        entry: [
          'src/media.ts',
          'src/storybook.tsx'
        ]
      }
    }
  }
)
