import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'ajax', type: 'string | (() => NormalOrPromise<ListRecord<ListItemProps>>)' },
  { name: 'autoClose', type: 'boolean' },
  { name: 'barsAdaptive', type: 'string', option: ['showAlways', 'showSm', 'showMd', 'showLg', 'showXl', 'show2xl'] },
  { name: 'barsAttrs', type: 'ConstrBind<BarsProps>' },
  { name: 'barsBackHide', type: 'boolean' },
  { name: 'barsDescription', type: 'string' },
  { name: 'barsHide', type: 'boolean' },
  { name: 'barsLabel', type: 'string | number' },
  { name: 'barsList', type: 'Bars[\'bars\']' },
  { name: 'cache', type: 'boolean' },
  { name: 'disabled', type: 'boolean' },
  { name: 'filterMode', type: 'boolean' },
  { name: 'hideList', type: 'boolean' },
  { name: 'highlight', type: 'string' },
  { name: 'highlightLengthStart', type: 'number' },
  { name: 'isSelectedByValue', type: 'boolean' },
  { name: 'itemAttrs', type: 'ConstrBind<ListItemProps>' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'ListRecord<ListItemProps>' },
  { name: 'listAttrs', type: 'ConstrBind<ListProps>' },
  { name: 'liteThreshold', type: 'number' },
  { name: 'modelSelected', type: 'string' },
  { name: 'onUpdate:modelSelected', type: '(value: string) => void' },
  { name: 'onUpdate:selected', type: '(value: string) => void' },
  { name: 'request', type: 'ApiFetch' },
  { name: 'selected', type: 'ListSelectedList' },
  { name: 'tag', type: 'string' },
  { name: 'windowAttrs', type: 'ConstrBind<WindowProps>' }
  // :propsList [!] System label / Системная метка
]

export const MenuWikiStorybook = new WikiStorybook(
  'Menu',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
