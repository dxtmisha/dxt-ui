import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'counter', type: 'string | number' },
  { name: 'counterId', type: 'string' },
  { name: 'counterShow', type: 'boolean' },
  { name: 'counterTemplate', type: 'string' },
  { name: 'disabled', type: 'boolean' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterPropsBasic>' },
  { name: 'forceShow', type: 'boolean' },
  { name: 'helperId', type: 'string' },
  { name: 'helperMessage', type: 'string' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'maxlength', type: 'string | number' },
  { name: 'validationId', type: 'string' },
  { name: 'validationMessage', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'helper', description: `Slot for helper message/ Слот для вспомогательного сообщения`, properties: [{ name: 'props', type: 'FieldMessageSlot' }] },
  { name: 'validation', description: `Slot for validation message/Слот для сообщения об ошибке`, properties: [{ name: 'props', type: 'FieldMessageSlot' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const FieldMessageWikiData: WikiDataItem = {
  component: 'FieldMessage',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
