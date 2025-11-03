import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import currencyEn from './currency.en.mdx'
import currencyRu from './currency.ru.mdx'
import inputEn from './input.en.mdx'
import inputRu from './input.ru.mdx'
import maskEn from './mask.en.mdx'
import maskRu from './mask.ru.mdx'
import numberEn from './number.en.mdx'
import numberRu from './number.ru.mdx'
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
    mask: {
      en: maskEn,
      ru: maskRu
    },
    number: {
      en: numberEn,
      ru: numberRu
    },
    type: {
      en: typeEn,
      ru: typeRu
    }
  }
}
