import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import classesEn from './classes.en.mdx'
import classesRu from './classes.ru.mdx'
import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'
import motionFlipEn from './motionFlip.en.mdx'
import motionFlipRu from './motionFlip.ru.mdx'

/**
 * MDX files for MotionFlip component
 *
 * MDX файлы для компонента MotionFlip
 */
export const wikiMdxMotionFlip: StorybookComponentsMdxItem = {
  name: 'MotionFlip',
  descriptions: {
    'classes': {
      en: classesEn,
      ru: classesRu
    },
    'expose': {
      en: exposeEn,
      ru: exposeRu
    },
    'motionFlip': {
      en: motionFlipEn,
      ru: motionFlipRu
    }
  }
}
