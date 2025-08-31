import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'
import { wiki, wikiDescriptions } from '@dxt-ui/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'ajax', type: 'string | (() => NormalOrPromise<ListRecord<ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>>)' },
  { name: 'autoClose', type: 'boolean' },
  { name: 'barsAdaptive', type: '"always"' },
  { name: 'barsAttrs', type: 'ConstrBind<BarsPropsBasic<IconPropsBasic<ImagePropsBasic>, ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>>' },
  { name: 'barsBackHide', type: 'boolean' },
  { name: 'barsDescription', type: 'string' },
  { name: 'barsHide', type: 'boolean' },
  { name: 'barsLabel', type: 'string | number' },
  { name: 'barsList', type: 'ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>[]' },
  { name: 'cache', type: 'boolean' },
  { name: 'disabled', type: 'boolean' },
  { name: 'hideList', type: 'boolean' },
  { name: 'highlightLengthStart', type: 'number' },
  { name: 'itemAttrs', type: 'ConstrBind<ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'ListRecord<ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>' },
  { name: 'listAttrs', type: 'ConstrBind<ListPropsBasic<IconPropsBasic<ImagePropsBasic>, ListItemPropsBasic<IconPropsBasic<ImagePropsBasic>, BadgePropsBasic<IconPropsBasic<ImagePropsBasic>>, ProgressPropsBasic>>>' },
  { name: 'liteThreshold', type: 'number' },
  { name: 'request', type: 'ApiFetch' },
  { name: 'selected', type: 'ListSelectedList' },
  { name: 'tag', type: 'string' },
  { name: 'windowAttrs', type: 'ConstrBind<WindowPropsBasic<ScrollbarPropsBasic, ImagePropsBasic>>' }
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
