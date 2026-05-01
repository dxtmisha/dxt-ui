import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string | undefined', option: ['none', 'center', 'left', 'right', 'block', 'auto'] },
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonProps> | undefined' },
  { name: 'buttonSecondaryAttrs', type: 'ConstrBind<ButtonProps> | undefined' },
  { name: 'flexible', type: 'string | undefined', option: ['adaptiveSm', 'adaptiveMd', 'adaptiveLg', 'adaptiveXl', 'adaptive2xl', 'containerSm', 'containerMd', 'containerLg', 'containerXl', 'container2xl'] },
  { name: 'list', type: 'ConstrBind<ButtonProps>[] | undefined' },
  { name: 'listSecondary', type: 'ConstrBind<ButtonProps>[] | undefined' },
  { name: 'padding', type: 'string | undefined', option: ['sm', 'md', 'lg', 'ySm', 'yMd', 'yLg', 'none'] },
  { name: 'paddingByIndent', type: 'boolean | undefined' },
  { name: 'wrap', type: 'boolean | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Slot for the main list of actions/ Слот для основного списка действий`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'secondary', description: `Slot for the secondary list of actions/ Слот для вторичного списка действий`, properties: [{ name: 'props', type: '(any) | undefined' }] }
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
