import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'action', type: 'boolean | undefined' },
  { name: 'actionBars', type: 'ConstrBind<ButtonProps>[] | undefined' },
  { name: 'actionDescription', type: 'string | number | undefined' },
  { name: 'actionLabel', type: 'NumberOrString | undefined' },
  { name: 'backActionHide', type: 'boolean | undefined' },
  { name: 'backButton', type: 'ConstrBind<ButtonProps> | undefined' },
  { name: 'backHide', type: 'boolean | undefined' },
  { name: 'bars', type: 'ConstrBind<ButtonProps>[] | undefined' },
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonProps> | undefined' },
  { name: 'description', type: 'string | number | undefined' },
  { name: 'descriptionId', type: 'string | undefined' },
  { name: 'iconBack', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconClose', type: 'IconValue<IconProps> | undefined' },
  { name: 'isSkeleton', type: 'boolean | undefined' },
  { name: 'label', type: 'NumberOrString | undefined' },
  { name: 'labelId', type: 'string | undefined' },
  { name: 'modelAction', type: 'boolean | undefined' },
  { name: 'onUpdate:action', type: '((value: boolean) => void) | undefined' },
  { name: 'onUpdate:modelAction', type: '((value: boolean) => void) | undefined' },
  { name: 'padding', type: 'string | undefined', option: ['sm', 'md', 'lg', 'ySm', 'yMd', 'yLg', 'none'] },
  { name: 'paddingByIndent', type: 'boolean | undefined' },
  { name: 'textClose', type: 'TextValue' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'actionBars', description: `Slot for displaying a list of buttons in action mode/ Слот для отображения списка кнопок в режиме действия`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'bars', description: `Slot for displaying a list of buttons/ Слот для отображения списка кнопок`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'description', description: `Description slot/ Слот описания`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'update:action', description: `Event for updating the action mode status/ Событие обновления статуса режима действия`, properties: [{ name: 'value', type: 'boolean' }] },
  { name: 'update:modelAction', description: `Event for updating the action mode model status/ Событие обновления статуса модели режима действия`, properties: [{ name: 'value', type: 'boolean' }] }
  // :eventsList [!] System label / Системная метка
]

export const BarsWikiData: WikiDataItem = {
  component: 'Bars',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
