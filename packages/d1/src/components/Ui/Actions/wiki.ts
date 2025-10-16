import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['none', 'center', 'left', 'right', 'block'] },
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonProps>' },
  { name: 'buttonSecondaryAttrs', type: 'ConstrBind<ButtonProps>' },
  { name: 'flexible', type: 'string', option: ['adaptiveSm', 'adaptiveMd', 'adaptiveLg', 'adaptiveXl', 'adaptive2xl', 'containerSm', 'containerMd', 'containerLg', 'containerXl', 'container2xl'] },
  { name: 'list', type: 'ConstrBind<ButtonProps>[]' },
  { name: 'listSecondary', type: 'ConstrBind<ButtonProps>[]' },
  { name: 'padding', type: 'string', option: ['none', 'sm', 'md', 'lg', 'ySm', 'yMd', 'yLg'] },
  { name: 'paddingByIndent', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const ActionsWikiStorybook = new WikiStorybook(
  'Actions',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
