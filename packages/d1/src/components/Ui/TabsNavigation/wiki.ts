import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'divider', type: 'boolean' },
  { name: 'focus', type: 'boolean' },
  { name: 'horizontalScrollAlign', type: 'string', option: ['block', 'left'] },
  { name: 'horizontalScrollAttrs', type: 'ConstrBind<HorizontalScrollPropsBasic>' },
  { name: 'horizontalScrollFlush', type: 'boolean' },
  { name: 'itemAttrs', type: 'ConstrBind<TabItemPropsBasic>' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'ListRecord<TabItemPropsBasic>' },
  { name: 'modelSelected', type: 'boolean' },
  { name: 'onUpdate:modelSelected', type: '(value: boolean) => void' },
  { name: 'onUpdate:selected', type: '(value: boolean) => void' },
  { name: 'selected', type: 'ListSelectedList' },
  { name: 'tag', type: 'string' }
  // :propsList [!] System label / Системная метка
]

export const TabsNavigationWikiStorybook = new WikiStorybook(
  'TabsNavigation',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
