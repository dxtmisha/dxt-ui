import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'autoClose', type: 'boolean' },
  { name: 'axis', type: 'string', option: ['x', 'y'] },
  { name: 'disabled', type: 'boolean' },
  { name: 'divider', type: 'boolean' },
  { name: 'open', type: 'boolean' },
  { name: 'windowAttrs', type: 'ConstrBind<Window>' }
  // :propsList [!] System label / Системная метка
]

export const ListMenuWikiData: WikiDataItem = {
  component: 'ListMenu',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
