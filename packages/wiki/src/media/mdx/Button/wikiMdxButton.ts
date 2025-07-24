import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import buttonEn from './button.en.mdx'
import buttonRu from './button.ru.mdx'
import primaryEn from './primary.en.mdx'
import primaryRu from './primary.ru.mdx'
import secondaryEn from './secondary.en.mdx'
import secondaryRu from './secondary.ru.mdx'

/**
 * MDX files for Button component
 *
 * MDX файлы для компонента Button
 */
export const wikiMdxButton: StorybookComponentsMdxItem = {
  name: 'Button',
  descriptions: {
    button: {
      en: buttonEn,
      ru: buttonRu
    },
    primary: {
      en: primaryEn,
      ru: primaryRu
    },
    secondary: {
      en: secondaryEn,
      ru: secondaryRu
    }
  }
}
