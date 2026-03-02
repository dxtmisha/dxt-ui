import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'counter', type: 'string | number' },
  { name: 'counterId', type: 'string' },
  { name: 'counterShow', type: 'boolean' },
  { name: 'counterTemplate', type: 'string' },
  { name: 'disabled', type: 'boolean' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounter>' },
  { name: 'forceShow', type: 'boolean' },
  { name: 'helperId', type: 'string' },
  { name: 'helperMessage', type: 'string' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'maxlength', type: 'string | number' },
  { name: 'validationId', type: 'string' },
  { name: 'validationMessage', type: 'string' }
  // :propsList [!] System label / Системная метка
]

export const FieldMessageWikiData: WikiDataItem = {
  component: 'FieldMessage',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
