import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'collageBarAttrs', type: 'ConstrBind<CollageBarProps>' },
  { name: 'collageBarPosition', type: 'string', option: ['top', 'bottom', 'static'] },
  { name: 'compact', type: 'boolean' },
  { name: 'coordinator', type: 'number[] | any' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'focus', type: 'boolean' },
  { name: 'href', type: 'string' },
  { name: 'iconCheck', type: 'IconValue<IconProps>' },
  { name: 'image', type: 'string | ConstrBind<ImageProps>' },
  { name: 'imageAttrs', type: 'ConstrBind<ImageProps>' },
  { name: 'index', type: 'string | number' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'selected', type: 'boolean' },
  { name: 'size', type: 'string', option: ['auto', 'contain', 'cover'] },
  { name: 'span', type: 'string', option: ['standard', 'banner', 'huge', 'large', 'tall', 'wide'] },
  { name: 'tag', type: 'string' },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'value', type: 'EventClickValue[\'value\']' },
  { name: 'x', type: 'string | number' },
  { name: 'y', type: 'string | number' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'barBody', description: `Body slot forwarded to the bar / Слот тела, передаваемый в панель`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'barTrailing', description: `Trailing slot forwarded to the bar / Замыкающий слот, передаваемый в панель`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'load', description: `Triggered when the image is loaded / Вызывается при загрузке изображения`, properties: [{ name: 'image', type: 'ImageEventData' }] }
  // :eventsList [!] System label / Системная метка
]

export const CollageItemWikiData: WikiDataItem = {
  component: 'CollageItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
