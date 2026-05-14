import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import bleedEn from './bleed.en.mdx'
import bleedRu from './bleed.ru.mdx'

/**
 * MDX files for Bleed component
 *
 * MDX файлы для компонента Bleed
 */
export const wikiMdxBleed: StorybookComponentsMdxItem = {
  name: 'Bleed',
  descriptions: {
    bleed: {
      en: bleedEn,
      ru: bleedRu
    }
  }
}
