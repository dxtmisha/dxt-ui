import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import fieldEn from './field.en.mdx'
import fieldRu from './field.ru.mdx'
import cancelEn from './cancel.en.mdx'
import cancelRu from './cancel.ru.mdx'
import arrowsEn from './arrows.en.mdx'
import arrowsRu from './arrows.ru.mdx'
import slotDefaultEn from './slot.default.en.mdx'
import slotDefaultRu from './slot.default.ru.mdx'
import slotLeadingEn from './slot.leading.en.mdx'
import slotLeadingRu from './slot.leading.ru.mdx'
import slotTrailingEn from './slot.trailing.en.mdx'
import slotTrailingRu from './slot.trailing.ru.mdx'
import valueEn from './value.en.mdx'
import valueRu from './value.ru.mdx'
import widthEn from './width.en.mdx'
import widthRu from './width.ru.mdx'

/**
 * MDX files for Field component
 *
 * MDX файлы для компонента Field
 */
export const wikiMdxField: StorybookComponentsMdxItem = {
  name: 'Field',
  descriptions: {
    'field': {
      en: fieldEn,
      ru: fieldRu
    },
    'cancel': {
      en: cancelEn,
      ru: cancelRu
    },
    'arrows': {
      en: arrowsEn,
      ru: arrowsRu
    },
    'slot.default': {
      en: slotDefaultEn,
      ru: slotDefaultRu
    },
    'slot.leading': {
      en: slotLeadingEn,
      ru: slotLeadingRu
    },
    'slot.trailing': {
      en: slotTrailingEn,
      ru: slotTrailingRu
    },
    'value': {
      en: valueEn,
      ru: valueRu
    },
    'width': {
      en: widthEn,
      ru: widthRu
    }
  }
}
