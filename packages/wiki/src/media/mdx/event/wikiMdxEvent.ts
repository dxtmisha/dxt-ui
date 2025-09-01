import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import clickEn from './click.en.mdx'
import clickRu from './click.ru.mdx'
import clickLiteEn from './clickLite.en.mdx'
import clickLiteRu from './clickLite.ru.mdx'

import barsEn from './bars.en.mdx'
import barsRu from './bars.ru.mdx'
import barsLiteEn from './barsLite.en.mdx'
import barsLiteRu from './barsLite.ru.mdx'
import barsBackEn from './barsBack.en.mdx'
import barsBackRu from './barsBack.ru.mdx'

import scrollbarBottomEn from './scrollbarBottom.en.mdx'
import scrollbarBottomRu from './scrollbarBottom.ru.mdx'
import scrollbarEdgeEn from './scrollbarEdge.en.mdx'
import scrollbarEdgeRu from './scrollbarEdge.ru.mdx'
import scrollbarLeaveBottomEn from './scrollbarLeaveBottom.en.mdx'
import scrollbarLeaveBottomRu from './scrollbarLeaveBottom.ru.mdx'
import scrollbarLeaveTopEn from './scrollbarLeaveTop.en.mdx'
import scrollbarLeaveTopRu from './scrollbarLeaveTop.ru.mdx'
import scrollbarReachBottomEn from './scrollbarReachBottom.en.mdx'
import scrollbarReachBottomRu from './scrollbarReachBottom.ru.mdx'
import scrollbarReachTopEn from './scrollbarReachTop.en.mdx'
import scrollbarReachTopRu from './scrollbarReachTop.ru.mdx'
import scrollbarTopEn from './scrollbarTop.en.mdx'
import scrollbarTopRu from './scrollbarTop.ru.mdx'

import windowEn from './window.en.mdx'
import windowRu from './window.ru.mdx'

export const wikiMdxEvent: StorybookComponentsMdxItem = {
  name: 'Event',
  descriptions: {
    click: {
      en: clickEn,
      ru: clickRu
    },
    clickLite: {
      en: clickLiteEn,
      ru: clickLiteRu
    },

    bars: {
      en: barsEn,
      ru: barsRu
    },
    barsLite: {
      en: barsLiteEn,
      ru: barsLiteRu
    },
    barsBack: {
      en: barsBackEn,
      ru: barsBackRu
    },

    scrollbarBottom: {
      en: scrollbarBottomEn,
      ru: scrollbarBottomRu
    },
    scrollbarEdge: {
      en: scrollbarEdgeEn,
      ru: scrollbarEdgeRu
    },
    scrollbarLeaveBottom: {
      en: scrollbarLeaveBottomEn,
      ru: scrollbarLeaveBottomRu
    },
    scrollbarLeaveTop: {
      en: scrollbarLeaveTopEn,
      ru: scrollbarLeaveTopRu
    },
    scrollbarReachBottom: {
      en: scrollbarReachBottomEn,
      ru: scrollbarReachBottomRu
    },
    scrollbarReachTop: {
      en: scrollbarReachTopEn,
      ru: scrollbarReachTopRu
    },
    scrollbarTop: {
      en: scrollbarTopEn,
      ru: scrollbarTopRu
    },
    window: {
      en: windowEn,
      ru: windowRu
    }
  }
}
