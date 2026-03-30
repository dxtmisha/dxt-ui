import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'action', type: 'boolean' },
  { name: 'actionBars', type: 'ConstrBind<ButtonPropsBasic>[]' },
  { name: 'actionDescription', type: 'string | number' },
  { name: 'actionLabel', type: 'NumberOrString' },
  { name: 'backActionHide', type: 'boolean' },
  { name: 'backButton', type: 'ConstrBind<ButtonPropsBasic>' },
  { name: 'backHide', type: 'boolean' },
  { name: 'bars', type: 'ConstrBind<ButtonPropsBasic>[]' },
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonPropsBasic>' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'iconBack', type: 'IconValue<Icon>' },
  { name: 'iconClose', type: 'IconValue<Icon>' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'modelAction', type: 'boolean' },
  { name: 'onUpdate:action', type: '(value: boolean) => void' },
  { name: 'onUpdate:modelAction', type: '(value: boolean) => void' },
  { name: 'padding', type: 'string', option: ['sm', 'md', 'lg', 'ySm', 'yMd', 'yLg', 'none'] },
  { name: 'paddingByIndent', type: 'boolean' },
  { name: 'textClose', type: 'TextValue' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'actionBars' },
  { name: 'bars' },
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию` },
  { name: 'description', description: `Description slot/ Слот описания` }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'update:action', properties: [{ name: 'value', type: 'boolean' }] },
  { name: 'update:modelAction', properties: [{ name: 'value', type: 'boolean' }] }
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
