import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import barsEn from './bars.en.mdx'
import barsRu from './bars.ru.mdx'
import actionEn from './action.en.mdx'
import actionRu from './action.ru.mdx'
import slotBarsEn from './slot.bars.en.mdx'
import slotBarsRu from './slot.bars.ru.mdx'
import slotActionBarsEn from './slot.actionBars.en.mdx'
import slotActionBarsRu from './slot.actionBars.ru.mdx'
import vModelEn from './v-model.en.mdx'
import vModelRu from './v-model.ru.mdx'

/**
 * MDX files for Bars component
 *
 * MDX файлы для компонента Bars
 */
export const wikiMdxBars: StorybookComponentsMdxItem = {
  name: 'Bars',
  descriptions: {
    'bars': {
      en: barsEn,
      ru: barsRu
    },
    'action': {
      en: actionEn,
      ru: actionRu
    },
    'slot.bars': {
      en: slotBarsEn,
      ru: slotBarsRu
    },
    'slot.actionBars': {
      en: slotActionBarsEn,
      ru: slotActionBarsRu
    },
    'v-model': {
      en: vModelEn,
      ru: vModelRu
    }
  }
}
