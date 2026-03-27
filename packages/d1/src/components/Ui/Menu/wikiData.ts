import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'ajax', type: 'string | (() => NormalOrPromise<ListRecord<any>>)' },
  { name: 'autoClose', type: 'boolean' },
  { name: 'barsAdaptive', type: 'string', option: ['showAlways', 'showSm', 'showMd', 'showLg', 'showXl', 'show2xl'] },
  { name: 'barsAttrs', type: 'ConstrBind<Bars>' },
  { name: 'barsBackHide', type: 'boolean' },
  { name: 'barsDescription', type: 'string' },
  { name: 'barsHide', type: 'boolean' },
  { name: 'barsLabel', type: 'string | number' },
  { name: 'barsList', type: 'Bars[\'bars\']' },
  { name: 'cache', type: 'boolean' },
  { name: 'disabled', type: 'boolean' },
  { name: 'embedded', type: 'boolean' },
  { name: 'filterMode', type: 'boolean' },
  { name: 'hideList', type: 'boolean' },
  { name: 'highlight', type: 'string' },
  { name: 'highlightLengthStart', type: 'number' },
  { name: 'isSelectedByValue', type: 'boolean' },
  { name: 'itemAttrs', type: 'ConstrBind<ListItem>' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'ListRecord<any>' },
  { name: 'listAttrs', type: 'ConstrBind<List>' },
  { name: 'liteThreshold', type: 'number' },
  { name: 'max', type: 'string | number' },
  { name: 'modelSelected', type: 'string' },
  { name: 'onUpdate:modelSelected', type: '(value: string) => void' },
  { name: 'onUpdate:selected', type: '(value: string) => void' },
  { name: 'request', type: 'ApiFetch' },
  { name: 'roleItem', type: 'string' },
  { name: 'roleList', type: 'string' },
  { name: 'selected', type: 'ListSelectedList' },
  { name: 'step', type: 'string | number' },
  { name: 'tag', type: 'string' },
  { name: 'windowAttrs', type: 'ConstrBind<Window>' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'contextBottom', description: `Context slot for bottom area / Слот контекстной области снизу`, properties: [{ name: 'props', type: 'MenuControlItem' }] },
  { name: 'contextTop', description: `Context slot for top area / Слот контекстной области сверху`, properties: [{ name: 'props', type: 'MenuControlItem' }] },
  { name: 'control', description: `Control slot for window management / Слот управления для управления окном`, properties: [{ name: 'props', type: 'MenuControlItem' }] },
  { name: 'footer', description: `Footer slot for window bottom/ Слот подвала для низа окна`, properties: [{ name: 'props', type: 'MenuControlItem' }] },
  { name: 'title', description: `Title slot for window title/ Слот заголовка для заголовка окна`, properties: [{ name: 'props', type: 'MenuControlItem' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'bars', properties: [{ name: 'event', type: 'MouseEvent' }, { name: ' value', type: 'EventClickValue' }] },
  { name: 'barsBack', properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'barsLite', properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: ' value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'clickSlot', properties: [{ name: 'value?', type: 'string' }] },
  { name: 'update:modelSelected', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'string' }] },
  { name: 'update:selected', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'string' }] },
  { name: 'updateValue', properties: [{ name: 'value?', type: 'NumberOrStringOrBoolean' }] },
  { name: 'window', properties: [{ name: 'options', type: 'WindowEmitOptions' }] }
  // :eventsList [!] System label / Системная метка
]

export const MenuWikiData: WikiDataItem = {
  component: 'Menu',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
