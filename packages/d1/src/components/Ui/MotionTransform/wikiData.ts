import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'string', option: ['planeAlways', 'planeSm', 'planeMd', 'planeLg', 'planeXl', 'plane2xl'] },
  { name: 'animationHeadPosition', type: 'string', option: ['top', 'toBottom'] },
  { name: 'animationShow', type: 'boolean' },
  { name: 'ariaDescribedby', type: 'string' },
  { name: 'ariaLabelledby', type: 'string' },
  { name: 'autoClose', type: 'boolean' },
  { name: 'clickOpen', type: 'boolean' },
  { name: 'ignore', type: 'string | HTMLElement' },
  { name: 'ignoreSelector', type: 'string' },
  { name: 'inDom', type: 'boolean' },
  { name: 'modelOpen', type: 'boolean' },
  { name: 'onUpdate:modelOpen', type: '(value: boolean) => void' },
  { name: 'onUpdate:open', type: '(value: boolean) => void' },
  { name: 'open', type: 'boolean' },
  { name: 'section', type: 'boolean' },
  { name: 'tagBody', type: 'string' }
  // :propsList [!] System label / Системная метка
]

export const MotionTransformWikiData: WikiDataItem = {
  component: 'MotionTransform',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
