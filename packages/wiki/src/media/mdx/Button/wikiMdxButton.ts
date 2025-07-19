import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import buttonEn from './button.en.mdx'
import buttonRu from './button.ru.mdx'

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
    }
  }
}
