import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'clickable', type: 'boolean' },
  { name: 'control', type: 'boolean' },
  { name: 'count', type: 'string | number' },
  { name: 'dynamic', type: 'boolean' },
  { name: 'hideIfOne', type: 'boolean' },
  { name: 'modelSelected', type: 'string | number' },
  { name: 'onUpdate:modelSelected', type: '((value: string | number) => void)' },
  { name: 'onUpdate:selected', type: '((value: string | number) => void)' },
  { name: 'palette', type: 'string', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'selected', type: 'string | number' },
  { name: 'tag', type: 'string' },
  { name: 'template', type: 'string' },
  { name: 'textPagination', type: 'TextValue' },
  { name: 'type', type: 'string', option: ['bullets', 'lines', 'fraction', 'progressbar', 'dots'] },
  { name: 'vertical', type: 'boolean' },
  { name: 'visible', type: 'string | number' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'fraction', description: `Slot for custom rendering of fraction text / Слот для кастомного рендеринга дроби`, properties: [{ name: 'props', type: '({ binds: CarouselPaginationFractionBinds; active: number; total: number; text: string; }) | undefined' }] },
  { name: 'item', description: `Slot for custom rendering of each bullet/item / Слот для кастомного рендеринга элемента пагинации`, properties: [{ name: 'props', type: '({ binds: CarouselPaginationItemBinds; item: CarouselPaginationItem; index: number; }) | undefined' }] },
  { name: 'progress', description: `Slot for custom rendering of progress bar / Слот для кастомного рендеринга полосы прогресса`, properties: [{ name: 'props', type: '({ binds: CarouselPaginationProgressBinds; active: number; total: number; percent: number; }) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'change', description: `Slide change event / Событие смены слайда`, properties: [{ name: 'selected', type: 'number' }] },
  { name: 'click', description: `Click on pagination indicator / Клик по индикатору пагинации`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'selected', type: 'number' }] },
  { name: 'clickLite', description: `Lightweight click event / Упрощенное событие клика`, properties: [{ name: 'selected', type: 'number' }] },
  { name: 'update:modelSelected', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'number' }] },
  { name: 'update:selected', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'number' }] }
  // :eventsList [!] System label / Системная метка
]

export const CarouselPaginationWikiData: WikiDataItem = {
  component: 'CarouselPagination',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
