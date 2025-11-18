import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import selectEn from './select.en.mdx'
import selectRu from './select.ru.mdx'

/**
 * MDX files for Select component
 *
 * MDX файлы для компонента Select
 */
export const wikiMdxSelect: StorybookComponentsMdxItem = {
  name: 'Select',
  descriptions: {
    select: {
      en: selectEn,
      ru: selectRu
    }
  }
}
