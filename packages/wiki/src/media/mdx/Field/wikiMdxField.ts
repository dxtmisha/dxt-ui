import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import fieldEn from './field.en.mdx'
import fieldRu from './field.ru.mdx'

/**
 * MDX files for Field component
 *
 * MDX файлы для компонента Field
 */
export const wikiMdxField: StorybookComponentsMdxItem = {
  name: 'Field',
  descriptions: {
    field: {
      en: fieldEn,
      ru: fieldRu
    }
  }
}
