import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'actionsAttrs', type: 'ConstrBind<ActionsProps> | undefined' },
  { name: 'actionsHide', type: 'boolean | undefined' },
  { name: 'actionsList', type: '(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string | undefined; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined' },
  { name: 'actionsSecondary', type: '(ConstrBind<ButtonProps>[] & Record<string, any> & { key?: string | undefined; class?: ConstrClass | undefined; style?: ConstrStyles | undefined; }) | undefined' },
  { name: 'ariaLive', type: 'string', option: ['off', 'polite', 'assertive'] },
  { name: 'button', type: 'string | number | ConstrBind<ButtonProps> | undefined' },
  { name: 'closeButton', type: 'boolean | undefined' },
  { name: 'component', type: 'any' },
  { name: 'componentProps', type: 'object | undefined' },
  { name: 'description', type: 'string | number | undefined' },
  { name: 'descriptionId', type: 'string | undefined' },
  { name: 'error', type: 'boolean | undefined' },
  { name: 'html', type: 'string | undefined' },
  { name: 'icon', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps> | undefined' },
  { name: 'iconClose', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconDir', type: 'boolean | undefined' },
  { name: 'iconHide', type: 'boolean | undefined' },
  { name: 'iconPalette', type: 'boolean | undefined' },
  { name: 'iconTrailing', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconTrailingDirOnly', type: 'boolean | undefined' },
  { name: 'iconTrailingPalette', type: 'boolean | undefined' },
  { name: 'iconTrailingTurnOnly', type: 'boolean | undefined' },
  { name: 'iconTurn', type: 'boolean | undefined' },
  { name: 'label', type: 'NumberOrString | undefined' },
  { name: 'labelId', type: 'string | undefined' },
  { name: 'palette', type: 'string | undefined', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'role', type: 'string | undefined' },
  { name: 'selected', type: 'boolean | undefined' },
  { name: 'success', type: 'boolean | undefined' },
  { name: 'textClose', type: 'TextValue' },
  { name: 'value', type: 'string | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'body', description: `Slot for the notification body/ Слот для содержимого уведомления`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'description', description: `Description slot/ Слот описания`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'actions', description: `Click event for actions/ Событие клика для действий`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'actionsLite', description: `Simple click event for actions/ Простое событие клика для действий`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'close', description: `Event triggered when notification is closed/ Событие при закрытии уведомления`, properties: [{ name: 'value', type: 'string | undefined' }] }
  // :eventsList [!] System label / Системная метка
]

export const SnackbarItemWikiData: WikiDataItem = {
  component: 'SnackbarItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
