import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'modelSelected', type: 'ListSelectedList' },
  { name: 'motionAxisAttrs', type: 'ConstrBind<MotionAxis>' },
  { name: 'onUpdate:modelSelected', type: '(value: ListSelectedList) => void' },
  { name: 'onUpdate:selected', type: '(value: ListSelectedList) => void' },
  { name: 'selected', type: 'string' },
  { name: 'tabItemAttrs', type: 'ConstrBind<TabItem>' },
  { name: 'tabs', type: 'ListRecord<TabItem> | ConstrBind<TabsNavigation>' },
  { name: 'tabsNavigationAttrs', type: 'ConstrBind<TabsNavigation>' }
  // :propsList [!] System label / Системная метка
]

export const TabsWikiStorybook = new WikiStorybook(
  'Tabs',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
