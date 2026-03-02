import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'disabled', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const RippleWikiData: WikiDataItem = {
  component: 'Ripple',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
