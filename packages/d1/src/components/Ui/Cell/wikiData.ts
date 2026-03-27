import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'caption', type: 'string | number' },
  { name: 'captionDecorative', type: 'boolean' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'divider', type: 'boolean' },
  { name: 'dividerLabel', type: 'string', option: ['always', 'none', 'adaptiveSm', 'adaptiveMd', 'adaptiveLg', 'adaptiveXl', 'adaptive2xl', 'containerSm', 'containerMd', 'containerLg', 'containerXl', 'container2xl'] },
  { name: 'dynamic', type: 'boolean' },
  { name: 'dynamicHover', type: 'boolean' },
  { name: 'focus', type: 'boolean' },
  { name: 'href', type: 'string' },
  { name: 'icon', type: 'IconValue<Icon>' },
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
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'loading', type: 'boolean | ConstrBind<Progress>' },
  { name: 'padding', type: 'string', option: ['none', 'sm', 'md', 'lg', 'ySm', 'yMd', 'yLg'] },
  { name: 'paddingByIndent', type: 'boolean' },
  { name: 'readonly', type: 'boolean' },
  { name: 'role', type: 'string' },
  { name: 'selected', type: 'boolean' },
  { name: 'tag', type: 'string' },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'value', type: 'EventClickValue[\'value\']' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'body', properties: [{ name: 'props', type: 'CellClassesSub' }] },
  { name: 'caption', description: `Caption slot/ Слот заголовка` },
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию` },
  { name: 'description', description: `Description slot/ Слот описания` },
  { name: 'trailing', properties: [{ name: 'props', type: 'CellClassesSub' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: ' value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] }
  // :eventsList [!] System label / Системная метка
]

export const CellWikiData: WikiDataItem = {
  component: 'Cell',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
