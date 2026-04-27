import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import areaEn from './area.en.mdx'
import areaRu from './area.ru.mdx'
import slotEn from './slot.en.mdx'
import slotRu from './slot.ru.mdx'

/**
 * MDX files for Area component
 *
 * MDX файлы для компонента Area
 */
export const wikiMdxArea: StorybookComponentsMdxItem = {
  name: 'Area',
  descriptions: {
    area: {
      en: areaEn,
      ru: areaRu
    },
    slot: {
      en: slotEn,
      ru: slotRu
    }
  }
}
