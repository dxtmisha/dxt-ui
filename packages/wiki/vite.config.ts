import { mergeConfig } from 'vite'
import { viteMdx } from '@dxtmisha/configuration/viteMdx'

export default mergeConfig(
  viteMdx,
  {
    build: {
      lib: {
        entry: [
          'src/media.ts',
          'src/documentation/storybook/storybook.tsx'
        ]
      }
    }
  }
)
