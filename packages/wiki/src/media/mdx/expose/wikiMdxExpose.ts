import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import detailEn from './detail.en.mdx'
import detailRu from './detail.ru.mdx'
import valueEn from './value.en.mdx'
import valueRu from './value.ru.mdx'
import exposeSelectedEn from './expose.selected.en.mdx'
import exposeSelectedRu from './expose.selected.ru.mdx'

export const wikiMdxExpose: StorybookComponentsMdxItem = {
  name: 'Expose',
  descriptions: {
    detail: {
      en: detailEn,
      ru: detailRu
    },
    value: {
      en: valueEn,
      ru: valueRu
    },
    selected: {
      en: exposeSelectedEn,
      ru: exposeSelectedRu
    }
  }
}
