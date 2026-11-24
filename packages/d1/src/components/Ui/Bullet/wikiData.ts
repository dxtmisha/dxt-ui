import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'html', type: 'string' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'itemAttrs', type: 'ConstrBind<BulletItemProps>' },
  { name: 'list', type: 'readonly NumberOrString[]' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot for custom bullet items / Слот по умолчанию для произвольных элементов списка`, properties: [{ name: 'props', type: '((props?: Record<string, unknown> | undefined) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[]) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const BulletWikiData: WikiDataItem = {
  component: 'Bullet',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
