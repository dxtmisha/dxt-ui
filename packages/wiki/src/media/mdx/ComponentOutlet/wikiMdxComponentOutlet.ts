import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import componentOutletEn from './componentOutlet.en.mdx'
import componentOutletRu from './componentOutlet.ru.mdx'
import exposeGetElementEn from './expose.getElement.en.mdx'
import exposeGetElementRu from './expose.getElement.ru.mdx'
import slotAnyEn from './slot.any.en.mdx'
import slotAnyRu from './slot.any.ru.mdx'

/**
 * MDX files for ComponentOutlet component
 *
 * MDX файлы для компонента ComponentOutlet
 */
export const wikiMdxComponentOutlet: StorybookComponentsMdxItem = {
  name: 'ComponentOutlet',
  descriptions: {
    'componentOutlet': {
      en: componentOutletEn,
      ru: componentOutletRu
    },
    'expose.getElement': {
      en: exposeGetElementEn,
      ru: exposeGetElementRu
    },
    'slot.any': {
      en: slotAnyEn,
      ru: slotAnyRu
    }
  }
}
