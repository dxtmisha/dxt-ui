import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import textLabelEn from './textLabel.en.mdx'
import textLabelRu from './textLabel.ru.mdx'

/**
 * MDX files for TextLabel component
 *
 * MDX файлы для компонента TextLabel
 */
export const wikiMdxTextLabel: StorybookComponentsMdxItem = {
  name: 'TextLabel',
  descriptions: {
    textLabel: {
      en: textLabelEn,
      ru: textLabelRu
    }
  }
}
