import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import selectableAreaEn from './selectableArea.en.mdx'
import selectableAreaRu from './selectableArea.ru.mdx'
import eventsEn from './events.en.mdx'
import eventsRu from './events.ru.mdx'
import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'
import howToWorkEn from './howToWork.en.mdx'
import howToWorkRu from './howToWork.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'
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
    events: {
      en: eventsEn,
      ru: eventsRu
    },
    expose: {
      en: exposeEn,
      ru: exposeRu
    },
    howToWork: {
      en: howToWorkEn,
      ru: howToWorkRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    },
    'v-model': {
      en: vModelEn,
      ru: vModelRu
    }
  }
}
