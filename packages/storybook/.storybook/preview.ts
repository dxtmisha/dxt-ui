import type { Preview } from '@storybook/vue3-vite'
import { Geo } from '@dxtmisha/functional'

import '@dxtmisha/wiki/storybook/styles'
import '../../d1/src/styles/Ui/icon.css'
import '../../d1/src/style.scss'

Geo.set('ru-RU')

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    options: {
      storySort: {
        method: 'alphabetical'
      }
    }
  }
}

export default preview
