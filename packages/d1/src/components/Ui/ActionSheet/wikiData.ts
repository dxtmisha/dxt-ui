import { type StorybookProps, type WikiDataItem } from '@dxtmisha/wiki'

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
  { name: 'disabled', type: 'boolean' },
  { name: 'open', type: 'boolean' },
  { name: 'touchClose', type: 'boolean' },
  { name: 'width', type: 'string', option: ['sm', 'md', 'lg', 'auto'] },
  { name: 'windowAttrs', type: 'ConstrBind<Window>' }
  // :propsList [!] System label / Системная метка
]

export const ActionSheetWikiData: WikiDataItem = {
  component: 'ActionSheet',
  props: propsNames,
  defaults,
  wikiDesign: wikiD1
}
