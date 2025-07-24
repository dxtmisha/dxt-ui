import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import clickEn from './click.en.mdx'
import clickRu from './click.ru.mdx'
import clickLiteEn from './clickLite.en.mdx'
import clickLiteRu from './clickLite.ru.mdx'

export const wikiMdxEvent: StorybookComponentsMdxItem = {
  name: 'Event',
  descriptions: {
    click: {
      en: clickEn,
      ru: clickRu
    },
    clickLite: {
      en: clickLiteEn,
      ru: clickLiteRu
    }
  }
}
