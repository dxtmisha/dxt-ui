import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'boolean' },
  { name: 'adaptiveAlways', type: 'boolean' },
  { name: 'adaptiveGroup', type: 'string' },
  { name: 'alt', type: 'string' },
  { name: 'coordinator', type: 'number[] | any' },
  { name: 'disabled', type: 'boolean' },
  { name: 'hide', type: 'boolean' },
  { name: 'lazy', type: 'boolean' },
  { name: 'objectHeight', type: 'string | number' },
  { name: 'objectWidth', type: 'string | number' },
  { name: 'size', type: 'string', option: ['auto', 'contain', 'cover'] },
  { name: 'tagImg', type: 'boolean' },
  { name: 'turn', type: 'boolean' },
  { name: 'url', type: 'string' },
  { name: 'value', type: 'string | any' },
  { name: 'x', type: 'string | number' },
  { name: 'y', type: 'string | number' }
  // :propsList [!] System label / Системная метка
]

export const ImageWikiStorybook = new WikiStorybook(
  'Image',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
