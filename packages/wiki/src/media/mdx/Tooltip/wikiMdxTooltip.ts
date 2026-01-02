import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import tooltipEn from './tooltip.en.mdx'
import tooltipRu from './tooltip.ru.mdx'

/**
 * MDX files for Tooltip component
 *
 * MDX файлы для компонента Tooltip
 */
export const wikiMdxTooltip: StorybookComponentsMdxItem = {
  name: 'Tooltip',
  descriptions: {
    tooltip: {
      en: tooltipEn,
      ru: tooltipRu
    }
  }
}
