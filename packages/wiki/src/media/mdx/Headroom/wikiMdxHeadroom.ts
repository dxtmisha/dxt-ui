import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'
import headroomEn from './headroom.en.mdx'
import headroomRu from './headroom.ru.mdx'

/**
 * MDX files for Headroom component
 *
 * MDX файлы для компонента Headroom
 */
export const wikiMdxHeadroom: StorybookComponentsMdxItem = {
  name: 'Headroom',
  descriptions: {
    expose: {
      en: exposeEn,
      ru: exposeRu
    },
    headroom: {
      en: headroomEn,
      ru: headroomRu
    }
  }
}
