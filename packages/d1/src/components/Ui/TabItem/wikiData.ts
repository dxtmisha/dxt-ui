import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'string | undefined', option: ['iconAlways', 'auto', 'iconSm', 'iconMd', 'iconLg', 'iconXl', 'icon2xl', 'fullSm', 'fullMd', 'fullLg', 'fullXl', 'full2xl'] },
  { name: 'badge', type: 'string | number | ConstrBind<BadgeProps> | undefined' },
  { name: 'badgeDot', type: 'boolean | undefined' },
  { name: 'container', type: 'string | undefined', option: ['iconSm', 'iconMd', 'iconLg', 'iconXl', 'icon2xl', 'fullSm', 'fullMd', 'fullLg', 'fullXl', 'full2xl'] },
  { name: 'detail', type: 'Record<string, any> | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'focus', type: 'boolean | undefined' },
  { name: 'href', type: 'string | undefined' },
  { name: 'icon', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps> | undefined' },
  { name: 'iconDir', type: 'boolean | undefined' },
  { name: 'iconHide', type: 'boolean | undefined' },
  { name: 'iconPalette', type: 'boolean | undefined' },
  { name: 'iconTurn', type: 'boolean | undefined' },
  { name: 'index', type: 'any' },
  { name: 'isSkeleton', type: 'boolean | undefined' },
  { name: 'label', type: 'NumberOrString | undefined' },
  { name: 'labelId', type: 'string | undefined' },
  { name: 'open', type: 'boolean | undefined' },
  { name: 'readonly', type: 'boolean | undefined' },
  { name: 'role', type: 'string | undefined' },
  { name: 'selected', type: 'boolean | undefined' },
  { name: 'tag', type: 'string | undefined', option: ['button', 'a', 'span', 'li', 'div'] },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined' },
  { name: 'value', type: 'EventClickValue[\'value\']' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] }
  // :eventsList [!] System label / Системная метка
]

export const TabItemWikiData: WikiDataItem = {
  component: 'TabItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
