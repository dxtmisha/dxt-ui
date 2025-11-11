import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import selectValueEn from './selectValue.en.mdx'
import selectValueRu from './selectValue.ru.mdx'

/**
 * MDX files for SelectValue component
 *
 * MDX файлы для компонента SelectValue
 */
export const wikiMdxSelectValue: StorybookComponentsMdxItem = {
  name: 'SelectValue',
  descriptions: {
    selectValue: {
      en: selectValueEn,
      ru: selectValueRu
    }
  }
}
