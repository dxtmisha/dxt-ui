import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import eventEn from './event.en.mdx'
import eventRu from './event.ru.mdx'
import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'
import marksEn from './marks.en.mdx'
import marksRu from './marks.ru.mdx'
import multipleEn from './multiple.en.mdx'
import multipleRu from './multiple.ru.mdx'
import sliderEn from './slider.en.mdx'
import sliderRu from './slider.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

export const wikiMdxSlider: StorybookComponentsMdxItem = {
  name: 'Slider',
  descriptions: {
    events: {
      en: eventEn,
      ru: eventRu
    },
    expose: {
      en: exposeEn,
      ru: exposeRu
    },
    marks: {
      en: marksEn,
      ru: marksRu
    },
    multiple: {
      en: multipleEn,
      ru: multipleRu
    },
    slider: {
      en: sliderEn,
      ru: sliderRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
