import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'base', type: 'string', option: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] },
  { name: 'lg', type: 'string', option: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] },
  { name: 'md', type: 'string', option: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] },
  { name: 'sm', type: 'string', option: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] },
  { name: 'xl', type: 'string', option: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] },
  { name: 'xl2', type: 'string', option: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] }
  // :propsList [!] System label / Системная метка
]

export const GridItemWikiData: WikiDataItem = {
  component: 'GridItem',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
