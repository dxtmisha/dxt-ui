import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'axis', type: 'string', option: ['x', 'y'] },
  { name: 'control', type: 'boolean' },
  { name: 'disabled', type: 'boolean' },
  { name: 'divider', type: 'boolean' },
  { name: 'filterMode', type: 'boolean' },
  { name: 'focus', type: 'NumberOrStringOrBoolean' },
  { name: 'highlight', type: 'string' },
  { name: 'highlightLengthStart', type: 'number' },
  { name: 'iconArrowDown', type: 'IconValue<IconProps>' },
  { name: 'iconArrowRight', type: 'IconValue<IconProps>' },
  { name: 'itemAttrs', type: 'ConstrBind<ListItemProps>' },
  { name: 'itemGroupAttrs', type: 'ConstrBind<ListItemProps>' },
  { name: 'itemManagementAttrs', type: 'ConstrBind<ListItemProps>' },
  { name: 'itemMenuAttrs', type: 'ConstrBind<ListItemProps>' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'ListRecord<ListItemProps>' },
  { name: 'lite', type: 'boolean' },
  { name: 'liteThreshold', type: 'number' },
  { name: 'selected', type: 'ListSelectedList' },
  { name: 'tag', type: 'string', option: ['div', 'button', 'a', 'span'] }
  // :propsList [!] System label / Системная метка
]

export const ListWikiStorybook = new WikiStorybook(
  'List',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
