import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'divider', type: 'boolean' },
  { name: 'open', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const ListGroupWikiData: WikiDataItem = {
  component: 'ListGroup',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
