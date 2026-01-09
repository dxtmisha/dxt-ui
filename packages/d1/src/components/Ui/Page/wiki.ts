import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'caption', type: 'string | number' },
  { name: 'description', type: 'string | number' },
  { name: 'headline', type: 'string' },
  { name: 'icon', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'selected', type: 'boolean' },
  { name: 'tag', type: 'string' },
  { name: 'tagHeader', type: 'string' }
  // :propsList [!] System label / Системная метка
]

export const PageWikiStorybook = new WikiStorybook(
  'Page',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
