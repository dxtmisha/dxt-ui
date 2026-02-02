import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'actionsAttrs', type: 'ConstrBind<Actions>' },
  { name: 'actionsHide', type: 'boolean' },
  { name: 'actionsList', type: 'ConstrBind<Actions[\'list\']>' },
  { name: 'actionsSecondary', type: 'ConstrBind<Actions[\'listSecondary\']>' },
  { name: 'autoClose', type: 'boolean' },
  { name: 'barsAttrs', type: 'ConstrBind<Bars>' },
  { name: 'barsBackHide', type: 'boolean' },
  { name: 'barsDescription', type: 'string' },
  { name: 'barsHide', type: 'boolean' },
  { name: 'barsLabel', type: 'string | number' },
  { name: 'barsList', type: 'Bars[\'bars\']' },
  { name: 'buttonClose', type: 'string | ConstrBind<Button> | null' },
  { name: 'buttonOk', type: 'string | ConstrBind<Button> | null' },
  { name: 'clickOkAndClose', type: 'boolean' },
  { name: 'closeButton', type: 'boolean' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'disabled', type: 'boolean' },
  { name: 'error', type: 'boolean' },
  { name: 'icon', type: 'IconValue<Icon>' },
  { name: 'iconAttrs', type: 'ConstrBind<Icon>' },
  { name: 'iconError', type: 'IconValue<Icon>' },
  { name: 'iconSuccess', type: 'IconValue<Icon>' },
  { name: 'image', type: 'string | ConstrBind<Image>' },
  { name: 'imagePosition', type: 'string', option: ['top', 'left'] },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'open', type: 'boolean' },
  { name: 'success', type: 'boolean' },
  { name: 'textClose', type: 'TextValue' },
  { name: 'textOk', type: 'TextValue' },
  { name: 'width', type: 'string', option: ['sm', 'md', 'lg', 'auto'] },
  { name: 'windowAttrs', type: 'ConstrBind<Window>' }
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
