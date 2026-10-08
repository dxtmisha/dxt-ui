import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import inputSearchEn from './inputSearch.en.mdx'
import inputSearchRu from './inputSearch.ru.mdx'
import queryEn from './query.en.mdx'
import queryRu from './query.ru.mdx'

/**
 * MDX files for InputSearch component
 *
 * MDX файлы для компонента InputSearch
 */
export const wikiMdxInputSearch: StorybookComponentsMdxItem = {
  name: 'InputSearch',
  descriptions: {
    inputSearch: {
      en: inputSearchEn,
      ru: inputSearchRu
    },
    query: {
      en: queryEn,
      ru: queryRu
    }
  }
}
