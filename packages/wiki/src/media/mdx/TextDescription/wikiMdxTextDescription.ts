import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import textDescriptionEn from './textDescription.en.mdx'
import textDescriptionRu from './textDescription.ru.mdx'

/**
 * MDX files for TextDescription component
 *
 * MDX файлы для компонента TextDescription
 */
export const wikiMdxTextDescription: StorybookComponentsMdxItem = {
  name: 'TextDescription',
  descriptions: {
    textDescription: {
      en: textDescriptionEn,
      ru: textDescriptionRu
    }
  }
}
