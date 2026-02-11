import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'badge', type: 'string | number | ConstrBind<BadgePropsBasic>' },
  { name: 'badgeDot', type: 'boolean' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'focus', type: 'boolean' },
  { name: 'href', type: 'string' },
  { name: 'icon', type: 'IconValue<IconPropsBasic>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconPropsBasic>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'index', type: 'any' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'open', type: 'boolean' },
  { name: 'readonly', type: 'boolean' },
  { name: 'role', type: 'string' },
  { name: 'selected', type: 'boolean' },
  { name: 'tag', type: 'string', option: ['button', 'a', 'span', 'li', 'div'] },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'value', type: 'EventClickValue[\'value\']' }
  // :propsList [!] System label / Системная метка
]

export const TabItemWikiStorybook = new WikiStorybook(
  'TabItem',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
