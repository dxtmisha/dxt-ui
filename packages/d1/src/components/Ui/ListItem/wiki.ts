import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'
import { wiki, wikiDescriptions } from '@dxt-ui/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'badge', type: 'string | number | ConstrBind<BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>>' },
  { name: 'badgeDot', type: 'boolean' },
  { name: 'caption', type: 'string | number' },
  { name: 'description', type: 'string | number' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'divider', type: 'boolean' },
  { name: 'fill', type: 'string', option: ['custom'] },
  { name: 'focus', type: 'boolean' },
  { name: 'highlight', type: 'string' },
  { name: 'highlightLengthStart', type: 'number' },
  { name: 'icon', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconAlign', type: 'string', option: ['center', 'edge'] },
  { name: 'iconAttrs', type: 'ConstrBind<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTop', type: 'boolean' },
  { name: 'iconTrailing', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconTrailingDirOnly', type: 'boolean' },
  { name: 'iconTrailingPalette', type: 'boolean' },
  { name: 'iconTrailingTurnOnly', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'index', type: 'any' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'string | number' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressPropsBasic>' },
  { name: 'open', type: 'boolean' },
  { name: 'palette', type: 'string', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'prefix', type: 'string | number' },
  { name: 'readonly', type: 'boolean' },
  { name: 'search', type: 'string' },
  { name: 'selected', type: 'boolean' },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg'] },
  { name: 'suffix', type: 'string | number' },
  { name: 'tag', type: 'string', option: ['button', 'a', 'span', 'div'] },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'type', type: 'string' },
  { name: 'value', type: 'any' }
  // :propsList [!] System label / Системная метка
]

export const ListItemWikiStorybook = new WikiStorybook(
  'ListItem',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
