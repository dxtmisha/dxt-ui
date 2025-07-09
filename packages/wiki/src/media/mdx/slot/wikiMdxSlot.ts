import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import slotDefaultEn from './slot.default.en.mdx'
import slotDefaultRu from './slot.default.ru.mdx'

export const wikiMdxSlot: StorybookComponentsMdxItem = {
  name: 'Slot',
  descriptions: {
    default: {
      en: slotDefaultEn,
      ru: slotDefaultRu
    }
  }
}
