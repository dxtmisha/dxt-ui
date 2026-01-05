import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import anchorEn from './anchor.en.mdx'
import anchorRu from './anchor.ru.mdx'
import exposeGoEn from './expose.go.en.mdx'
import exposeGoRu from './expose.go.ru.mdx'
import hideEn from './hide.en.mdx'
import hideRu from './hide.ru.mdx'
import isCopyEn from './isCopy.en.mdx'
import isCopyRu from './isCopy.ru.mdx'
import scrollEn from './scroll.en.mdx'
import scrollRu from './scroll.ru.mdx'

/**
 * MDX files for Anchor component
 *
 * MDX файлы для компонента Anchor
 */
export const wikiMdxAnchor: StorybookComponentsMdxItem = {
  name: 'Anchor',
  descriptions: {
    'anchor': {
      en: anchorEn,
      ru: anchorRu
    },
    'expose.go': {
      en: exposeGoEn,
      ru: exposeGoRu
    },
    'hide': {
      en: hideEn,
      ru: hideRu
    },
    'isCopy': {
      en: isCopyEn,
      ru: isCopyRu
    },
    'scroll': {
      en: scrollEn,
      ru: scrollRu
    }
  }
}
