import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['none', 'center', 'left', 'right', 'block', 'auto'] },
  { name: 'buttonAttrs', type: 'ConstrBind<Button>' },
  { name: 'buttonSecondaryAttrs', type: 'ConstrBind<Button>' },
  { name: 'flexible', type: 'string', option: ['adaptiveSm', 'adaptiveMd', 'adaptiveLg', 'adaptiveXl', 'adaptive2xl', 'containerSm', 'containerMd', 'containerLg', 'containerXl', 'container2xl'] },
  { name: 'list', type: 'any[]' },
  { name: 'listSecondary', type: 'any[]' },
  { name: 'padding', type: 'string', option: ['none', 'sm', 'md', 'lg', 'ySm', 'yMd', 'yLg'] },
  { name: 'paddingByIndent', type: 'boolean' },
  { name: 'wrap', type: 'boolean' }
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
