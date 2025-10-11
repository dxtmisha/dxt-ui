import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import accordionEn from './accordion.en.mdx'
import accordionRu from './accordion.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

/**
 * MDX files for Accordion component
 *
 * MDX файлы для компонента Accordion
 */
export const wikiMdxAccordion: StorybookComponentsMdxItem = {
  name: 'Accordion',
  descriptions: {
    accordion: {
      en: accordionEn,
      ru: accordionRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
