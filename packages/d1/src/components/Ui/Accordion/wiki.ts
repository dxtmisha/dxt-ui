import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'autoClose', type: 'boolean' },
  { name: 'cellAttrs', type: 'ConstrBind<CellProps>' },
  { name: 'clickOpen', type: 'boolean' },
  { name: 'description', type: 'string | number' },
  { name: 'divider', type: 'boolean' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconArrowDown', type: 'IconValue<IconProps>' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'modelOpen', type: 'boolean' },
  { name: 'motionTransformAttrs', type: 'ConstrBind<MotionTransformProps>' },
  { name: 'onUpdate:modelOpen', type: '(value: boolean) => void' },
  { name: 'onUpdate:open', type: '(value: boolean) => void' },
  { name: 'open', type: 'boolean' },
  { name: 'padding', type: 'string', option: ['sm', 'md', 'lg', 'ySm', 'yMd', 'yLg', 'none'] },
  { name: 'paddingByIndent', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const AccordionWikiStorybook = new WikiStorybook(
  'Accordion',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
