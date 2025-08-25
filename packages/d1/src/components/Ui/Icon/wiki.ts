import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'
import { wiki, wikiDescriptions } from '@dxt-ui/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'active', type: 'boolean' },
  { name: 'animationShow', type: 'boolean' },
  { name: 'animationType', type: 'string', option: ['type1', 'type2'] },
  { name: 'asPalette', type: 'boolean' },
  { name: 'circle', type: 'boolean' },
  { name: 'dir', type: 'boolean' },
  { name: 'disabled', type: 'boolean' },
  { name: 'dynamic', type: 'boolean' },
  { name: 'end', type: 'boolean' },
  { name: 'hide', type: 'boolean' },
  { name: 'high', type: 'boolean' },
  { name: 'icon', type: 'ImageValue<ImageProps>' },
  { name: 'iconActive', type: 'ImageValue<ImageProps>' },
  { name: 'inverse', type: 'boolean' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'overlay', type: 'boolean' },
  { name: 'rect', type: 'boolean' },
  { name: 'rounded', type: 'string', option: ['auto', 'sm', 'md', 'lg', 'xl', 'full'] },
  { name: 'size', type: 'string', option: ['auto', 'x', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'] },
  { name: 'square', type: 'boolean' },
  { name: 'start', type: 'boolean' },
  { name: 'turn', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const IconWikiStorybook = new WikiStorybook(
  'Icon',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
