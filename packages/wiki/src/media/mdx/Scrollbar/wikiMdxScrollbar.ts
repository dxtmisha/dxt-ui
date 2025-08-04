import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import scrollbarEn from './scrollbar.en.mdx'
import scrollbarRu from './scrollbar.ru.mdx'
import topEn from './top.en.mdx'
import topRu from './top.ru.mdx'
import reachTopEn from './reachTop.en.mdx'
import reachTopRu from './reachTop.ru.mdx'
import leaveTopEn from './leaveTop.en.mdx'
import leaveTopRu from './leaveTop.ru.mdx'
import bottomEn from './bottom.en.mdx'
import bottomRu from './bottom.ru.mdx'
import reachBottomEn from './reachBottom.en.mdx'
import reachBottomRu from './reachBottom.ru.mdx'
import leaveBottomEn from './leaveBottom.en.mdx'
import leaveBottomRu from './leaveBottom.ru.mdx'
import edgeEn from './edge.en.mdx'
import edgeRu from './edge.ru.mdx'

/**
 * MDX files for Scrollbar component
 *
 * MDX файлы для компонента Scrollbar
 */
export const wikiMdxScrollbar: StorybookComponentsMdxItem = {
  name: 'Scrollbar',
  descriptions: {
    scrollbar: {
      en: scrollbarEn,
      ru: scrollbarRu
    },
    top: {
      en: topEn,
      ru: topRu
    },
    reachTop: {
      en: reachTopEn,
      ru: reachTopRu
    },
    leaveTop: {
      en: leaveTopEn,
      ru: leaveTopRu
    },
    bottom: {
      en: bottomEn,
      ru: bottomRu
    },
    reachBottom: {
      en: reachBottomEn,
      ru: reachBottomRu
    },
    leaveBottom: {
      en: leaveBottomEn,
      ru: leaveBottomRu
    },
    edge: {
      en: edgeEn,
      ru: edgeRu
    }
  }
}
