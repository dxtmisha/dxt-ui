import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import classesEn from './classes.en.mdx'
import classesRu from './classes.ru.mdx'
import eventMotionAxisEn from './event.motionAxis.en.mdx'
import eventMotionAxisRu from './event.motionAxis.ru.mdx'
import motionAxisEn from './motionAxis.en.mdx'
import motionAxisRu from './motionAxis.ru.mdx'

/**
 * MDX files for MotionAxis component
 *
 * MDX файлы для компонента MotionAxis
 */
export const wikiMdxMotionAxis: StorybookComponentsMdxItem = {
  name: 'MotionAxis',
  descriptions: {
    classes: {
      en: classesEn,
      ru: classesRu
    },
    events: {
      en: eventMotionAxisEn,
      ru: eventMotionAxisRu
    },
    motionAxis: {
      en: motionAxisEn,
      ru: motionAxisRu
    }
  }
}
