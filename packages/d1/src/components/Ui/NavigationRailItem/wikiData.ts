import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'badge', type: 'string | number | ConstrBind<BadgeProps>' },
  { name: 'badgeAttrs', type: 'ConstrBind<BadgeProps>' },
  { name: 'badgeDot', type: 'boolean' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'divider', type: 'boolean' },
  { name: 'focus', type: 'boolean' },
  { name: 'href', type: 'string' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'index', type: 'any' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'listId', type: 'number' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressProps>' },
  { name: 'open', type: 'boolean' },
  { name: 'palette', type: 'string', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'parent', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'role', type: 'string' },
  { name: 'selected', type: 'boolean' },
  { name: 'selectedChild', type: 'boolean' },
  { name: 'selectionStyle', type: 'string', option: ['checkbox', 'none', 'radio', 'checkmark'] },
  { name: 'tabindex', type: 'string | number' },
  { name: 'tag', type: 'string', option: ['button', 'a', 'span', 'li', 'div'] },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'type', type: 'string' },
  { name: 'value', type: 'EventClickValue[\'value\']' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'body', description: `Slot for the list item body/ Слот для содержимого элемента списка`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'leading', description: `Slot for the leading element/ Слот для ведущего элемента`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] }
  // :eventsList [!] System label / Системная метка
]

export const NavigationRailItemWikiData: WikiDataItem = {
  component: 'NavigationRailItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
