import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import dialogEn from './dialog.en.mdx'
import dialogRu from './dialog.ru.mdx'
import statesEn from './states.en.mdx'
import statesRu from './states.ru.mdx'

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
    }
  }
}
