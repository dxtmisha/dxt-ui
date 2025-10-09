import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import fieldEn from './field.en.mdx'
import fieldRu from './field.ru.mdx'
import cancelEn from './cancel.en.mdx'
import cancelRu from './cancel.ru.mdx'
import arrowsEn from './arrows.en.mdx'
import arrowsRu from './arrows.ru.mdx'
import valueEn from './value.en.mdx'
import valueRu from './value.ru.mdx'
import widthEn from './width.en.mdx'
import widthRu from './width.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

/**
 * MDX files for Field component
 *
 * MDX файлы для компонента Field
 */
export const wikiMdxField: StorybookComponentsMdxItem = {
  name: 'Field',
  descriptions: {
    arrows: {
      en: arrowsEn,
      ru: arrowsRu
    },
    cancel: {
      en: cancelEn,
      ru: cancelRu
    },
    field: {
      en: fieldEn,
      ru: fieldRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    },
    value: {
      en: valueEn,
      ru: valueRu
    },
    width: {
      en: widthEn,
      ru: widthRu
    }
  }
}
