import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'active', type: 'boolean | undefined' },
  { name: 'animationShow', type: 'boolean | undefined' },
  { name: 'animationType', type: 'string', option: ['type1', 'type2'] },
  { name: 'ariaLabel', type: 'string | undefined' },
  { name: 'asPalette', type: 'boolean | undefined' },
  { name: 'circle', type: 'boolean | undefined' },
  { name: 'detail', type: 'Record<string, any> | undefined' },
  { name: 'dir', type: 'boolean | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'dynamic', type: 'boolean | undefined' },
  { name: 'end', type: 'boolean | undefined' },
  { name: 'hide', type: 'boolean | undefined' },
  { name: 'high', type: 'boolean | undefined' },
  { name: 'href', type: 'string | undefined' },
  { name: 'icon', type: 'ImageValue<ImageProps> | undefined' },
  { name: 'iconActive', type: 'ImageValue<ImageProps> | undefined' },
  { name: 'inverse', type: 'boolean | undefined' },
  { name: 'isSkeleton', type: 'boolean | undefined' },
  { name: 'overlay', type: 'boolean | undefined' },
  { name: 'rect', type: 'boolean | undefined' },
  { name: 'role', type: 'string | undefined' },
  { name: 'rounded', type: 'string', option: ['auto', 'sm', 'md', 'lg', 'xl', 'full'] },
  { name: 'size', type: 'string', option: ['auto', 'x', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'] },
  { name: 'square', type: 'boolean | undefined' },
  { name: 'start', type: 'boolean | undefined' },
  { name: 'tabindex', type: 'string | number | undefined' },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined' },
  { name: 'turn', type: 'boolean | undefined' },
  { name: 'value', type: 'EventClickValue[\'value\']' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Slot for custom icon content/ Слот для пользовательского контента иконки`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'load', description: `Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`, properties: [{ name: 'image', type: 'ImageEventData' }] }
  // :eventsList [!] System label / Системная метка
]

export const IconWikiData: WikiDataItem = {
  component: 'Icon',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
