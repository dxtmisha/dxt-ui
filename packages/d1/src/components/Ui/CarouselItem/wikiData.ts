import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'ariaLabel', type: 'string' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'href', type: 'string' },
  { name: 'image', type: 'string | ConstrBind<ImagePropsBasic>' },
  { name: 'imageAttrs', type: 'ConstrBind<ImagePropsBasic>' },
  { name: 'index', type: 'string | number' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'role', type: 'string' },
  { name: 'selected', type: 'boolean' },
  { name: 'slide', type: 'string | number' },
  { name: 'snap', type: 'string', option: ['start', 'center', 'end', 'none'] },
  { name: 'tag', type: 'string' },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'total', type: 'string | number' },
  { name: 'value', type: 'EventClickValue[\'value\']' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot for slide content / Слот по умолчанию для содержимого слайда`, properties: [{ name: 'props', type: '(CarouselItemSlotDefault) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'load', description: `Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`, properties: [{ name: 'image', type: 'ImageEventData' }] }
  // :eventsList [!] System label / Системная метка
]

export const CarouselItemWikiData: WikiDataItem = {
  component: 'CarouselItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
