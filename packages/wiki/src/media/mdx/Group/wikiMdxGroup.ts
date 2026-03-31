import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import groupEn from './group.en.mdx'
import groupRu from './group.ru.mdx'

/**
 * MDX files for Group component
 *
 * MDX файлы для компонента Group
 */
export const wikiMdxGroup: StorybookComponentsMdxItem = {
  name: 'Group',
  descriptions: {
    group: {
      en: groupEn,
      ru: groupRu
    }
  }
}
