import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'modelSelected', type: 'ListSelectedList' },
  { name: 'motionAxisAttrs', type: 'ConstrBind<MotionAxisPropsBasic>' },
  { name: 'onUpdate:modelSelected', type: '(value: ListSelectedList) => void' },
  { name: 'onUpdate:selected', type: '(value: ListSelectedList) => void' },
  { name: 'selected', type: 'string' },
  { name: 'tabItemAttrs', type: 'ConstrBind<TabItemPropsBasic>' },
  { name: 'tabs', type: 'ListRecord<TabItemPropsBasic> | ConstrBind<TabsNavigationPropsBasic>' },
  { name: 'tabsNavigationAttrs', type: 'ConstrBind<TabsNavigationPropsBasic>' }
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
