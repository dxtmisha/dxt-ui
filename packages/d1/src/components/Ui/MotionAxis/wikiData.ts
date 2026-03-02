import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'animationHeight', type: 'boolean' },
  { name: 'axis', type: 'string', option: ['x', 'y', 'z'] },
  { name: 'direction', type: 'string', option: ['next', 'back', 'auto'] },
  { name: 'inDom', type: 'boolean' },
  { name: 'inDomSlide', type: 'string[]' },
  { name: 'modelSelected', type: 'string' },
  { name: 'onUpdate:modelSelected', type: '(value: string) => void' },
  { name: 'onUpdate:selected', type: '(value: string) => void' },
  { name: 'selected', type: 'string' }
  // :propsList [!] System label / Системная метка
]

export const MotionAxisWikiData: WikiDataItem = {
  component: 'MotionAxis',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
