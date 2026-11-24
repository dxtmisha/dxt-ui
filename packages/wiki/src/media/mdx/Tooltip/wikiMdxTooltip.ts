import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import tooltipEn from './tooltip.en.mdx'
import tooltipRu from './tooltip.ru.mdx'
import eventTooltipEn from './event.tooltip.en.mdx'
import eventTooltipRu from './event.tooltip.ru.mdx'
import exposeToggleEn from './expose.toggle.en.mdx'
import exposeToggleRu from './expose.toggle.ru.mdx'
import slotControlEn from './slot.control.en.mdx'
import slotControlRu from './slot.control.ru.mdx'

/**
 * MDX files for Tooltip component
 *
 * MDX файлы для компонента Tooltip
 */
export const wikiMdxTooltip: StorybookComponentsMdxItem = {
  name: 'Tooltip',
  descriptions: {
    'tooltip': {
      en: tooltipEn,
      ru: tooltipRu
    },
    'event.tooltip': {
      en: eventTooltipEn,
      ru: eventTooltipRu
    },
    'expose.toggle': {
      en: exposeToggleEn,
      ru: exposeToggleRu
    },
    'slot.control': {
      en: slotControlEn,
      ru: slotControlRu
    }
  }
}
