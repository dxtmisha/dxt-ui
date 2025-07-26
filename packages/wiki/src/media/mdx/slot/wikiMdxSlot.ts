import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import slotCaptionEn from './caption.en.mdx'
import slotCaptionRu from './caption.ru.mdx'
import slotDefaultEn from './default.en.mdx'
import slotDefaultRu from './default.ru.mdx'
import slotDescriptionEn from './description.en.mdx'
import slotDescriptionRu from './description.ru.mdx'

export const wikiMdxSlot: StorybookComponentsMdxItem = {
  name: 'Slot',
  descriptions: {
    caption: {
      en: slotCaptionEn,
      ru: slotCaptionRu
    },
    default: {
      en: slotDefaultEn,
      ru: slotDefaultRu
    },
    description: {
      en: slotDescriptionEn,
      ru: slotDescriptionRu
    }
  }
}
