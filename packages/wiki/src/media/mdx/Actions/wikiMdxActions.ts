import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import actionsEn from './actions.en.mdx'
import actionsRu from './actions.ru.mdx'
import flexibleEn from './flexible.en.mdx'
import flexibleRu from './flexible.ru.mdx'
import listEn from './list.en.mdx'
import listRu from './list.ru.mdx'

/**
 * MDX files for Actions component
 *
 * MDX файлы для компонента Actions
 */
export const wikiMdxActions: StorybookComponentsMdxItem = {
  name: 'Actions',
  descriptions: {
    actions: {
      en: actionsEn,
      ru: actionsRu
    },
    flexible: {
      en: flexibleEn,
      ru: flexibleRu
    },
    list: {
      en: listEn,
      ru: listRu
    }
  }
}
