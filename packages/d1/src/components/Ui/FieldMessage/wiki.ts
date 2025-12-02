import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'counter', type: 'string | number' },
  { name: 'counterId', type: 'string' },
  { name: 'counterShow', type: 'boolean' },
  { name: 'counterTemplate', type: 'string' },
  { name: 'disabled', type: 'boolean' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterProps>' },
  { name: 'forceShow', type: 'boolean' },
  { name: 'helperId', type: 'string' },
  { name: 'helperMessage', type: 'string' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'maxlength', type: 'string | number' },
  { name: 'validationId', type: 'string' },
  { name: 'validationMessage', type: 'string' }
  // :propsList [!] System label / Системная метка
]

export const FieldMessageWikiStorybook = new WikiStorybook(
  'FieldMessage',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
