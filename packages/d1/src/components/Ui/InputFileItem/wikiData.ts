import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'appearance', type: 'string', option: ['list', 'compact', 'tile'] },
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonProps>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'file', type: 'File' },
  { name: 'focus', type: 'boolean' },
  { name: 'iconDelete', type: 'string' },
  { name: 'iconError', type: 'string' },
  { name: 'iconRetry', type: 'string' },
  { name: 'iconSuccess', type: 'string' },
  { name: 'image', type: 'string | ConstrBind<ImageProps>' },
  { name: 'imageAttrs', type: 'ConstrBind<ImageProps>' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressProps>' },
  { name: 'palette', type: 'string', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'readonly', type: 'boolean' },
  { name: 'selected', type: 'boolean' },
  { name: 'status', type: 'string', option: ['uploading', 'uploaded', 'error', 'idle'] },
  { name: 'textDelete', type: 'TextValue' },
  { name: 'textError', type: 'TextValue' },
  { name: 'textLoadingFile', type: 'TextValue' },
  { name: 'textRetry', type: 'TextValue' },
  { name: 'textUploadSuccess', type: 'TextValue' },
  { name: 'value', type: 'FieldFileValue' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'actions', description: `Actions slot / Слот действий`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'default', description: `Default slot / Слот по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'thumbnail', description: `Thumbnail slot / Слот миниатюры`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'delete', description: `Delete event / Событие удаления`, properties: [{ name: 'file?', type: 'FieldFileValue | undefined' }] },
  { name: 'retry', description: `Retry event / Событие повтора`, properties: [{ name: 'file?', type: 'FieldFileValue | undefined' }] }
  // :eventsList [!] System label / Системная метка
]

export const InputFileItemWikiData: WikiDataItem = {
  component: 'InputFileItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
