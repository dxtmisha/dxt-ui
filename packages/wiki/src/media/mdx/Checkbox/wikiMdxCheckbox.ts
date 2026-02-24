import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import checkboxEn from './checkbox.en.mdx'
import checkboxRu from './checkbox.ru.mdx'
import indeterminateEn from './indeterminate.en.mdx'
import indeterminateRu from './indeterminate.ru.mdx'
import valueEn from './value.en.mdx'
import valueRu from './value.ru.mdx'

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
    },
    indeterminate: {
      en: indeterminateEn,
      ru: indeterminateRu
    },
    value: {
      en: valueEn,
      ru: valueRu
    }
  }
}
