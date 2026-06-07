import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'string', option: ['lineAlways', 'lineSm', 'lineMd', 'lineLg', 'lineXl', 'line2xl'] },
  { name: 'adaptiveMore', type: 'string', option: ['lineAlways', 'lineSm', 'lineMd', 'lineLg', 'lineXl', 'line2xl'] },
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonProps>' },
  { name: 'buttonMenuAttrs', type: 'ConstrBind<ButtonProps>' },
  { name: 'buttonMoreAttrs', type: 'ConstrBind<ButtonProps>' },
  { name: 'count', type: 'string | number' },
  { name: 'ellipsis', type: 'string' },
  { name: 'ends', type: 'number' },
  { name: 'hideIfOne', type: 'boolean' },
  { name: 'iconArrowDown', type: 'IconValue<IconProps>' },
  { name: 'iconArrowFirst', type: 'IconValue<IconProps>' },
  { name: 'iconArrowLast', type: 'IconValue<IconProps>' },
  { name: 'iconArrowLeft', type: 'IconValue<IconProps>' },
  { name: 'iconArrowRight', type: 'IconValue<IconProps>' },
  { name: 'menuAttrs', type: 'ConstrBind<MenuProps>' },
  { name: 'menuRows', type: 'number[]' },
  { name: 'rows', type: 'string | number' },
  { name: 'showArrows', type: 'boolean' },
  { name: 'showEnds', type: 'boolean' },
  { name: 'showFirstLast', type: 'boolean' },
  { name: 'showInfo', type: 'boolean' },
  { name: 'showMore', type: 'boolean' },
  { name: 'showPagination', type: 'boolean' },
  { name: 'showRowsPerPageLabel', type: 'boolean' },
  { name: 'textFirst', type: 'TextValue' },
  { name: 'textInfo', type: 'TextValue' },
  { name: 'textLast', type: 'TextValue' },
  { name: 'textMore', type: 'TextValue' },
  { name: 'textNext', type: 'TextValue' },
  { name: 'textPrevious', type: 'TextValue' },
  { name: 'textRowsPerPage', type: 'TextValue' },
  { name: 'value', type: 'string | number' },
  { name: 'visible', type: 'number' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const PaginationWikiData: WikiDataItem = {
  component: 'Pagination',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
