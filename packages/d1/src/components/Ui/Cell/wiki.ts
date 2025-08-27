import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'
import { wiki, wikiDescriptions } from '@dxt-ui/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'caption', type: 'string | number' },
  { name: 'description', type: 'string | number' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'divider', type: 'boolean' },
  { name: 'dividerLabel', type: 'string', option: ['always', 'none', 'adaptiveSm', 'adaptiveMd', 'adaptiveLg', 'adaptiveXl', 'adaptive2xl', 'containerSm', 'containerMd', 'containerLg', 'containerXl', 'container2xl'] },
  { name: 'dynamic', type: 'boolean' },
  { name: 'dynamicHover', type: 'boolean' },
  { name: 'focus', type: 'boolean' },
  { name: 'icon', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
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
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressPropsBasic>' },
  { name: 'padding', type: 'string', option: ['none', 'sm', 'md', 'lg', 'ySm', 'yMd', 'yLg'] },
  { name: 'readonly', type: 'boolean' },
  { name: 'selected', type: 'boolean' },
  { name: 'tag', type: 'string' },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'value', type: 'any' }
  // :propsList [!] System label / Системная метка
]

export const CellWikiStorybook = new WikiStorybook(
  'Cell',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
