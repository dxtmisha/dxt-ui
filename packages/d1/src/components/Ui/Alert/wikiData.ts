import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'actionsAttrs', type: 'ConstrBind<ActionsProps>' },
  { name: 'actionsHide', type: 'boolean' },
  { name: 'actionsList', type: '(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined' },
  { name: 'actionsSecondary', type: '(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string ; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined' },
  { name: 'ariaLive', type: 'string', option: ['off', 'polite', 'assertive'] },
  { name: 'button', type: 'string | number | ConstrBind<ButtonProps>' },
  { name: 'closeButton', type: 'boolean' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps>' },
  { name: 'iconClose', type: 'string' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTrailing', type: 'IconValue<IconProps>' },
  { name: 'iconTrailingDirOnly', type: 'boolean' },
  { name: 'iconTrailingPalette', type: 'boolean' },
  { name: 'iconTrailingTurnOnly', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'itemCenter', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'links', type: 'ConstrBind<AlertLinkProps>[]' },
  { name: 'linksAttrs', type: 'ConstrBind<AlertLinkProps>' },
  { name: 'palette', type: 'string', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'primary', type: 'boolean' },
  { name: 'role', type: 'string' },
  { name: 'secondary', type: 'boolean' },
  { name: 'selected', type: 'boolean' },
  { name: 'textClose', type: 'TextValue' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const AlertWikiData: WikiDataItem = {
  component: 'Alert',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
