import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['left', 'center', 'right'] },
  { name: 'alignVertical', type: 'string', option: ['center', 'top', 'bottom'] },
  { name: 'chipAttrs', type: 'ConstrBind<ChipProps>' },
  { name: 'colspan', type: 'string | number' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'disabled', type: 'boolean' },
  { name: 'dividerX', type: 'boolean' },
  { name: 'dividerY', type: 'boolean' },
  { name: 'iconArrowDown', type: 'string | ConstrBind<IconProps>' },
  { name: 'iconArrowUp', type: 'string | ConstrBind<IconProps>' },
  { name: 'iconSort', type: 'string | ConstrBind<IconProps>' },
  { name: 'iconTooltip', type: 'string | ConstrBind<IconProps>' },
  { name: 'index', type: 'string | number' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'keyItem', type: 'string' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelClamp', type: 'boolean' },
  { name: 'labelId', type: 'string' },
  { name: 'rowspan', type: 'string | number' },
  { name: 'selected', type: 'boolean' },
  { name: 'showSort', type: 'boolean' },
  { name: 'sortColumn', type: 'string | number' },
  { name: 'sortDir', type: 'string', option: ['asc', 'desc'] },
  { name: 'stickyLeft', type: 'boolean' },
  { name: 'stickyTop', type: 'boolean' },
  { name: 'tag', type: 'string' },
  { name: 'tooltipAttrs', type: 'ConstrBind<TooltipProps>' },
  { name: 'tooltipDescription', type: 'string' },
  { name: 'tooltipLabel', type: 'string' },
  { name: 'value', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'context', description: `Slot for custom cell context / Слот для пользовательского контекста ячейки`, properties: [{ name: 'props', type: '(() => any) | undefined' }] },
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'description', description: `Description slot/ Слот описания`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'tooltip', description: `Slot for displaying custom tooltip body / Слот для отображения пользовательского содержимого подсказки`, properties: [{ name: 'props', type: '(() => any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'sort', description: `Event triggered when sort button is clicked / Событие, вызываемое при клике по кнопке сортировки`, properties: [{ name: 'item', type: 'SortColumnItem' }] }
  // :eventsList [!] System label / Системная метка
]

export const TableHeaderItemWikiData: WikiDataItem = {
  component: 'TableHeaderItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
