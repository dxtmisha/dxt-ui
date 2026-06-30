import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import eventStickyEn from './event.sticky.en.mdx'
import eventStickyRu from './event.sticky.ru.mdx'
import motionStickyEn from './motionSticky.en.mdx'
import motionStickyRu from './motionSticky.ru.mdx'

/**
 * MDX files for MotionSticky component
 *
 * MDX файлы для компонента MotionSticky
 */
export const wikiMdxMotionSticky: StorybookComponentsMdxItem = {
  name: 'MotionSticky',
  descriptions: {
    'event.sticky': {
      en: eventStickyEn,
      ru: eventStickyRu
    },
    'motionSticky': {
      en: motionStickyEn,
      ru: motionStickyRu
    }
  }
}
