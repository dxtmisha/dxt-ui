import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import classesEn from './classes.en.mdx'
import classesRu from './classes.ru.mdx'
import eventEn from './event.en.mdx'
import eventRu from './event.ru.mdx'
import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'
import motionAxisEn from './motionAxis.en.mdx'
import motionAxisRu from './motionAxis.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'
import vModelEn from './v-model.en.mdx'
import vModelRu from './v-model.ru.mdx'

/**
 * MDX files for MotionAxis component
 *
 * MDX файлы для компонента MotionAxis
 */
export const wikiMdxMotionAxis: StorybookComponentsMdxItem = {
  name: 'MotionAxis',
  descriptions: {
    'classes': {
      en: classesEn,
      ru: classesRu
    },
    'events': {
      en: eventEn,
      ru: eventRu
    },
    'expose': {
      en: exposeEn,
      ru: exposeRu
    },
    'motionAxis': {
      en: motionAxisEn,
      ru: motionAxisRu
    },
    'slots': {
      en: slotsEn,
      ru: slotsRu
    },
    'v-model': {
      en: vModelEn,
      ru: vModelRu
    }
  }
}
