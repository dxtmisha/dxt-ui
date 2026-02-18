import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'animationHeight', type: 'boolean' },
  { name: 'inDom', type: 'boolean' },
  { name: 'inDomSlide', type: 'string[]' },
  { name: 'modelSelected', type: 'string' },
  { name: 'onUpdate:modelSelected', type: '(value: string) => void' },
  { name: 'onUpdate:selected', type: '(value: string) => void' },
  { name: 'selected', type: 'string' }
  // :propsList [!] System label / Системная метка
]

export const MotionAxisWikiStorybook = new WikiStorybook(
  'MotionAxis',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
