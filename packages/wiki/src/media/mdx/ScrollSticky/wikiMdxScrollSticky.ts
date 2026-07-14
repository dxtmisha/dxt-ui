import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import scrollStickyEn from './scrollsticky.en.mdx'
import scrollStickyRu from './scrollsticky.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

/**
 * MDX files for ScrollSticky component
 *
 * MDX файлы для компонента ScrollSticky
 */
export const wikiMdxScrollSticky: StorybookComponentsMdxItem = {
  name: 'ScrollSticky',
  descriptions: {
    scrollsticky: {
      en: scrollStickyEn,
      ru: scrollStickyRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
