import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['left', 'right'] },
  { name: 'check', type: 'FieldPatternItemOrFunction' },
  { name: 'currency', type: 'string' },
  { name: 'currencyHide', type: 'boolean' },
  { name: 'dir', type: 'string', option: ['ltr', 'rtl'] },
  { name: 'fraction', type: 'MaskFractionItem' },
  { name: 'fullOnly', type: 'boolean' },
  { name: 'groupSave', type: 'boolean' },
  { name: 'inputAttrs', type: 'Partial<HTMLInputElement>' },
  { name: 'language', type: 'string' },
  { name: 'mask', type: 'MaskList' },
  { name: 'match', type: 'MaskMatchItem' },
  { name: 'name', type: 'string' },
  { name: 'pattern', type: 'FieldPatternItemOrFunction' },
  { name: 'special', type: 'MaskSpecialProp' },
  { name: 'type', type: 'string', option: ['number', 'full', 'datetime', 'date', 'year-month', 'year', 'month', 'day', 'day-month', 'time', 'hour-minute', 'hour', 'minute', 'second', 'text', 'number-format', 'currency'] },
  { name: 'value', type: 'string | number' },
  { name: 'valueDefault', type: 'string | number' },
  { name: 'view', type: 'string' },
  { name: 'visible', type: 'boolean' },
  { name: 'visiblePartly', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const MaskWikiStorybook = new WikiStorybook(
  'Mask',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
