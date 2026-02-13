import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import exposeToSelectedEn from './expose.toSelected.en.mdx'
import exposeToSelectedRu from './expose.toSelected.ru.mdx'
import horizontalScrollEn from './horizontalScroll.en.mdx'
import horizontalScrollRu from './horizontalScroll.ru.mdx'
import selectedEn from './selected.en.mdx'
import selectedRu from './selected.ru.mdx'

/**
 * MDX files for HorizontalScroll component
 *
 * MDX файлы для компонента HorizontalScroll
 */
export const wikiMdxHorizontalScroll: StorybookComponentsMdxItem = {
  name: 'HorizontalScroll',
  descriptions: {
    'expose.toSelected': {
      en: exposeToSelectedEn,
      ru: exposeToSelectedRu
    },
    'horizontalScroll': {
      en: horizontalScrollEn,
      ru: horizontalScrollRu
    },
    'selected': {
      en: selectedEn,
      ru: selectedRu
    }
  }
}
