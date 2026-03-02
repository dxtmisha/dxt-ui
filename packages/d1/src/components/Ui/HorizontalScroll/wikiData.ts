import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['block', 'center', 'left', 'right'] },
  { name: 'flush', type: 'boolean' },
  { name: 'tag', type: 'string' }
  // :propsList [!] System label / Системная метка
]

export const HorizontalScrollWikiData: WikiDataItem = {
  component: 'HorizontalScroll',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
