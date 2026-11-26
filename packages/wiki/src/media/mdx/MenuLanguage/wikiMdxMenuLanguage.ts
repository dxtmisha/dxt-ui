import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import menuLanguageEn from './menuLanguage.en.mdx'
import menuLanguageRu from './menuLanguage.ru.mdx'

/**
 * MDX files for MenuLanguage component
 *
 * MDX файлы для компонента MenuLanguage
 */
export const wikiMdxMenuLanguage: StorybookComponentsMdxItem = {
  name: 'MenuLanguage',
  descriptions: {
    menuLanguage: {
      en: menuLanguageEn,
      ru: menuLanguageRu
    }
  }
}
