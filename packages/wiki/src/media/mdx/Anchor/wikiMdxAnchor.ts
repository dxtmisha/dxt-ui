import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import anchorEn from './anchor.en.mdx'
import anchorRu from './anchor.ru.mdx'

/**
 * MDX files for Anchor component
 *
 * MDX файлы для компонента Anchor
 */
export const wikiMdxAnchor: StorybookComponentsMdxItem = {
  name: 'Anchor',
  descriptions: {
    anchor: {
      en: anchorEn,
      ru: anchorRu
    }
  }
}
