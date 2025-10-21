import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'actionsAttrs', type: 'ConstrBind<ActionsProps>' },
  { name: 'actionsHide', type: 'boolean' },
  { name: 'actionsList', type: 'ConstrBind<unknown>' },
  { name: 'actionsSecondary', type: 'ConstrBind<unknown>' },
  { name: 'autoClose', type: 'boolean' },
  { name: 'barsAttrs', type: 'ConstrBind<BarsProps>' },
  { name: 'barsBackHide', type: 'boolean' },
  { name: 'barsDescription', type: 'string' },
  { name: 'barsHide', type: 'boolean' },
  { name: 'barsLabel', type: 'string | number' },
  { name: 'barsList', type: 'Bars[\'bars\']' },
  { name: 'buttonClose', type: 'string | ConstrBind<ButtonProps>' },
  { name: 'buttonOk', type: 'string | ConstrBind<ButtonProps>' },
  { name: 'closeButton', type: 'boolean' },
  { name: 'description', type: 'string | number' },
  { name: 'disabled', type: 'boolean' },
  { name: 'error', type: 'boolean' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps>' },
  { name: 'iconError', type: 'IconValue<IconProps>' },
  { name: 'iconSuccess', type: 'IconValue<IconProps>' },
  { name: 'image', type: 'string | ConstrBind<ImageProps>' },
  { name: 'imagePosition', type: 'string', option: ['top', 'left'] },
  { name: 'label', type: 'NumberOrString' },
  { name: 'open', type: 'boolean' },
  { name: 'padding', type: 'string', option: ['sm', 'md', 'lg'] },
  { name: 'paddingByIndent', type: 'boolean' },
  { name: 'success', type: 'boolean' },
  { name: 'width', type: 'string', option: ['sm', 'md', 'lg', 'auto'] },
  { name: 'windowAttrs', type: 'ConstrBind<WindowProps>' }
  // :propsList [!] System label / Системная метка
]

export const DialogWikiStorybook = new WikiStorybook(
  'Dialog',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
