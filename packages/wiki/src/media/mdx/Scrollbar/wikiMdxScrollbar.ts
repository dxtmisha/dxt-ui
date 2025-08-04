import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import scrollbarEn from './scrollbar.en.mdx'
import scrollbarRu from './scrollbar.ru.mdx'

import eventBottomEn from './event.bottom.en.mdx'
import eventBottomRu from './event.bottom.ru.mdx'
import eventEdgeEn from './event.edge.en.mdx'
import eventEdgeRu from './event.edge.ru.mdx'
import eventLeaveBottomEn from './event.leaveBottom.en.mdx'
import eventLeaveBottomRu from './event.leaveBottom.ru.mdx'
import eventLeaveTopEn from './event.leaveTop.en.mdx'
import eventLeaveTopRu from './event.leaveTop.ru.mdx'
import eventReachBottomEn from './event.reachBottom.en.mdx'
import eventReachBottomRu from './event.reachBottom.ru.mdx'
import eventReachTopEn from './event.reachTop.en.mdx'
import eventReachTopRu from './event.reachTop.ru.mdx'
import eventTopEn from './event.top.en.mdx'
import eventTopRu from './event.top.ru.mdx'

/**
 * MDX files for Scrollbar component
 *
 * MDX файлы для компонента Scrollbar
 */
export const wikiMdxScrollbar: StorybookComponentsMdxItem = {
  name: 'Scrollbar',
  descriptions: {
    'scrollbar': {
      en: scrollbarEn,
      ru: scrollbarRu
    },
    'event.top': {
      en: eventTopEn,
      ru: eventTopRu
    },
    'event.reachTop': {
      en: eventReachTopEn,
      ru: eventReachTopRu
    },
    'event.leaveTop': {
      en: eventLeaveTopEn,
      ru: eventLeaveTopRu
    },
    'event.bottom': {
      en: eventBottomEn,
      ru: eventBottomRu
    },
    'event.reachBottom': {
      en: eventReachBottomEn,
      ru: eventReachBottomRu
    },
    'event.leaveBottom': {
      en: eventLeaveBottomEn,
      ru: eventLeaveBottomRu
    },
    'event.edge': {
      en: eventEdgeEn,
      ru: eventEdgeRu
    }
  }
}
