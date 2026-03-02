import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'counter', type: 'string | number' },
  { name: 'counterId', type: 'string' },
  { name: 'counterShow', type: 'boolean' },
  { name: 'counterTemplate', type: 'string' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounter>' },
  { name: 'for', type: 'string' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'loading', type: 'boolean | ConstrBind<Progress>' },
  { name: 'maxlength', type: 'string | number' },
  { name: 'required', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const FieldLabelWikiData: WikiDataItem = {
  component: 'FieldLabel',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
