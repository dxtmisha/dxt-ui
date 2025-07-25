import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'
import { wiki, wikiDescriptions } from '@dxt-ui/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'string', option: ['iconAlways', 'block', 'auto', 'iconSm', 'iconMd', 'iconLg', 'iconXl', 'icon2xl', 'fullSm', 'fullMd', 'fullLg', 'fullXl', 'full2xl'] },
  { name: 'assistive', type: 'boolean' },
  { name: 'container', type: 'string', option: ['iconSm', 'iconMd', 'iconLg', 'iconXl', 'icon2xl', 'fullSm', 'fullMd', 'fullLg', 'fullXl', 'full2xl'] },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'focus', type: 'boolean' },
  { name: 'grid', type: 'boolean' },
  { name: 'icon', type: 'any' },
  { name: 'iconAttrs', type: 'ConstrBind<Icon>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTrailing', type: 'any' },
  { name: 'iconTrailingDirOnly', type: 'boolean' },
  { name: 'iconTrailingPalette', type: 'boolean' },
  { name: 'iconTrailingTurnOnly', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'input', type: 'boolean' },
  { name: 'inverse', type: 'boolean' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'string | number' },
  { name: 'loading', type: 'any' },
  { name: 'palette', type: 'string', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'readonly', type: 'boolean' },
  { name: 'roundedFull', type: 'boolean' },
  { name: 'selected', type: 'boolean' },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg'] },
  { name: 'tag', type: 'string' },
  { name: 'textAlign', type: 'string', option: ['left', 'center', 'right'] },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'value', type: 'any' }
  // :propsList [!] System label / Системная метка
]

export const ChipWikiStorybook = new WikiStorybook(
  'Chip',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
