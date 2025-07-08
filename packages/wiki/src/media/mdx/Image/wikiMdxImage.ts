import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import valueEn from './value.en.mdx'
import valueRu from './value.ru.mdx'
import sizeEn from './size.en.mdx'
import sizeRu from './size.ru.mdx'
import adaptiveEn from './adaptive.en.mdx'
import adaptiveRu from './adaptive.ru.mdx'

import eventLoadEn from './event.load.en.mdx'
import eventLoadRu from './event.load.ru.mdx'

import exposeTypeEn from './expose.type.en.mdx'
import exposeTypeRu from './expose.type.ru.mdx'
import exposeDataEn from './expose.data.en.mdx'
import exposeDataRu from './expose.data.ru.mdx'

export const wikiMdxImage: StorybookComponentsMdxItem = {
  name: 'Image',
  descriptions: {
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
    'expose.type': {
      en: exposeTypeEn,
      ru: exposeTypeRu
    },
    'expose.data': {
      en: exposeDataEn,
      ru: exposeDataRu
    }
  }
}
