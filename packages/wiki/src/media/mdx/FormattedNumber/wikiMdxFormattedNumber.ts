import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import formattedNumberEn from './formattedNumber.en.mdx'
import formattedNumberRu from './formattedNumber.ru.mdx'

/**
 * MDX files for FormattedNumber component
 *
 * MDX файлы для компонента FormattedNumber
 */
export const wikiMdxFormattedNumber: StorybookComponentsMdxItem = {
  name: 'FormattedNumber',
  descriptions: {
    formattedNumber: {
      en: formattedNumberEn,
      ru: formattedNumberRu
    }
  }
}
