import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import imageEn from './image.en.mdx'
import imageRu from './image.ru.mdx'
import valueEn from './value.en.mdx'
import valueRu from './value.ru.mdx'
import sizeEn from './size.en.mdx'
import sizeRu from './size.ru.mdx'
import adaptiveEn from './adaptive.en.mdx'
import adaptiveRu from './adaptive.ru.mdx'

import eventLoadEn from './event.load.en.mdx'
import eventLoadRu from './event.load.ru.mdx'

import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'

export const wikiMdxImage: StorybookComponentsMdxItem = {
  name: 'Image',
  descriptions: {
    'image': {
      en: imageEn,
      ru: imageRu
    },
    'value': {
      en: valueEn,
      ru: valueRu
    },
    'size': {
      en: sizeEn,
      ru: sizeRu
    },
    'adaptive': {
      en: adaptiveEn,
      ru: adaptiveRu
    },
    'event.load': {
      en: eventLoadEn,
      ru: eventLoadRu
    },
    'expose': {
      en: exposeEn,
      ru: exposeRu
    }
  }
}
