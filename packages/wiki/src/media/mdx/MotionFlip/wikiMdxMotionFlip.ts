import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'
import modeEn from './mode.en.mdx'
import modeRu from './mode.ru.mdx'
import motionFlipEn from './motionFlip.en.mdx'
import motionFlipRu from './motionFlip.ru.mdx'
import workEn from './work.en.mdx'
import workRu from './work.ru.mdx'

/**
 * MDX files for MotionFlip component
 *
 * MDX файлы для компонента MotionFlip
 */
export const wikiMdxMotionFlip: StorybookComponentsMdxItem = {
  name: 'MotionFlip',
  descriptions: {
    expose: {
      en: exposeEn,
      ru: exposeRu
    },
    mode: {
      en: modeEn,
      ru: modeRu
    },
    motionFlip: {
      en: motionFlipEn,
      ru: motionFlipRu
    },
    work: {
      en: workEn,
      ru: workRu
    }
  }
}
