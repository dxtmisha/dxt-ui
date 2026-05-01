import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'ariaLabel', type: 'string | undefined' },
  { name: 'dot', type: 'boolean | undefined' },
  { name: 'formatting', type: 'boolean | undefined' },
  { name: 'hide', type: 'boolean | undefined' },
  { name: 'horizontal', type: 'string | undefined', option: ['right', 'center', 'left'] },
  { name: 'icon', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps> | undefined' },
  { name: 'iconDir', type: 'boolean | undefined' },
  { name: 'iconHide', type: 'boolean | undefined' },
  { name: 'iconPalette', type: 'boolean | undefined' },
  { name: 'iconTurn', type: 'boolean | undefined' },
  { name: 'label', type: 'NumberOrString | undefined' },
  { name: 'labelId', type: 'string | undefined' },
  { name: 'labelMax', type: 'NumberOrString | undefined' },
  { name: 'outline', type: 'boolean | undefined' },
  { name: 'overlap', type: 'string | undefined', option: ['rectangular', 'circular', 'static'] },
  { name: 'palette', type: 'string | undefined', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'primary', type: 'boolean | undefined' },
  { name: 'secondary', type: 'boolean | undefined' },
  { name: 'selected', type: 'boolean | undefined' },
  { name: 'size', type: 'string | undefined', option: ['sm', 'md', 'lg', 'none'] },
  { name: 'vertical', type: 'string | undefined', option: ['top', 'center', 'bottom'] }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const BadgeWikiData: WikiDataItem = {
  component: 'Badge',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
