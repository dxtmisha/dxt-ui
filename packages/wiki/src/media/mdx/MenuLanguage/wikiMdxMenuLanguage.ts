import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import menuLanguageEn from './menuLanguage.en.mdx'
import menuLanguageRu from './menuLanguage.ru.mdx'

/** MDX документация для компонента MenuLanguage */
export const wikiMdxMenuLanguage: StorybookComponentsMdxItem = {
  name: 'MenuLanguage',
  descriptions: {
    'menuLanguage': {
      en: menuLanguageEn,
      ru: menuLanguageRu
    }
  }
}
