import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'circular', type: 'boolean' },
  { name: 'delay', type: 'string | number' },
  { name: 'delayHide', type: 'string | number' },
  { name: 'dense', type: 'boolean' },
  { name: 'indeterminate', type: 'string', option: ['type1', 'type2', 'type3'] },
  { name: 'inverse', type: 'boolean' },
  { name: 'linear', type: 'boolean' },
  { name: 'max', type: 'string | number' },
  { name: 'palette', type: 'string', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'point', type: 'boolean' },
  { name: 'position', type: 'string', option: ['top', 'bottom', 'static'] },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg'] },
  { name: 'value', type: 'string | number' },
  { name: 'visible', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const ProgressWikiStorybook = new WikiStorybook(
  'Progress',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
