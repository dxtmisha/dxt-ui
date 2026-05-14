import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import dividerEn from './divider.en.mdx'
import dividerRu from './divider.ru.mdx'

/**
 * MDX files for Divider component
 *
 * MDX файлы для компонента Divider
 */
export const wikiMdxDivider: StorybookComponentsMdxItem = {
  name: 'Divider',
  descriptions: {
    divider: {
      en: dividerEn,
      ru: dividerRu
    }
  }
}
