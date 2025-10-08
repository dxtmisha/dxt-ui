import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import clearEn from './clear.en.mdx'
import clearRu from './clear.ru.mdx'
import detailEn from './detail.en.mdx'
import detailRu from './detail.ru.mdx'
import exposeSelectedEn from './expose.selected.en.mdx'
import exposeSelectedRu from './expose.selected.ru.mdx'
import valueEn from './value.en.mdx'
import valueRu from './value.ru.mdx'

export const wikiMdxExpose: StorybookComponentsMdxItem = {
  name: 'Expose',
  descriptions: {
    clear: {
      en: clearEn,
      ru: clearRu
    },
    detail: {
      en: detailEn,
      ru: detailRu
    },
    selected: {
      en: exposeSelectedEn,
      ru: exposeSelectedRu
    },
    value: {
      en: valueEn,
      ru: valueRu
    }
  }
}
