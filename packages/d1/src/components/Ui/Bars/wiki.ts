import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'
import { wiki, wikiDescriptions } from '@dxt-ui/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'action', type: 'boolean' },
  { name: 'actionBars', type: 'ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>[]' },
  { name: 'actionDescription', type: 'string | number' },
  { name: 'actionLabel', type: 'NumberOrString' },
  { name: 'backActionHide', type: 'boolean' },
  { name: 'backButton', type: 'ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>' },
  { name: 'backHide', type: 'boolean' },
  { name: 'bars', type: 'ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>[]' },
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonPropsBasic<IconPropsBasic<ImagePropsBasic>, ProgressPropsBasic>>' },
  { name: 'description', type: 'string | number' },
  { name: 'iconBack', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'iconClose', type: 'IconValue<IconPropsBasic<ImagePropsBasic>>' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'modelAction', type: 'boolean' },
  { name: 'onUpdate:action', type: '(value: boolean) => void' },
  { name: 'onUpdate:modelAction', type: '(value: boolean) => void' }
  // :propsList [!] System label / Системная метка
]

export const BarsWikiStorybook = new WikiStorybook(
  'Bars',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
