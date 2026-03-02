import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'chipAttrs', type: 'ConstrBind<Chip>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'iconAttrs', type: 'ConstrBind<Icon>' },
  { name: 'iconCancel', type: 'IconValue<Icon>' },
  { name: 'iconShow', type: 'boolean' },
  { name: 'multiple', type: 'boolean' },
  { name: 'placeholder', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'value', type: 'ListList' }
  // :propsList [!] System label / Системная метка
]

export const SelectValueWikiData: WikiDataItem = {
  component: 'SelectValue',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
