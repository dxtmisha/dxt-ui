import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import containerEn from './container.en.mdx'
import containerRu from './container.ru.mdx'

/**
 * MDX files for Container component
 *
 * MDX файлы для компонента Container
 */
export const wikiMdxContainer: StorybookComponentsMdxItem = {
  name: 'Container',
  descriptions: {
    container: {
      en: containerEn,
      ru: containerRu
    }
  }
}
