import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'
import { wiki, wikiDescriptions } from '@dxt-ui/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'string', option: ['planeAlways', 'planeSm', 'planeMd', 'planeLg', 'planeXl', 'plane2xl'] },
  { name: 'animationHeadPosition', type: 'string', option: ['top', 'toBottom'] },
  { name: 'animationShow', type: 'boolean' },
  { name: 'autoClose', type: 'boolean' },
  { name: 'clickOpen', type: 'boolean' },
  { name: 'ignore', type: 'string | HTMLElement' },
  { name: 'ignoreSelector', type: 'string' },
  { name: 'open', type: 'boolean' },
  { name: 'section', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const MotionTransformWikiStorybook = new WikiStorybook(
  'MotionTransform',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
