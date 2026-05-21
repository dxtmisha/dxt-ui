import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import menuCountryEn from './menuCountry.en.mdx'
import menuCountryRu from './menuCountry.ru.mdx'

/** MDX документация для компонента MenuCountry */
export const wikiMdxMenuCountry: StorybookComponentsMdxItem = {
  name: 'MenuCountry',
  descriptions: {
    'menuCountry': {
      en: menuCountryEn,
      ru: menuCountryRu
    }
  }
}
