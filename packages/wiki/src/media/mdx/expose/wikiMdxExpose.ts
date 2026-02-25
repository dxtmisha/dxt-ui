import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import exposeCheckValidityEn from './expose.checkValidity.en.mdx'
import exposeCheckValidityRu from './expose.checkValidity.ru.mdx'
import exposeClearEn from './expose.clear.en.mdx'
import exposeClearRu from './expose.clear.ru.mdx'
import exposeDescriptionIdEn from './expose.descriptionId.en.mdx'
import exposeDescriptionIdRu from './expose.descriptionId.ru.mdx'
import exposeDetailEn from './expose.detail.en.mdx'
import exposeDetailRu from './expose.detail.ru.mdx'
import exposeIdEn from './expose.id.en.mdx'
import exposeIdRu from './expose.id.ru.mdx'
import exposeLabelIdEn from './expose.labelId.en.mdx'
import exposeLabelIdRu from './expose.labelId.ru.mdx'
import exposeOpenEn from './expose.open.en.mdx'
import exposeOpenRu from './expose.open.ru.mdx'
import exposeSelectedEn from './expose.selected.en.mdx'
import exposeSelectedRu from './expose.selected.ru.mdx'
import exposeValidationMessageEn from './expose.validationMessage.en.mdx'
import exposeValidationMessageRu from './expose.validationMessage.ru.mdx'
import exposeValueEn from './expose.value.en.mdx'
import exposeValueRu from './expose.value.ru.mdx'

export const wikiMdxExpose: StorybookComponentsMdxItem = {
  name: 'Expose',
  descriptions: {
    checkValidity: {
      en: exposeCheckValidityEn,
      ru: exposeCheckValidityRu
    },
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
    validationMessage: {
      en: exposeValidationMessageEn,
      ru: exposeValidationMessageRu
    },
    value: {
      en: exposeValueEn,
      ru: exposeValueRu
    }
  }
}
