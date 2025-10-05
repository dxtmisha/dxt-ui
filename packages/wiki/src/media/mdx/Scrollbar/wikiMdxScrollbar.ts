import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import emitsEn from './emits.en.mdx'
import emitsRu from './emits.ru.mdx'
import emitsIncludeEn from './emits-include.en.mdx'
import emitsIncludeRu from './emits-include.ru.mdx'
import scrollbarEn from './scrollbar.en.mdx'
import scrollbarRu from './scrollbar.ru.mdx'

/**
 * MDX files for Scrollbar component
 *
 * MDX файлы для компонента Scrollbar
 */
export const wikiMdxScrollbar: StorybookComponentsMdxItem = {
  name: 'Scrollbar',
  descriptions: {
    'emits': {
      en: emitsEn,
      ru: emitsRu
    },
    'emits-include': {
      en: emitsIncludeEn,
      ru: emitsIncludeRu
    },
    'scrollbar': {
      en: scrollbarEn,
      ru: scrollbarRu
    }
  }
}
