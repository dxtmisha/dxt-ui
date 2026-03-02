import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'elementTarget', type: 'string | HTMLElement' },
  { name: 'inverse', type: 'boolean' },
  { name: 'position', type: 'string', option: ['auto', 'top', 'bottom', 'left', 'right'] },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg'] }
  // :propsList [!] System label / Системная метка
]

export const ArrowWikiData: WikiDataItem = {
  component: 'Arrow',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
