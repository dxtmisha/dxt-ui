import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['none', 'center', 'left', 'right', 'block', 'auto'] },
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonPropsBasic>' },
  { name: 'buttonSecondaryAttrs', type: 'ConstrBind<ButtonPropsBasic>' },
  { name: 'flexible', type: 'string', option: ['adaptiveSm', 'adaptiveMd', 'adaptiveLg', 'adaptiveXl', 'adaptive2xl', 'containerSm', 'containerMd', 'containerLg', 'containerXl', 'container2xl'] },
  { name: 'list', type: 'ConstrBind<ButtonPropsBasic>[]' },
  { name: 'listSecondary', type: 'ConstrBind<ButtonPropsBasic>[]' },
  { name: 'padding', type: 'string', option: ['none', 'sm', 'md', 'lg', 'ySm', 'yMd', 'yLg'] },
  { name: 'paddingByIndent', type: 'boolean' },
  { name: 'wrap', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Slot for the main list of actions/ Слот для основного списка действий` },
  { name: 'secondary', description: `Slot for the secondary list of actions/ Слот для вторичного списка действий` }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] }
  // :eventsList [!] System label / Системная метка
]

export const ActionsWikiData: WikiDataItem = {
  component: 'Actions',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
