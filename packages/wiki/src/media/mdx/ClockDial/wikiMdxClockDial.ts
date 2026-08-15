import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import clockDialEn from './clockDial.en.mdx'
import clockDialRu from './clockDial.ru.mdx'
import eventEn from './event.en.mdx'
import eventRu from './event.ru.mdx'
import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'
import handsEn from './hands.en.mdx'
import handsRu from './hands.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'
import typeEn from './type.en.mdx'
import typeRu from './type.ru.mdx'

export const wikiMdxClockDial: StorybookComponentsMdxItem = {
  name: 'ClockDial',
  descriptions: {
    clockDial: {
      en: clockDialEn,
      ru: clockDialRu
    },
    events: {
      en: eventEn,
      ru: eventRu
    },
    expose: {
      en: exposeEn,
      ru: exposeRu
    },
    hands: {
      en: handsEn,
      ru: handsRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    },
    type: {
      en: typeEn,
      ru: typeRu
    }
  }
}
