import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'
import { wiki, wikiDescriptions } from '@dxt-ui/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'disabled', type: 'boolean' },
  { name: 'focus', type: 'NumberOrStringOrBoolean' },
  { name: 'groupAttrs', type: 'Record<string, any>' },
  { name: 'groupItemAttrs', type: 'ConstrBind<ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>' },
  { name: 'highlight', type: 'string' },
  { name: 'highlightLengthStart', type: 'number' },
  { name: 'iconArrowDown', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconArrowRight', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'itemAttrs', type: 'ConstrBind<ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'ListRecord<ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>' },
  { name: 'lite', type: 'number' },
  { name: 'menuAttrs', type: 'Record<string, any>' },
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
