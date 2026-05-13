import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'ajax', type: 'string | (() => NormalOrPromise<ListRecord<ListItemProps>>) | undefined' },
  { name: 'autoClose', type: 'boolean | undefined' },
  { name: 'barsAdaptive', type: 'string', option: ['showAlways', 'showSm', 'showMd', 'showLg', 'showXl', 'show2xl'] },
  { name: 'barsAttrs', type: 'ConstrBind<BarsProps> | undefined' },
  { name: 'barsBackHide', type: 'boolean | undefined' },
  { name: 'barsDescription', type: 'string | undefined' },
  { name: 'barsHide', type: 'boolean | undefined' },
  { name: 'barsLabel', type: 'string | number | undefined' },
  { name: 'barsList', type: 'ConstrBind<ButtonProps>[] | undefined' },
  { name: 'cache', type: 'boolean | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'embedded', type: 'boolean | undefined' },
  { name: 'filterMode', type: 'boolean | undefined' },
  { name: 'hideList', type: 'boolean | undefined' },
  { name: 'highlight', type: 'string | undefined' },
  { name: 'highlightLengthStart', type: 'number | undefined' },
  { name: 'isSelectedByValue', type: 'boolean | undefined' },
  { name: 'itemAttrs', type: 'ConstrBind<ListItemProps> | undefined' },
  { name: 'keyLabel', type: 'string | undefined' },
  { name: 'keyValue', type: 'string | undefined' },
  { name: 'list', type: 'ListRecord<ListItemProps> | undefined' },
  { name: 'listAttrs', type: 'ConstrBind<ListProps> | undefined' },
  { name: 'liteThreshold', type: 'number | undefined' },
  { name: 'max', type: 'string | number | undefined' },
  { name: 'modelSelected', type: 'string | undefined' },
  { name: 'onUpdate:modelSelected', type: '((value: string) => void) | undefined' },
  { name: 'onUpdate:selected', type: '((value: string) => void) | undefined' },
  { name: 'request', type: 'ApiFetch | undefined' },
  { name: 'roleItem', type: 'string | undefined' },
  { name: 'roleList', type: 'string | undefined' },
  { name: 'selected', type: 'ListSelectedList | undefined' },
  { name: 'step', type: 'string | number | undefined' },
  { name: 'tag', type: 'string | undefined' },
  { name: 'windowAttrs', type: 'ConstrBind<WindowProps> | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'contextBottom', description: `Context slot for bottom area / Слот контекстной области снизу`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] },
  { name: 'contextTop', description: `Context slot for top area / Слот контекстной области сверху`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] },
  { name: 'control', description: `Control slot for window management / Слот управления для управления окном`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] },
  { name: 'footer', description: `Footer slot for window bottom/ Слот подвала для низа окна`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] },
  { name: 'title', description: `Title slot for window title/ Слот заголовка для заголовка окна`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'bars', description: `Click event for bars/ Событие клика для панелей`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'barsBack', description: `Back button click event for bars/ Событие клика кнопки назад для панелей`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'barsLite', description: `Simple click event for bars/ Простое событие клика для панелей`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'clickSlot', description: `Event for clicking on a slot/ Событие клика по слоту`, properties: [{ name: 'value?', type: 'string | undefined' }] },
  { name: 'update:modelSelected', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'string' }] },
  { name: 'update:selected', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'string' }] },
  { name: 'updateValue', description: `Event for updating the value/ Событие обновления значения`, properties: [{ name: 'value?', type: 'NumberOrStringOrBoolean | undefined' }] },
  { name: 'window', description: `Window event triggered on state change/ Событие окна при изменении состояния`, properties: [{ name: 'options', type: 'WindowEmitOptions' }] }
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
