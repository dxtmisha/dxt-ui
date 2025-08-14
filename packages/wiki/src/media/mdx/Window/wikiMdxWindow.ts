import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import classesEn from './classes.en.mdx'
import classesRu from './classes.ru.mdx'
import hooksEn from './hooks.en.mdx'
import hooksRu from './hooks.ru.mdx'
import staticModeEn from './staticMode.en.mdx'
import staticModeRu from './staticMode.ru.mdx'
import windowEn from './window.en.mdx'
import windowRu from './window.ru.mdx'
import axisEn from './axis.en.mdx'
import axisRu from './axis.ru.mdx'

/**
 * MDX files for Window component
 *
 * MDX файлы для компонента Window
 */
export const wikiMdxWindow: StorybookComponentsMdxItem = {
  name: 'Window',
  descriptions: {
    axis: {
      en: axisEn,
      ru: axisRu
    },
    classes: {
      en: classesEn,
      ru: classesRu
    },
    hooks: {
      en: hooksEn,
      ru: hooksRu
    },
    staticMode: {
      en: staticModeEn,
      ru: staticModeRu
    },
    window: {
      en: windowEn,
      ru: windowRu
    }
  }
}
