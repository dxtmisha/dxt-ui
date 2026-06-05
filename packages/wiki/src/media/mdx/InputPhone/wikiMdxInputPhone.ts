import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import countryBlockEn from './countryBlock.en.mdx'
import countryBlockRu from './countryBlock.ru.mdx'
import inputPhoneEn from './inputPhone.en.mdx'
import inputPhoneRu from './inputPhone.ru.mdx'

/** MDX документация для компонента InputPhone */
export const wikiMdxInputPhone: StorybookComponentsMdxItem = {
  name: 'InputPhone',
  descriptions: {
    countryBlock: {
      en: countryBlockEn,
      ru: countryBlockRu
    },
    inputPhone: {
      en: inputPhoneEn,
      ru: inputPhoneRu
    }
  }
}
