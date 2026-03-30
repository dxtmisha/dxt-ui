import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'actionsAttrs', type: 'ConstrBind<Actions>' },
  { name: 'actionsHide', type: 'boolean' },
  { name: 'actionsList', type: 'ConstrBind<Actions[\'list\']>' },
  { name: 'actionsSecondary', type: 'ConstrBind<Actions[\'listSecondary\']>' },
  { name: 'autoClose', type: 'boolean' },
  { name: 'barsAttrs', type: 'ConstrBind<Bars>' },
  { name: 'barsBackHide', type: 'boolean' },
  { name: 'barsDescription', type: 'string' },
  { name: 'barsHide', type: 'boolean' },
  { name: 'barsLabel', type: 'string | number' },
  { name: 'barsList', type: 'Bars[\'bars\']' },
  { name: 'disabled', type: 'boolean' },
  { name: 'open', type: 'boolean' },
  { name: 'touchClose', type: 'boolean' },
  { name: 'width', type: 'string', option: ['sm', 'md', 'lg', 'auto'] },
  { name: 'windowAttrs', type: 'ConstrBind<Window>' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'control', description: `Control slot for window management/
Слот управления для управления окном`, properties: [{ name: 'props', type: 'WindowControlItem' }] },
  { name: 'default', description: `Default slot for main content/
Основной слот для главного содержимого`, properties: [{ name: 'props', type: 'WindowControlItem' }] },
  { name: 'footer', description: `Footer slot for window bottom/
Слот подвала для низа окна`, properties: [{ name: 'props', type: 'WindowControlItem' }] },
  { name: 'header', properties: [{ name: 'props', type: 'WindowControlItem' }] },
  { name: 'title', description: `Title slot for window header/
Слот заголовка для шапки окна`, properties: [{ name: 'props', type: 'WindowControlItem' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'actions', properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'actionsLite', properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'bars', properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'barsBack', properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'barsLite', properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'window', properties: [{ name: 'options', type: 'WindowEmitOptions' }] }
  // :eventsList [!] System label / Системная метка
]

export const ActionSheetWikiData: WikiDataItem = {
  component: 'ActionSheet',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
