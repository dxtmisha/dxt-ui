import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import fieldMessageEn from './fieldMessage.en.mdx'
import fieldMessageRu from './fieldMessage.ru.mdx'
import slotHelperEn from './slot.helper.en.mdx'
import slotHelperRu from './slot.helper.ru.mdx'
import slotValidationEn from './slot.validation.en.mdx'
import slotValidationRu from './slot.validation.ru.mdx'

/**
 * MDX files for FieldMessage component
 *
 * MDX файлы для компонента FieldMessage
 */
export const wikiMdxFieldMessage: StorybookComponentsMdxItem = {
  name: 'FieldMessage',
  descriptions: {
    'fieldMessage': {
      en: fieldMessageEn,
      ru: fieldMessageRu
    },
    'slot.helper': {
      en: slotHelperEn,
      ru: slotHelperRu
    },
    'slot.validation': {
      en: slotValidationEn,
      ru: slotValidationRu
    }
  }
}
