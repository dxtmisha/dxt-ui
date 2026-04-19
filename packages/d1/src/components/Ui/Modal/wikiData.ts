import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'actionsAttrs', type: 'ConstrBind<ActionsProps> | undefined' },
  { name: 'actionsHide', type: 'boolean | undefined' },
  { name: 'actionsList', type: '(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string | undefined; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined' },
  { name: 'actionsSecondary', type: '(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string | undefined; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined' },
  { name: 'autoClose', type: 'boolean | undefined' },
  { name: 'barsAttrs', type: 'ConstrBind<BarsProps> | undefined' },
  { name: 'barsBackHide', type: 'boolean | undefined' },
  { name: 'barsDescription', type: 'string | undefined' },
  { name: 'barsHide', type: 'boolean | undefined' },
  { name: 'barsLabel', type: 'string | number | undefined' },
  { name: 'barsList', type: 'ConstrBind<ButtonProps>[] | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'image', type: 'string | ConstrBind<ImageProps> | undefined' },
  { name: 'imagePosition', type: 'string', option: ['top', 'left'] },
  { name: 'open', type: 'boolean | undefined' },
  { name: 'width', type: 'string', option: ['sm', 'md', 'lg', 'xl', 'auto'] },
  { name: 'windowAttrs', type: 'ConstrBind<WindowProps> | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'control', description: `Control slot for window management/
Слот управления для управления окном`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] },
  { name: 'default', description: `Default slot for main content/
Основной слот для главного содержимого`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] },
  { name: 'footer', description: `Footer slot for window bottom/
Слот подвала для низа окна`, properties: [{ name: 'props', type: '(WindowControlItem) | undefined' }] },
  { name: 'header', description: `Slot for the modal header/ Слот для заголовка модального окна`, properties: [{ name: 'props', type: 'WindowControlItem' }] },
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
  { name: 'window', description: `Window event triggered on state change/ Событие окна при изменении состояния`, properties: [{ name: 'options', type: 'WindowEmitOptions' }] }
  // :eventsList [!] System label / Системная метка
]

export const ModalWikiData: WikiDataItem = {
  component: 'Modal',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
