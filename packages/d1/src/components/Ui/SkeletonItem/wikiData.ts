import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'background', type: 'boolean' },
  { name: 'backgroundVariant', type: 'boolean' },
  { name: 'border', type: 'boolean' },
  { name: 'borderVariant', type: 'boolean' },
  { name: 'itemAttrs', type: 'ConstrBind' },
  { name: 'label', type: 'string | number' },
  { name: 'length', type: 'string | number | readonly [number, number]' },
  { name: 'tag', type: 'string | Component' },
  { name: 'text', type: 'boolean' },
  { name: 'textVariant', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot for the skeleton item / Слот по умолчанию для элемента скелетона`, properties: [{ name: 'props', type: '((props?: Record<string, unknown> | undefined) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const SkeletonItemWikiData: WikiDataItem = {
  component: 'SkeletonItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
