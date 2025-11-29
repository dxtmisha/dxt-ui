import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'ariaLabel', type: 'string' },
  { name: 'dot', type: 'boolean' },
  { name: 'formatting', type: 'boolean' },
  { name: 'hide', type: 'boolean' },
  { name: 'horizontal', type: 'string', option: ['center', 'right', 'left'] },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelMax', type: 'NumberOrString' },
  { name: 'outline', type: 'boolean' },
  { name: 'overlap', type: 'string', option: ['rectangular', 'circular', 'static'] },
  { name: 'palette', type: 'string', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'primary', type: 'boolean' },
  { name: 'secondary', type: 'boolean' },
  { name: 'selected', type: 'boolean' },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg', 'none'] },
  { name: 'vertical', type: 'string', option: ['top', 'center', 'bottom'] }
  // :propsList [!] System label / Системная метка
]

export const BadgeWikiStorybook = new WikiStorybook(
  'Badge',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
