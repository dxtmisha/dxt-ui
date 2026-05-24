import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import menuChipEn from './menuChip.en.mdx'
import menuChipRu from './menuChip.ru.mdx'

/**
 * MDX files for MenuChip component
 *
 * MDX файлы для компонента MenuChip
 */
export const wikiMdxMenuChip: StorybookComponentsMdxItem = {
  name: 'MenuChip',
  descriptions: {
    menuChip: {
      en: menuChipEn,
      ru: menuChipRu
    }
  }
}
