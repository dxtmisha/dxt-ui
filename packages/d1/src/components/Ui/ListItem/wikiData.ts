import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'badge', type: 'string | number | ConstrBind<Badge>' },
  { name: 'badgeDot', type: 'boolean' },
  { name: 'caption', type: 'string | number' },
  { name: 'captionDecorative', type: 'boolean' },
  { name: 'dense', type: 'boolean' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'divider', type: 'boolean' },
  { name: 'fill', type: 'string', option: ['custom'] },
  { name: 'filterMode', type: 'boolean' },
  { name: 'focus', type: 'boolean' },
  { name: 'highlight', type: 'string' },
  { name: 'highlightLengthStart', type: 'number' },
  { name: 'href', type: 'string' },
  { name: 'icon', type: 'IconValue<Icon>' },
  { name: 'iconAlign', type: 'string', option: ['center', 'edge'] },
  { name: 'iconAttrs', type: 'ConstrBind<Icon>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTop', type: 'boolean' },
  { name: 'iconTrailing', type: 'IconValue<Icon>' },
  { name: 'iconTrailingDirOnly', type: 'boolean' },
  { name: 'iconTrailingPalette', type: 'boolean' },
  { name: 'iconTrailingTurnOnly', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'index', type: 'any' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'listId', type: 'number' },
  { name: 'loading', type: 'boolean | ConstrBind<Progress>' },
  { name: 'open', type: 'boolean' },
  { name: 'palette', type: 'string', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'parent', type: 'string' },
  { name: 'prefix', type: 'string | number' },
  { name: 'prefixId', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'role', type: 'string' },
  { name: 'search', type: 'string' },
  { name: 'selected', type: 'boolean' },
  { name: 'selectedChild', type: 'boolean' },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg'] },
  { name: 'suffix', type: 'string | number' },
  { name: 'suffixId', type: 'string' },
  { name: 'tabindex', type: 'string | number' },
  { name: 'tag', type: 'string', option: ['button', 'a', 'span', 'li', 'div'] },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'type', type: 'string' },
  { name: 'value', type: 'any' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'body' },
  { name: 'caption', description: `Caption slot/ Слот заголовка` },
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию` },
  { name: 'description', description: `Description slot/ Слот описания` },
  { name: 'leading' },
  { name: 'prefix', description: `Prefix slot/ Слот префикса` },
  { name: 'suffix', description: `Suffix slot/ Слот суффикса` },
  { name: 'trailing' }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: ' value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] }
  // :eventsList [!] System label / Системная метка
]

export const ListItemWikiData: WikiDataItem = {
  component: 'ListItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
