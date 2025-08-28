import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'
import { wiki, wikiDescriptions } from '@dxt-ui/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'autoClose', type: 'boolean' },
  { name: 'axis', type: 'string', option: ['x', 'y'] },
  { name: 'disabled', type: 'boolean' },
  { name: 'divider', type: 'boolean' },
  { name: 'open', type: 'boolean' },
  { name: 'windowAttrs', type: 'ConstrBind<WindowPropsBasic<ScrollbarPropsBasic, ImagePropsBasic>>' }
  // :propsList [!] System label / Системная метка
]

export const ListMenuWikiStorybook = new WikiStorybook(
  'ListMenu',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
