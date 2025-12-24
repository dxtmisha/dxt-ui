import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import arrowEn from './arrow.en.mdx'
import arrowRu from './arrow.ru.mdx'

/**
 * MDX files for Arrow component
 *
 * MDX файлы для компонента Arrow
 */
export const wikiMdxArrow: StorybookComponentsMdxItem = {
  name: 'Arrow',
  descriptions: {
    arrow: {
      en: arrowEn,
      ru: arrowRu
    }
  }
}
