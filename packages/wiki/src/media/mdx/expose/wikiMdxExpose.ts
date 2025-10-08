import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import exposeClearEn from './expose.clear.en.mdx'
import exposeClearRu from './expose.clear.ru.mdx'
import exposeDetailEn from './expose.detail.en.mdx'
import exposeDetailRu from './expose.detail.ru.mdx'
import exposeOpenEn from './expose.open.en.mdx'
import exposeOpenRu from './expose.open.ru.mdx'
import exposeSelectedEn from './expose.selected.en.mdx'
import exposeSelectedRu from './expose.selected.ru.mdx'
import exposeValueEn from './expose.value.en.mdx'
import exposeValueRu from './expose.value.ru.mdx'

export const wikiMdxExpose: StorybookComponentsMdxItem = {
  name: 'Expose',
  descriptions: {
    clear: {
      en: exposeClearEn,
      ru: exposeClearRu
    },
    detail: {
      en: exposeDetailEn,
      ru: exposeDetailRu
    },
    open: {
      en: exposeOpenEn,
      ru: exposeOpenRu
    },
    selected: {
      en: exposeSelectedEn,
      ru: exposeSelectedRu
    },
    value: {
      en: exposeValueEn,
      ru: exposeValueRu
    }
  }
}
