import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'area', type: 'string' },
  { name: 'caption', type: 'string | number' },
  { name: 'captionDecorative', type: 'boolean' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'headerAttrs', type: 'ConstrBind<HeaderProps>' },
  { name: 'headline', type: 'string' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'selected', type: 'boolean' },
  { name: 'tag', type: 'string' },
  { name: 'tagHeader', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'caption', description: `Caption slot/ Слот заголовка`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'default', description: `Default slot/ Слот по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'description', description: `Description slot/ Слот описания`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'headline', description: `Slot for headline/ Слот для заголовка`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'label', description: `Label slot content/ Содержимое слота метки`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'trailing', description: `Slot for trailing content/ Слот для правого контента`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const GroupWikiData: WikiDataItem = {
  component: 'Group',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
