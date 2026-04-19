import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'divider', type: 'boolean | undefined' },
  { name: 'horizontalScrollAlign', type: 'string', option: ['block', 'left'] },
  { name: 'horizontalScrollAttrs', type: 'ConstrBind<HorizontalScrollPropsBasic> | undefined' },
  { name: 'horizontalScrollFlush', type: 'boolean | undefined' },
  { name: 'itemAttrs', type: 'ConstrBind<TabItemProps> | undefined' },
  { name: 'keyLabel', type: 'string | undefined' },
  { name: 'keyValue', type: 'string | undefined' },
  { name: 'list', type: 'ListRecord<TabItemProps> | undefined' },
  { name: 'modelSelected', type: 'ListSelectedList | undefined' },
  { name: 'onUpdate:modelSelected', type: '((value: ListSelectedList) => void) | undefined' },
  { name: 'onUpdate:selected', type: '((value: ListSelectedList) => void) | undefined' },
  { name: 'selected', type: 'ListSelectedList | undefined' },
  { name: 'tag', type: 'string | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'leading', description: `Slot for content before the tabs/ Слот для содержимого перед вкладками`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'trailing', description: `Slot for content after the tabs/ Слот для содержимого после вкладок`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'update:modelSelected', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'ListSelectedList' }] },
  { name: 'update:selected', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'ListSelectedList' }] }
  // :eventsList [!] System label / Системная метка
]

export const TabsNavigationWikiData: WikiDataItem = {
  component: 'TabsNavigation',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
