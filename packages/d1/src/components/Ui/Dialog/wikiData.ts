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
  { name: 'buttonClose', type: 'string | ConstrBind<Button> | null' },
  { name: 'buttonOk', type: 'string | ConstrBind<Button> | null' },
  { name: 'clickOkAndClose', type: 'boolean' },
  { name: 'closeButton', type: 'boolean' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'disabled', type: 'boolean' },
  { name: 'error', type: 'boolean' },
  { name: 'icon', type: 'IconValue<Icon>' },
  { name: 'iconAttrs', type: 'ConstrBind<Icon>' },
  { name: 'iconError', type: 'IconValue<Icon>' },
  { name: 'iconSuccess', type: 'IconValue<Icon>' },
  { name: 'image', type: 'string | ConstrBind<Image>' },
  { name: 'imagePosition', type: 'string', option: ['top', 'left'] },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'open', type: 'boolean' },
  { name: 'success', type: 'boolean' },
  { name: 'textClose', type: 'TextValue' },
  { name: 'textOk', type: 'TextValue' },
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
  { name: 'description', description: `Description slot/ Слот описания` },
  { name: 'footer', description: `Footer slot for window bottom/
Слот подвала для низа окна`, properties: [{ name: 'props', type: 'WindowControlItem' }] },
  { name: 'header', description: `Slot for the modal header/ Слот для заголовка модального окна`, properties: [{ name: 'props', type: 'WindowControlItem' }] },
  { name: 'label', description: `Label slot content/ Содержимое слота метки` },
  { name: 'title', description: `Title slot for window header/
Слот заголовка для шапки окна`, properties: [{ name: 'props', type: 'WindowControlItem' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'actions', description: `Click event for actions/ Событие клика для действий`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'actionsLite', description: `Simple click event for actions/ Простое событие клика для действий`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'bars', description: `Click event for bars/ Событие клика для панелей`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'barsBack', description: `Back button click event for bars/ Событие клика кнопки назад для панелей`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'barsLite', description: `Simple click event for bars/ Простое событие клика для панелей`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'close', description: `Event for clicking the close button/ Событие клика на кнопку закрытия` },
  { name: 'ok', description: `Event for clicking the OK button/ Событие клика на кнопку подтверждения` },
  { name: 'window', description: `Window event triggered on state change/ Событие окна при изменении состояния`, properties: [{ name: 'options', type: 'WindowEmitOptions' }] }
  // :eventsList [!] System label / Системная метка
]

export const DialogWikiData: WikiDataItem = {
  component: 'Dialog',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
