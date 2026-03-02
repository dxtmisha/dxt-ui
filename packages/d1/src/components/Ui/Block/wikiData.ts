import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'caption', type: 'string | number' },
  { name: 'captionDecorative', type: 'boolean' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'headline', type: 'string' },
  { name: 'icon', type: 'IconValue<Icon>' },
  { name: 'iconAttrs', type: 'ConstrBind<Icon>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'selected', type: 'boolean' },
  { name: 'tag', type: 'string' },
  { name: 'tagHeader', type: 'string' }
  // :propsList [!] System label / Системная метка
]

export const BlockWikiData: WikiDataItem = {
  component: 'Block',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
