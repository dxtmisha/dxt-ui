import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import chipGroupEn from './chipGroup.en.mdx'
import chipGroupRu from './chipGroup.ru.mdx'
import selectedEn from './selected.en.mdx'
import selectedRu from './selected.ru.mdx'

/**
 * MDX files for ChipGroup component
 *
 * MDX файлы для компонента ChipGroup
 */
export const wikiMdxChipGroup: StorybookComponentsMdxItem = {
  name: 'ChipGroup',
  descriptions: {
    chipGroup: {
      en: chipGroupEn,
      ru: chipGroupRu
    },
    selected: {
      en: selectedEn,
      ru: selectedRu
    }
  }
}
