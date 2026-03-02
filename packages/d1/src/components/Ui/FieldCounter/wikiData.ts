import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'counter', type: 'string | number' },
  { name: 'id', type: 'string' },
  { name: 'maxlength', type: 'string | number' },
  { name: 'maxlengthOnce', type: 'string | number' },
  { name: 'template', type: 'string' },
  { name: 'textCharacterLimit', type: 'TextValue' },
  { name: 'textCharacterRemaining', type: 'TextValue' }
  // :propsList [!] System label / Системная метка
]

export const FieldCounterWikiData: WikiDataItem = {
  component: 'FieldCounter',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
