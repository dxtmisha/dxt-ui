import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import dialogEn from './dialog.en.mdx'
import dialogRu from './dialog.ru.mdx'
import statesEn from './states.en.mdx'
import statesRu from './states.ru.mdx'
import buttonsEn from './buttons.en.mdx'
import buttonsRu from './buttons.ru.mdx'
import eventsEn from './events.en.mdx'
import eventsRu from './events.ru.mdx'

/**
 * MDX files for Dialog component
 *
 * MDX файлы для компонента Dialog
 */
export const wikiMdxDialog: StorybookComponentsMdxItem = {
  name: 'Dialog',
  descriptions: {
    dialog: {
      en: dialogEn,
      ru: dialogRu
    },
    states: {
      en: statesEn,
      ru: statesRu
    },
    buttons: {
      en: buttonsEn,
      ru: buttonsRu
    },
    events: {
      en: eventsEn,
      ru: eventsRu
    }
  }
}
