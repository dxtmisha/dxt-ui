import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import sectionEn from './section.en.mdx'
import sectionRu from './section.ru.mdx'

/**
 * MDX files for Section component
 *
 * MDX файлы для компонента Section
 */
export const wikiMdxSection: StorybookComponentsMdxItem = {
  name: 'Section',
  descriptions: {
    section: {
      en: sectionEn,
      ru: sectionRu
    }
  }
}
