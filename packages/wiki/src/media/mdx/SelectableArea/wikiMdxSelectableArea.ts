import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import selectableAreaEn from './selectableArea.en.mdx'
import selectableAreaRu from './selectableArea.ru.mdx'
import eventSelectedEn from './event.selected.en.mdx'
import eventSelectedRu from './event.selected.ru.mdx'
import vModelEn from './v-model.en.mdx'
import vModelRu from './v-model.ru.mdx'

/**
 * MDX files for SelectableArea component
 *
 * MDX файлы для компонента SelectableArea
 */
export const wikiMdxSelectableArea: StorybookComponentsMdxItem = {
  name: 'SelectableArea',
  descriptions: {
    selectableArea: {
      en: selectableAreaEn,
      ru: selectableAreaRu
    },
    'event.selected': {
      en: eventSelectedEn,
      ru: eventSelectedRu
    },
    'v-model': {
      en: vModelEn,
      ru: vModelRu
    }
  }
}
