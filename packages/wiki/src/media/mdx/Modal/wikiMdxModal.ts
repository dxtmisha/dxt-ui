import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import differencesEn from './differences.en.mdx'
import differencesRu from './differences.ru.mdx'
import modalEn from './modal.en.mdx'
import modalRu from './modal.ru.mdx'

/**
 * MDX files for Modal component
 *
 * MDX файлы для компонента Modal
 */
export const wikiMdxModal: StorybookComponentsMdxItem = {
  name: 'Modal',
  descriptions: {
    differences: {
      en: differencesEn,
      ru: differencesRu
    },
    modal: {
      en: modalEn,
      ru: modalRu
    }
  }
}
