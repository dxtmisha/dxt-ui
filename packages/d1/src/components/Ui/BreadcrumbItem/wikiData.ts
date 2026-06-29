import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'back', type: 'boolean' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'href', type: 'string' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconArrowLeft', type: 'string' },
  { name: 'iconArrowRight', type: 'string' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'value', type: 'EventClickValue[\'value\']' }
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

export const BreadcrumbItemWikiData: WikiDataItem = {
  component: 'BreadcrumbItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
