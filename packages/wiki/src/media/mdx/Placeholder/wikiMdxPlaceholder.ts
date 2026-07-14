import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import placeholderEn from './placeholder.en.mdx'
import placeholderRu from './placeholder.ru.mdx'

/**
 * MDX descriptions for the Placeholder component
 *
 * MDX описания для компонента Placeholder
 */
export const wikiMdxPlaceholder: StorybookComponentsMdxItem = {
  name: 'Placeholder',
  descriptions: {
    placeholder: {
      en: placeholderEn,
      ru: placeholderRu
    }
  }
}
