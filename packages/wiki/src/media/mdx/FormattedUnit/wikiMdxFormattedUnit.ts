import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import formattedUnitEn from './formattedUnit.en.mdx'
import formattedUnitRu from './formattedUnit.ru.mdx'

/**
 * MDX files for FormattedUnit component
 *
 * MDX файлы для компонента FormattedUnit
 */
export const wikiMdxFormattedUnit: StorybookComponentsMdxItem = {
  name: 'FormattedUnit',
  descriptions: {
    formattedUnit: {
      en: formattedUnitEn,
      ru: formattedUnitRu
    }
  }
}
