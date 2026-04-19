import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'ariaLabel', type: 'string | undefined' },
  { name: 'circular', type: 'boolean | undefined' },
  { name: 'delay', type: 'string | number | undefined' },
  { name: 'delayHide', type: 'string | number | undefined' },
  { name: 'dense', type: 'boolean | undefined' },
  { name: 'indeterminate', type: 'string', option: ['type1', 'type2', 'type3'] },
  { name: 'inverse', type: 'boolean | undefined' },
  { name: 'linear', type: 'boolean | undefined' },
  { name: 'max', type: 'string | number | undefined' },
  { name: 'palette', type: 'string', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'point', type: 'boolean | undefined' },
  { name: 'position', type: 'string', option: ['top', 'bottom', 'static'] },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg'] },
  { name: 'textLoading', type: 'TextValue' },
  { name: 'value', type: 'string | number | undefined' },
  { name: 'visible', type: 'boolean | undefined' }
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

export const ProgressWikiData: WikiDataItem = {
  component: 'Progress',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
