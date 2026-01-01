import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'arrowAttrs', type: 'ConstrBind<ArrowProps>' },
  { name: 'arrowPosition', type: 'string', option: ['auto', 'top', 'bottom', 'left', 'right'] },
  { name: 'arrowShow', type: 'boolean' },
  { name: 'delay', type: 'number' },
  { name: 'delayHide', type: 'number' },
  { name: 'description', type: 'string | number' },
  { name: 'disabled', type: 'boolean' },
  { name: 'indent', type: 'number' },
  { name: 'inDom', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'maxWidth', type: 'string', option: ['sm', 'md', 'lg'] },
  { name: 'open', type: 'boolean' },
  { name: 'top', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const TooltipWikiStorybook = new WikiStorybook(
  'Tooltip',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
