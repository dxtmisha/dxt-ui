import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import pageEn from './page.en.mdx'
import pageRu from './page.ru.mdx'

/**
 * MDX files for Page component
 *
 * MDX файлы для компонента Page
 */
export const wikiMdxPage: StorybookComponentsMdxItem = {
  name: 'Page',
  descriptions: {
    block: {
      en: pageEn,
      ru: pageRu
    }
  }
}
