import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import slotCaptionEn from './caption.en.mdx'
import slotCaptionRu from './caption.ru.mdx'
import slotControlEn from './control.en.mdx'
import slotControlRu from './control.ru.mdx'
import slotDefaultEn from './default.en.mdx'
import slotDefaultRu from './default.ru.mdx'
import slotDescriptionEn from './description.en.mdx'
import slotDescriptionRu from './description.ru.mdx'
import slotFooterEn from './footer.en.mdx'
import slotFooterRu from './footer.ru.mdx'
import slotLabelEn from './label.en.mdx'
import slotLabelRu from './label.ru.mdx'
import slotPrefixEn from './prefix.en.mdx'
import slotPrefixRu from './prefix.ru.mdx'
import slotSuffixEn from './suffix.en.mdx'
import slotSuffixRu from './suffix.ru.mdx'

export const wikiMdxSlot: StorybookComponentsMdxItem = {
  name: 'Slot',
  descriptions: {
    caption: {
      en: slotCaptionEn,
      ru: slotCaptionRu
    },
    control: {
      en: slotControlEn,
      ru: slotControlRu
    },
    default: {
      en: slotDefaultEn,
      ru: slotDefaultRu
    },
    description: {
      en: slotDescriptionEn,
      ru: slotDescriptionRu
    },
    footer: {
      en: slotFooterEn,
      ru: slotFooterRu
    },
    label: {
      en: slotLabelEn,
      ru: slotLabelRu
    },
    prefix: {
      en: slotPrefixEn,
      ru: slotPrefixRu
    },
    suffix: {
      en: slotSuffixEn,
      ru: slotSuffixRu
    }
  }
}
