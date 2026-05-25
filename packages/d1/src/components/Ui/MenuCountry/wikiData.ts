import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'countryList', type: 'string[] | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'isSelectedByValue', type: 'boolean | undefined' },
  { name: 'language', type: 'string | undefined' },
  { name: 'menuAttrs', type: 'ConstrBind<MenuProps> | undefined' },
  { name: 'modelSelected', type: 'ListSelectedList | undefined' },
  { name: 'onUpdate:modelSelected', type: '((value: ListSelectedList) => void) | undefined' },
  { name: 'onUpdate:selected', type: '((value: ListSelectedList) => void) | undefined' },
  { name: 'selected', type: 'ListSelectedList | undefined' },
  { name: 'showPhoneCode', type: 'boolean | undefined' }
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

export const MenuCountryWikiData: WikiDataItem = {
  component: 'MenuCountry',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
