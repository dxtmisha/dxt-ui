import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'string', option: ['iconAlways', 'block', 'auto', 'iconSm', 'iconMd', 'iconLg', 'iconXl', 'icon2xl', 'fullSm', 'fullMd', 'fullLg', 'fullXl', 'full2xl'] },
  { name: 'container', type: 'string', option: ['iconSm', 'iconMd', 'iconLg', 'iconXl', 'icon2xl', 'fullSm', 'fullMd', 'fullLg', 'fullXl', 'full2xl'] },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'focus', type: 'boolean' },
  { name: 'grid', type: 'boolean' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTrailing', type: 'IconValue<IconProps>' },
  { name: 'iconTrailingDirOnly', type: 'boolean' },
  { name: 'iconTrailingPalette', type: 'boolean' },
  { name: 'iconTrailingTurnOnly', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'inverse', type: 'boolean' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressProps>' },
  { name: 'outline', type: 'boolean' },
  { name: 'palette', type: 'string', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'primary', type: 'boolean' },
  { name: 'readonly', type: 'boolean' },
  { name: 'roundedFull', type: 'boolean' },
  { name: 'secondary', type: 'boolean' },
  { name: 'selected', type: 'boolean' },
  { name: 'size', type: 'string', option: ['xs', 'sm', 'md', 'lg', 'xl'] },
  { name: 'tag', type: 'string', option: ['button', 'a', 'span'] },
  { name: 'text', type: 'boolean' },
  { name: 'textAlign', type: 'string', option: ['left', 'center', 'right'] },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'value', type: 'EventClickValue[\'value\']' }
  // :propsList [!] System label / Системная метка
]

export const ButtonWikiStorybook = new WikiStorybook(
  'Button',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
