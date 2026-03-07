import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  // :propsList [!] System label / Системная метка
]

export const GridWikiData: WikiDataItem = {
  component: 'Grid',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
