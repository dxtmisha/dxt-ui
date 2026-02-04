import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'autoClose', type: 'boolean' },
  { name: 'cellAttrs', type: 'ConstrBind<Cell>' },
  { name: 'clickOpen', type: 'boolean' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'divider', type: 'boolean' },
  { name: 'icon', type: 'IconValue<Icon>' },
  { name: 'iconArrowDown', type: 'IconValue<Icon>' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'modelOpen', type: 'boolean' },
  { name: 'motionTransformAttrs', type: 'ConstrBind<MotionTransform>' },
  { name: 'onUpdate:modelOpen', type: '(value: boolean) => void' },
  { name: 'onUpdate:open', type: '(value: boolean) => void' },
  { name: 'open', type: 'boolean' }
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
