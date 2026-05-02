import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import pageAreaEn from './pageArea.en.mdx'
import pageAreaRu from './pageArea.ru.mdx'

/**
 * MDX files for PageArea component
 *
 * MDX файлы для компонента PageArea
 */
export const wikiMdxPageArea: StorybookComponentsMdxItem = {
  name: 'PageArea',
  descriptions: {
    pageArea: {
      en: pageAreaEn,
      ru: pageAreaRu
    }
  }
}
