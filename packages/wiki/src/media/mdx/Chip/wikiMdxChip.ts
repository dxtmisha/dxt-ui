import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import chipEn from './chip.en.mdx'
import chipRu from './chip.ru.mdx'
import assistiveEn from './assistive.en.mdx'
import assistiveRu from './assistive.ru.mdx'
import inputEn from './input.en.mdx'
import inputRu from './input.ru.mdx'

/**
 * MDX files for Chip component
 *
 * MDX файлы для компонента Chip
 */
export const wikiMdxChip: StorybookComponentsMdxItem = {
  name: 'Chip',
  descriptions: {
    chip: {
      en: chipEn,
      ru: chipRu
    },
    assistive: {
      en: assistiveEn,
      ru: assistiveRu
    },
    input: {
      en: inputEn,
      ru: inputRu
    }
  }
}
