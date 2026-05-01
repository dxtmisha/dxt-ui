import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'autoClose', type: 'boolean | undefined' },
  { name: 'axis', type: 'string | undefined', option: ['x', 'y'] },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'divider', type: 'boolean | undefined' },
  { name: 'open', type: 'boolean | undefined' },
  { name: 'windowAttrs', type: 'ConstrBind<WindowProps> | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'head', description: `Slot for the menu header/ Слот для заголовка меню`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] },
  { name: 'list', description: `Slot for the menu list content/ Слот для содержимого списка меню`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'window', description: `Window event triggered on state change/ Событие окна при изменении состояния`, properties: [{ name: 'options', type: 'WindowEmitOptions' }] }
  // :eventsList [!] System label / Системная метка
]

export const ListMenuWikiData: WikiDataItem = {
  component: 'ListMenu',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
