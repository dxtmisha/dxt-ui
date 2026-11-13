import type { Preview } from '@storybook/vue3-vite'
import { Geo, Icons } from '@dxtmisha/functional'
import { d1MakeIcons } from '@dxtmisha/d1/media'
import { registerFileIcons } from '@dxtmisha/media/files'
import { UsSvg, VnSvg } from '@dxtmisha/media/flags'
import { registerSocialIcons } from '@dxtmisha/media/socials'

import '@dxtmisha/wiki/storybook/styles'
import '../../d1/src/styles/Ui/icon.css'
import '../../d1/src/style.scss'

Geo.set('ru-RU')
d1MakeIcons()
registerFileIcons()
registerSocialIcons()
Icons.add('flag-us', UsSvg)
Icons.add('flag-vn', VnSvg)

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        // color: /(background|color)$/i,
        date: /Date$/i
      }
    },

    a11y: {
      config: {
        // JSDOM cannot evaluate color contrast; keep the rule enabled in browsers.
        // JSDOM не проверяет контраст; в браузерах правило остаётся включённым.
        rules: 'jsdom' in globalThis ? [{ id: 'color-contrast', enabled: false }] : []
      },
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
