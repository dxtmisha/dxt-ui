import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import basicEn from './basic.en.mdx'
import basicRu from './basic.ru.mdx'
import maskEn from './mask.en.mdx'
import maskRu from './mask.ru.mdx'

/**
 * MDX files for Mask component
 *
 * MDX файлы для компонента Mask
 */
export const wikiMdxMask: StorybookComponentsMdxItem = {
  name: 'Mask',
  descriptions: {
    basic: {
      en: basicEn,
      ru: basicRu
    },
    mask: {
      en: maskEn,
      ru: maskRu
    }
  }
}
