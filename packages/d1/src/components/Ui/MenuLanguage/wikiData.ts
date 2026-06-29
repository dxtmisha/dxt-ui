import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'disabled', type: 'boolean' },
  { name: 'isSelectedByValue', type: 'boolean' },
  { name: 'language', type: 'string' },
  { name: 'list', type: 'string[]' },
  { name: 'menuAttrs', type: 'ConstrBind<MenuProps>' },
  { name: 'modelSelected', type: 'ListSelectedList' },
  { name: 'onUpdate:modelSelected', type: '((value: ListSelectedList) => void)' },
  { name: 'onUpdate:selected', type: '((value: ListSelectedList) => void)' },
  { name: 'selected', type: 'ListSelectedList' },
  { name: 'showPhoneCode', type: 'boolean' }
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

export const MenuLanguageWikiData: WikiDataItem = {
  component: 'MenuLanguage',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
