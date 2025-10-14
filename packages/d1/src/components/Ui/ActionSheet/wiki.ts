import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'autoClose', type: 'boolean' },
  { name: 'barsAttrs', type: 'ConstrBind<BarsPropsBasic<IconPropsBasic<ImagePropsBasic>, ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>>' },
  { name: 'barsBackHide', type: 'boolean' },
  { name: 'barsDescription', type: 'string' },
  { name: 'barsHide', type: 'boolean' },
  { name: 'barsLabel', type: 'string | number' },
  { name: 'barsList', type: 'ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>[]' },
  { name: 'disabled', type: 'boolean' },
  { name: 'open', type: 'boolean' },
  { name: 'padding', type: '"link"' },
  { name: 'touchClose', type: 'boolean' },
  { name: 'windowAttrs', type: 'ConstrBind<WindowPropsBasic<ScrollbarPropsBasic, ImagePropsBasic>>' }
  // :propsList [!] System label / Системная метка
]

export const ActionSheetWikiStorybook = new WikiStorybook(
  'ActionSheet',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
