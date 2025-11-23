import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

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
  { name: 'inDom', type: 'boolean' },
  { name: 'modelOpen', type: 'boolean' },
  { name: 'onUpdate:modelOpen', type: '(value: boolean) => void' },
  { name: 'onUpdate:open', type: '(value: boolean) => void' },
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
