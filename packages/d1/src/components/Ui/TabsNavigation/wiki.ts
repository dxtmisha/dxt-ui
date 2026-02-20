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
  { name: 'itemAttrs', type: 'ConstrBind<TabItem>' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'ListRecord<any>' },
  { name: 'modelSelected', type: 'ListSelectedList' },
  { name: 'onUpdate:modelSelected', type: '(value: ListSelectedList) => void' },
  { name: 'onUpdate:selected', type: '(value: ListSelectedList) => void' },
  { name: 'selected', type: 'ListSelectedList' },
  { name: 'tag', type: 'TabItem[\'tag\']' }
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
