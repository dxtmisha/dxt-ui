import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import currencyEn from './currency.en.mdx'
import currencyRu from './currency.ru.mdx'

/**
 * MDX files for Input component
 *
 * MDX файлы для компонента Input
 */
export const wikiMdxInput: StorybookComponentsMdxItem = {
  name: 'Input',
  descriptions: {
    currency: {
      en: currencyEn,
      ru: currencyRu
    }
  }
}
