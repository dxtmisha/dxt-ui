import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import badgeEn from './badge.en.mdx'
import badgeRu from './badge.ru.mdx'

/**
 * MDX files for Badge component
 *
 * MDX файлы для компонента Badge
 */
export const wikiMdxBadge: StorybookComponentsMdxItem = {
  name: 'Badge',
  descriptions: {
    badge: {
      en: badgeEn,
      ru: badgeRu
    }
  }
}
