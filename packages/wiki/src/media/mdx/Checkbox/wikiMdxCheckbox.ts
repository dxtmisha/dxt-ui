import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import checkboxEn from './checkbox.en.mdx'
import checkboxRu from './checkbox.ru.mdx'

/**
 * MDX files for Checkbox component
 *
 * MDX файлы для компонента Checkbox
 */
export const wikiMdxCheckbox: StorybookComponentsMdxItem = {
  name: 'Checkbox',
  descriptions: {
    checkbox: {
      en: checkboxEn,
      ru: checkboxRu
    }
  }
}
