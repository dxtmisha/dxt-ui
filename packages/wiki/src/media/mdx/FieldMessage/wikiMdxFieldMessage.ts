import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import fieldMessageEn from './fieldMessage.en.mdx'
import fieldMessageRu from './fieldMessage.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

/**
 * MDX files for FieldMessage component
 *
 * MDX файлы для компонента FieldMessage
 */
export const wikiMdxFieldMessage: StorybookComponentsMdxItem = {
  name: 'FieldMessage',
  descriptions: {
    fieldMessage: {
      en: fieldMessageEn,
      ru: fieldMessageRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
