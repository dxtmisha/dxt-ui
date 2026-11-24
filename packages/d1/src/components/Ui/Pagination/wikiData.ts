import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'string', option: ['lineAlways', 'lineSm', 'lineMd', 'lineLg', 'lineXl', 'line2xl'] },
  { name: 'adaptiveMore', type: 'string', option: ['lineAlways', 'lineSm', 'lineMd', 'lineLg', 'lineXl', 'line2xl'] },
  { name: 'adaptiveMorePrev', type: 'string', option: ['lineAlways', 'lineSm', 'lineMd', 'lineLg', 'lineXl', 'line2xl'] },
  { name: 'area', type: 'string' },
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonProps>' },
  { name: 'buttonMenuAttrs', type: 'ConstrBind<ButtonProps>' },
  { name: 'buttonMoreAttrs', type: 'ConstrBind<ButtonProps>' },
  { name: 'buttonMorePrevAttrs', type: 'ConstrBind<ButtonProps>' },
  { name: 'count', type: 'string | number' },
  { name: 'ellipsis', type: 'string' },
  { name: 'ends', type: 'number' },
  { name: 'hideIfOne', type: 'boolean' },
  { name: 'iconArrowDown', type: 'IconValue<IconProps>' },
  { name: 'iconArrowFirst', type: 'IconValue<IconProps>' },
  { name: 'iconArrowLast', type: 'IconValue<IconProps>' },
  { name: 'iconArrowLeft', type: 'IconValue<IconProps>' },
  { name: 'iconArrowRight', type: 'IconValue<IconProps>' },
  { name: 'menuAttrs', type: 'ConstrBind<MenuProps>' },
  { name: 'menuRows', type: 'number[]' },
  { name: 'modelRows', type: 'string | number' },
  { name: 'modelValue', type: 'string | number' },
  { name: 'onUpdate:modelRows', type: '((value: string | number) => void)' },
  { name: 'onUpdate:modelValue', type: '((value: string | number) => void)' },
  { name: 'onUpdate:rows', type: '((value: string | number) => void)' },
  { name: 'onUpdate:value', type: '((value: string | number) => void)' },
  { name: 'rows', type: 'string | number' },
  { name: 'showArrows', type: 'boolean' },
  { name: 'showEnds', type: 'boolean' },
  { name: 'showFirstLast', type: 'boolean' },
  { name: 'showInfo', type: 'boolean' },
  { name: 'showMore', type: 'boolean' },
  { name: 'showMorePrev', type: 'boolean' },
  { name: 'showPagination', type: 'boolean' },
  { name: 'showRowsPerPageLabel', type: 'boolean' },
  { name: 'textFirst', type: 'TextValue' },
  { name: 'textInfo', type: 'TextValue' },
  { name: 'textLast', type: 'TextValue' },
  { name: 'textMore', type: 'TextValue' },
  { name: 'textMorePrev', type: 'TextValue' },
  { name: 'textNext', type: 'TextValue' },
  { name: 'textPage', type: 'TextValue' },
  { name: 'textPagination', type: 'TextValue' },
  { name: 'textPrevious', type: 'TextValue' },
  { name: 'textRowsPerPage', type: 'TextValue' },
  { name: 'value', type: 'string | number' },
  { name: 'visible', type: 'number' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'info', description: `Slot in the middle before the spacer / Слот в середине перед разделителем (spacer)`, properties: [{ name: 'props', type: '((props?: Record<string, unknown> | undefined) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]) | undefined' }] },
  { name: 'leading', description: `Slot at the very beginning of the component / Слот в самом начале компонента`, properties: [{ name: 'props', type: '((props?: Record<string, unknown> | undefined) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]) | undefined' }] },
  { name: 'trailing', description: `Slot at the very end of the component / Слот в самом конце компонента`, properties: [{ name: 'props', type: '((props?: Record<string, unknown> | undefined) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'more', description: `Show more button click event / Событие клика по кнопке «Показать еще»`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'options?', type: 'EventClickValue | undefined' }] },
  { name: 'moreLite', description: `Lightweight show more event / Упрощённое событие «Показать еще»`, properties: [{ name: 'options?', type: 'EventClickValue | undefined' }] },
  { name: 'morePrev', description: `Show previous button click event / Событие клика по кнопке «Показать предыдущие»`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'options?', type: 'EventClickValue | undefined' }] },
  { name: 'morePrevLite', description: `Lightweight show previous event / Упрощённое событие «Показать предыдущие»`, properties: [{ name: 'options?', type: 'EventClickValue | undefined' }] },
  { name: 'rows', description: `Rows per page selection event / Событие выбора количества строк на странице`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'options?', type: 'EventClickValue | undefined' }] },
  { name: 'rowsLite', description: `Lightweight rows selection event / Упрощённое событие выбора количества строк`, properties: [{ name: 'options?', type: 'EventClickValue | undefined' }] },
  { name: 'update:modelRows', description: `Model rows per page update event / Событие обновления количества строк модели`, properties: [{ name: 'value', type: 'number' }] },
  { name: 'update:modelValue', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'number' }] },
  { name: 'update:rows', description: `Rows per page update event / Событие обновления количества строк на странице`, properties: [{ name: 'value', type: 'number' }] },
  { name: 'update:value', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'number' }] }
  // :eventsList [!] System label / Системная метка
]

export const PaginationWikiData: WikiDataItem = {
  component: 'Pagination',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
