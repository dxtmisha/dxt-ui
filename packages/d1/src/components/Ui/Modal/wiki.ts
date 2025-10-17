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
  { name: 'disabled', type: 'boolean' },
  { name: 'image', type: 'string | ConstrBind<ImageProps>' },
  { name: 'imagePosition', type: 'string', option: ['top', 'left'] },
  { name: 'open', type: 'boolean' },
  { name: 'padding', type: 'string', option: ['sm', 'md', 'lg'] },
  { name: 'paddingByIndent', type: 'boolean' },
  { name: 'width', type: 'string', option: ['sm', 'md', 'lg', 'auto'] },
  { name: 'windowAttrs', type: 'ConstrBind<WindowProps>' }
  // :propsList [!] System label / Системная метка
]

export const ModalWikiStorybook = new WikiStorybook(
  'Modal',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
