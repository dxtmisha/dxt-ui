import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'modelSelected', type: 'ListSelectedList | undefined' },
  { name: 'motionAxisAttrs', type: 'ConstrBind<MotionAxisProps> | undefined' },
  { name: 'onUpdate:modelSelected', type: '((value: ListSelectedList) => void) | undefined' },
  { name: 'onUpdate:selected', type: '((value: ListSelectedList) => void) | undefined' },
  { name: 'selected', type: 'MotionAxisSelectedValue' },
  { name: 'tabItemAttrs', type: 'ConstrBind<TabItemProps> | undefined' },
  { name: 'tabs', type: 'ListRecord<TabItemProps> | ConstrBind<TabsNavigationProps> | undefined' },
  { name: 'tabsNavigationAttrs', type: 'ConstrBind<TabsNavigationProps> | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'motionAxis', description: `Event emission/Вызов события`, properties: [{ name: 'options', type: 'MotionAxisEmitOptions' }] },
  { name: 'update:modelSelected', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'ListSelectedList' }] },
  { name: 'update:selected', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'ListSelectedList' }] }
  // :eventsList [!] System label / Системная метка
]

export const TabsWikiData: WikiDataItem = {
  component: 'Tabs',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
