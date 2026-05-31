import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['center', 'right', 'left'] },
  { name: 'arrowAlign', type: 'string', option: ['center', 'right', 'left'] },
  { name: 'arrowCarousel', type: 'boolean' },
  { name: 'arrowStepper', type: 'boolean' },
  { name: 'basic', type: 'boolean' },
  { name: 'block', type: 'boolean' },
  { name: 'boxed', type: 'boolean' },
  { name: 'cancel', type: 'string', option: ['auto', 'always', 'none'] },
  { name: 'cancelShow', type: 'boolean' },
  { name: 'caption', type: 'string | number' },
  { name: 'captionDecorative', type: 'boolean' },
  { name: 'classic', type: 'boolean' },
  { name: 'counter', type: 'string | number' },
  { name: 'counterId', type: 'string' },
  { name: 'counterShow', type: 'boolean' },
  { name: 'counterTemplate', type: 'string' },
  { name: 'counterTop', type: 'boolean' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'disabledNext', type: 'boolean' },
  { name: 'disabledPrevious', type: 'boolean' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterProps>' },
  { name: 'fieldLabelAttrs', type: 'ConstrBind<FieldLabelProps>' },
  { name: 'fieldMessageAttrs', type: 'ConstrBind<FieldMessageProps>' },
  { name: 'filled', type: 'boolean' },
  { name: 'focus', type: 'boolean' },
  { name: 'forceShowMessage', type: 'boolean' },
  { name: 'hasHtmlCode', type: 'boolean' },
  { name: 'helperId', type: 'string' },
  { name: 'helperMessage', type: 'string' },
  { name: 'href', type: 'string' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconArrowLeft', type: 'IconValue<IconProps>' },
  { name: 'iconArrowRight', type: 'IconValue<IconProps>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps>' },
  { name: 'iconClose', type: 'IconValue<IconProps>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconMinus', type: 'IconValue<IconProps>' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconPlus', type: 'IconValue<IconProps>' },
  { name: 'iconTrailing', type: 'IconValue<IconProps>' },
  { name: 'iconTrailingDirOnly', type: 'boolean' },
  { name: 'iconTrailingPalette', type: 'boolean' },
  { name: 'iconTrailingTurnOnly', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'id', type: 'string | number' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'isValue', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressProps>' },
  { name: 'maxlength', type: 'string | number' },
  { name: 'outlined', type: 'boolean' },
  { name: 'prefix', type: 'string | number' },
  { name: 'prefixId', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'required', type: 'boolean' },
  { name: 'selected', type: 'boolean' },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg', 'display'] },
  { name: 'suffix', type: 'string | number' },
  { name: 'suffixId', type: 'string' },
  { name: 'textCancel', type: 'TextValue' },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric' },
  { name: 'tonal', type: 'boolean' },
  { name: 'validationId', type: 'string' },
  { name: 'validationMessage', type: 'string' },
  { name: 'value', type: 'EventClickValue[\'value\']' },
  { name: 'width', type: 'string', option: ['custom'] }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'caption', description: `Caption slot/ Слот заголовка`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'default', description: `Default slot for the input element/ Слот по умолчанию для элемента ввода`, properties: [{ name: 'props', type: '(FieldControl) | undefined' }] },
  { name: 'label', description: `Label slot content/ Содержимое слота метки`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'leading', description: `Slot for displaying content before the input area/ Слот для отображения контента перед областью ввода`, properties: [{ name: 'props', type: '(FieldControl) | undefined' }] },
  { name: 'prefix', description: `Prefix slot/ Слот префикса`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'suffix', description: `Suffix slot/ Слот суффикса`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'trailing', description: `Slot for displaying content after the input area/ Слот для отображения контента после области ввода`, properties: [{ name: 'props', type: '(FieldControl) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] }
  // :eventsList [!] System label / Системная метка
]

export const FieldWikiData: WikiDataItem = {
  component: 'Field',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
