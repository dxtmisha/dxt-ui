import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'caption', type: 'string | number | undefined' },
  { name: 'captionDecorative', type: 'boolean | undefined' },
  { name: 'description', type: 'string | number | undefined' },
  { name: 'descriptionId', type: 'string | undefined' },
  { name: 'detail', type: 'Record<string, any> | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'divider', type: 'boolean | undefined' },
  { name: 'dividerLabel', type: 'string | undefined', option: ['always', 'none', 'adaptiveSm', 'adaptiveMd', 'adaptiveLg', 'adaptiveXl', 'adaptive2xl', 'containerSm', 'containerMd', 'containerLg', 'containerXl', 'container2xl'] },
  { name: 'dynamic', type: 'boolean | undefined' },
  { name: 'dynamicHover', type: 'boolean | undefined' },
  { name: 'focus', type: 'boolean | undefined' },
  { name: 'href', type: 'string | undefined' },
  { name: 'icon', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps> | undefined' },
  { name: 'iconDir', type: 'boolean | undefined' },
  { name: 'iconHide', type: 'boolean | undefined' },
  { name: 'iconPalette', type: 'boolean | undefined' },
  { name: 'iconTop', type: 'boolean | undefined' },
  { name: 'iconTrailing', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconTrailingDirOnly', type: 'boolean | undefined' },
  { name: 'iconTrailingPalette', type: 'boolean | undefined' },
  { name: 'iconTrailingTurnOnly', type: 'boolean | undefined' },
  { name: 'iconTurn', type: 'boolean | undefined' },
  { name: 'isSkeleton', type: 'boolean | undefined' },
  { name: 'label', type: 'NumberOrString | undefined' },
  { name: 'labelId', type: 'string | undefined' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressProps> | undefined' },
  { name: 'padding', type: 'string | undefined', option: ['sm', 'md', 'lg', 'ySm', 'yMd', 'yLg', 'none'] },
  { name: 'paddingByIndent', type: 'boolean | undefined' },
  { name: 'readonly', type: 'boolean | undefined' },
  { name: 'role', type: 'string | undefined' },
  { name: 'selected', type: 'boolean | undefined' },
  { name: 'tag', type: 'string | undefined' },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined' },
  { name: 'value', type: 'EventClickValue[\'value\']' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'body', description: `Slot for displaying the main body content of the cell/ Слот для отображения основного содержимого тела ячейки`, properties: [{ name: 'props', type: '(CellClassesSub) | undefined' }] },
  { name: 'caption', description: `Caption slot/ Слот заголовка`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'description', description: `Description slot/ Слот описания`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'trailing', description: `Slot for displaying additional content on the right side of the cell/ Слот для отображения дополнительного контента в правой части ячейки`, properties: [{ name: 'props', type: '(CellClassesSub) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
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
