import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

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
    'adaptive': {
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
