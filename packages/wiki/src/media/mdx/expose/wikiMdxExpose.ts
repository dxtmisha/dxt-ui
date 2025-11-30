import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import exposeClearEn from './expose.clear.en.mdx'
import exposeClearRu from './expose.clear.ru.mdx'
import exposeDescriptionIdEn from './expose.descriptionId.en.mdx'
import exposeDescriptionIdRu from './expose.descriptionId.ru.mdx'
import exposeDetailEn from './expose.detail.en.mdx'
import exposeDetailRu from './expose.detail.ru.mdx'
import exposeFieldCounterIdEn from './expose.fieldCounterId.en.mdx'
import exposeFieldCounterIdRu from './expose.fieldCounterId.ru.mdx'
import exposeIdEn from './expose.id.en.mdx'
import exposeIdRu from './expose.id.ru.mdx'
import exposeLabelIdEn from './expose.labelId.en.mdx'
import exposeLabelIdRu from './expose.labelId.ru.mdx'
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
    descriptionId: {
      en: exposeDescriptionIdEn,
      ru: exposeDescriptionIdRu
    },
    detail: {
      en: exposeDetailEn,
      ru: exposeDetailRu
    },
    fieldCounterId: {
      en: exposeFieldCounterIdEn,
      ru: exposeFieldCounterIdRu
    },
    id: {
      en: exposeIdEn,
      ru: exposeIdRu
    },
    labelId: {
      en: exposeLabelIdEn,
      ru: exposeLabelIdRu
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
