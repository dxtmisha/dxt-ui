import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonPropsBasic>' },
  { name: 'count', type: 'string | number' },
  { name: 'hideIfOne', type: 'boolean' },
  { name: 'iconArrowDown', type: 'IconValue<IconPropsBasic>' },
  { name: 'iconArrowFirst', type: 'IconValue<IconPropsBasic>' },
  { name: 'iconArrowLast', type: 'IconValue<IconPropsBasic>' },
  { name: 'iconArrowLeft', type: 'IconValue<IconPropsBasic>' },
  { name: 'iconArrowRight', type: 'IconValue<IconPropsBasic>' },
  { name: 'menu', type: 'number[]' },
  { name: 'menuAttrs', type: 'ConstrBind<MenuPropsBasic>' },
  { name: 'rows', type: 'string | number' },
  { name: 'showArrows', type: 'boolean' },
  { name: 'showFirstLast', type: 'boolean' },
  { name: 'showInfo', type: 'boolean' },
  { name: 'showMore', type: 'boolean' },
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
