import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'ariaMultiselectable', type: 'boolean' },
  { name: 'axis', type: 'string', option: ['x', 'y'] },
  { name: 'control', type: 'boolean' },
  { name: 'disabled', type: 'boolean' },
  { name: 'divider', type: 'boolean' },
  { name: 'filterMode', type: 'boolean' },
  { name: 'focus', type: 'boolean' },
  { name: 'highlight', type: 'string' },
  { name: 'highlightLengthStart', type: 'number' },
  { name: 'iconArrowDown', type: 'IconValue<Icon>' },
  { name: 'iconArrowRight', type: 'IconValue<Icon>' },
  { name: 'itemAttrs', type: 'ConstrBind<ListItem>' },
  { name: 'itemGroupAttrs', type: 'ConstrBind<ListItem>' },
  { name: 'itemManagementAttrs', type: 'ConstrBind<ListItem>' },
  { name: 'itemMenuAttrs', type: 'ConstrBind<ListItem>' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'ListRecord<any>' },
  { name: 'lite', type: 'boolean' },
  { name: 'liteThreshold', type: 'number' },
  { name: 'max', type: 'string | number' },
  { name: 'role', type: 'string' },
  { name: 'roleItem', type: 'string' },
  { name: 'selected', type: 'ListSelectedList' },
  { name: 'tabindex', type: 'string | number' },
  { name: 'tag', type: 'string', option: ['div', 'button', 'a', 'span'] }
  // :propsList [!] System label / Системная метка
]

export const ListWikiData: WikiDataItem = {
  component: 'List',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
