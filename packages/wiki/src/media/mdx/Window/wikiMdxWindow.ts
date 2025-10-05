import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import axisEn from './axis.en.mdx'
import axisRu from './axis.ru.mdx'
import classesEn from './classes.en.mdx'
import classesRu from './classes.ru.mdx'
import eventWindowEn from './event.window.en.mdx'
import eventWindowRu from './event.window.ru.mdx'
import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'
import hooksEn from './hooks.en.mdx'
import hooksRu from './hooks.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'
import staticModeEn from './staticMode.en.mdx'
import staticModeRu from './staticMode.ru.mdx'
import vModelEn from './v-model.en.mdx'
import vModelRu from './v-model.ru.mdx'
import windowEn from './window.en.mdx'
import windowRu from './window.ru.mdx'

/**
 * MDX files for Window component
 *
 * MDX файлы для компонента Window
 */
export const wikiMdxWindow: StorybookComponentsMdxItem = {
  name: 'Window',
  descriptions: {
    'axis': {
      en: axisEn,
      ru: axisRu
    },
    'classes': {
      en: classesEn,
      ru: classesRu
    },
    'event.window': {
      en: eventWindowEn,
      ru: eventWindowRu
    },
    'expose': {
      en: exposeEn,
      ru: exposeRu
    },
    'hooks': {
      en: hooksEn,
      ru: hooksRu
    },
    'slots': {
      en: slotsEn,
      ru: slotsRu
    },
    'staticMode': {
      en: staticModeEn,
      ru: staticModeRu
    },
    'v-model': {
      en: vModelEn,
      ru: vModelRu
    },
    'window': {
      en: windowEn,
      ru: windowRu
    }
  }
}
