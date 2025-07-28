import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import badgeEn from './badge.en.mdx'
import badgeRu from './badge.ru.mdx'
import dotEn from './dot.en.mdx'
import dotRu from './dot.ru.mdx'
import outlineEn from './outline.en.mdx'
import outlineRu from './outline.ru.mdx'
import primaryEn from './primary.en.mdx'
import primaryRu from './primary.ru.mdx'
import secondaryEn from './secondary.en.mdx'
import secondaryRu from './secondary.ru.mdx'

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
    },
    dot: {
      en: dotEn,
      ru: dotRu
    },
    outline: {
      en: outlineEn,
      ru: outlineRu
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
