import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'counter', type: 'string | number | undefined' },
  { name: 'counterId', type: 'string | undefined' },
  { name: 'counterShow', type: 'boolean | undefined' },
  { name: 'counterTemplate', type: 'string | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterProps> | undefined' },
  { name: 'forceShow', type: 'boolean | undefined' },
  { name: 'helperId', type: 'string | undefined' },
  { name: 'helperMessage', type: 'string | undefined' },
  { name: 'isSkeleton', type: 'boolean | undefined' },
  { name: 'maxlength', type: 'string | number | undefined' },
  { name: 'validationId', type: 'string | undefined' },
  { name: 'validationMessage', type: 'string | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'helper', description: `Slot for helper message/ Слот для вспомогательного сообщения`, properties: [{ name: 'props', type: '(FieldMessageSlot) | undefined' }] },
  { name: 'validation', description: `Slot for validation message/Слот для сообщения об ошибке`, properties: [{ name: 'props', type: '(FieldMessageSlot) | undefined' }] }
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
