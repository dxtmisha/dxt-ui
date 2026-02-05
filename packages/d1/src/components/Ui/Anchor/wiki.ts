import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'behavior', type: 'string', option: ['auto', 'instant', 'smooth'] },
  { name: 'block', type: 'string', option: ['center', 'end', 'nearest', 'start'] },
  { name: 'delayHide', type: 'number' },
  { name: 'hide', type: 'boolean' },
  { name: 'iconContentCopy', type: 'IconValue<Icon>' },
  { name: 'iconLink', type: 'IconValue<Icon>' },
  { name: 'iconTag', type: 'IconValue<Icon>' },
  { name: 'inline', type: 'string', option: ['center', 'end', 'nearest', 'start'] },
  { name: 'isCopy', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'name', type: 'string' },
  { name: 'shift', type: 'NumberOrString' },
  { name: 'textCopiedClipboard', type: 'TextValue' },
  { name: 'tooltipAttrs', type: 'ConstrBind<Tooltip>' }
  // :propsList [!] System label / Системная метка
]

export const AnchorWikiStorybook = new WikiStorybook(
  'Anchor',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
