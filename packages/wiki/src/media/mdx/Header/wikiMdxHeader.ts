import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import headerEn from './header.en.mdx'
import headerRu from './header.ru.mdx'

/**
 * MDX files for Header component
 *
 * MDX файлы для компонента Header
 */
export const wikiMdxHeader: StorybookComponentsMdxItem = {
  name: 'Header',
  descriptions: {
    header: {
      en: headerEn,
      ru: headerRu
    }
  }
}
