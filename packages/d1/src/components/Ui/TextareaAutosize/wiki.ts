import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'autosize', type: 'boolean' },
  { name: 'height', type: 'string', option: ['xs', 'sm', 'md', 'lg', 'xl'] },
  { name: 'inputAttrs', type: 'Record<string, any>' },
  { name: 'value', type: 'string' }
  // :propsList [!] System label / Системная метка
]

export const TextareaAutosizeWikiStorybook = new WikiStorybook(
  'TextareaAutosize',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
