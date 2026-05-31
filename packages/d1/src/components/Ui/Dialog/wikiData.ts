import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'actionsAttrs', type: 'ConstrBind<ActionsProps>' },
  { name: 'actionsHide', type: 'boolean' },
  { name: 'actionsList', type: '(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined' },
  { name: 'actionsSecondary', type: '(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined' },
  { name: 'autoClose', type: 'boolean' },
  { name: 'barsAttrs', type: 'ConstrBind<BarsProps>' },
  { name: 'barsBackHide', type: 'boolean' },
  { name: 'barsDescription', type: 'string' },
  { name: 'barsHide', type: 'boolean' },
  { name: 'barsLabel', type: 'string | number' },
  { name: 'barsList', type: 'ConstrBind<ButtonProps>[]' },
  { name: 'buttonClose', type: 'string | ConstrBind<ButtonProps> | null' },
  { name: 'buttonOk', type: 'string | ConstrBind<ButtonProps> | null' },
  { name: 'clickOkAndClose', type: 'boolean' },
  { name: 'closeButton', type: 'boolean' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'disabled', type: 'boolean' },
  { name: 'error', type: 'boolean' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps>' },
  { name: 'iconError', type: 'IconValue<IconProps>' },
  { name: 'iconSuccess', type: 'IconValue<IconProps>' },
  { name: 'image', type: 'string | ConstrBind<ImageProps>' },
  { name: 'imageAttrs', type: 'ConstrBind<ImageProps>' },
  { name: 'imagePosition', type: 'string', option: ['top', 'left', 'adaptiveSm', 'adaptiveMd', 'adaptiveLg', 'adaptiveXl', 'adaptive2xl'] },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'open', type: 'boolean' },
  { name: 'success', type: 'boolean' },
  { name: 'textClose', type: 'TextValue' },
  { name: 'textOk', type: 'TextValue' },
  { name: 'width', type: 'string', option: ['sm', 'md', 'lg', 'auto'] },
  { name: 'windowAttrs', type: 'ConstrBind<WindowProps>' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'control', description: `Control slot for window management/
Слот управления для управления окном`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] },
  { name: 'default', description: `Default slot for main content/
Основной слот для главного содержимого`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] },
  { name: 'description', description: `Description slot/ Слот описания`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'footer', description: `Footer slot for window bottom/
Слот подвала для низа окна`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] },
  { name: 'header', description: `Slot for the modal header/ Слот для заголовка модального окна`, properties: [{ name: 'props', type: 'WindowControlItem' }] },
  { name: 'label', description: `Label slot content/ Содержимое слота метки`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'title', description: `Title slot for window header/
Слот заголовка для шапки окна`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] }
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
