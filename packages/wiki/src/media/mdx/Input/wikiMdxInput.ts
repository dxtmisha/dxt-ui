import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import currencyEn from './currency.en.mdx'
import currencyRu from './currency.ru.mdx'
import inputEn from './input.en.mdx'
import inputRu from './input.ru.mdx'
import typeEn from './type.en.mdx'
import typeRu from './type.ru.mdx'

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
    },
    input: {
      en: inputEn,
      ru: inputRu
    },
    type: {
      en: typeEn,
      ru: typeRu
    }
  }
}
