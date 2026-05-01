import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string | undefined', option: ['center', 'right', 'left'] },
  { name: 'arrowAlign', type: 'string | undefined', option: ['center', 'right', 'left'] },
  { name: 'arrowCarousel', type: 'boolean | undefined' },
  { name: 'arrowStepper', type: 'boolean | undefined' },
  { name: 'basic', type: 'boolean | undefined' },
  { name: 'block', type: 'boolean | undefined' },
  { name: 'boxed', type: 'boolean | undefined' },
  { name: 'cancel', type: 'string | undefined', option: ['auto', 'always', 'none'] },
  { name: 'cancelShow', type: 'boolean | undefined' },
  { name: 'caption', type: 'string | number | undefined' },
  { name: 'captionDecorative', type: 'boolean | undefined' },
  { name: 'classic', type: 'boolean | undefined' },
  { name: 'counter', type: 'string | number | undefined' },
  { name: 'counterId', type: 'string | undefined' },
  { name: 'counterShow', type: 'boolean | undefined' },
  { name: 'counterTemplate', type: 'string | undefined' },
  { name: 'counterTop', type: 'boolean | undefined' },
  { name: 'detail', type: 'Record<string, any> | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'disabledNext', type: 'boolean | undefined' },
  { name: 'disabledPrevious', type: 'boolean | undefined' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterProps> | undefined' },
  { name: 'fieldLabelAttrs', type: 'ConstrBind<FieldLabelProps> | undefined' },
  { name: 'fieldMessageAttrs', type: 'ConstrBind<FieldMessageProps> | undefined' },
  { name: 'filled', type: 'boolean | undefined' },
  { name: 'focus', type: 'boolean | undefined' },
  { name: 'forceShowMessage', type: 'boolean | undefined' },
  { name: 'helperId', type: 'string | undefined' },
  { name: 'helperMessage', type: 'string | undefined' },
  { name: 'href', type: 'string | undefined' },
  { name: 'icon', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconArrowLeft', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconArrowRight', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps> | undefined' },
  { name: 'iconClose', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconDir', type: 'boolean | undefined' },
  { name: 'iconHide', type: 'boolean | undefined' },
  { name: 'iconMinus', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconPalette', type: 'boolean | undefined' },
  { name: 'iconPlus', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconTrailing', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconTrailingDirOnly', type: 'boolean | undefined' },
  { name: 'iconTrailingPalette', type: 'boolean | undefined' },
  { name: 'iconTrailingTurnOnly', type: 'boolean | undefined' },
  { name: 'iconTurn', type: 'boolean | undefined' },
  { name: 'id', type: 'string | number | undefined' },
  { name: 'isSkeleton', type: 'boolean | undefined' },
  { name: 'isValue', type: 'boolean | undefined' },
  { name: 'label', type: 'NumberOrString | undefined' },
  { name: 'labelId', type: 'string | undefined' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressProps> | undefined' },
  { name: 'maxlength', type: 'string | number | undefined' },
  { name: 'outlined', type: 'boolean | undefined' },
  { name: 'prefix', type: 'string | number | undefined' },
  { name: 'prefixId', type: 'string | undefined' },
  { name: 'readonly', type: 'boolean | undefined' },
  { name: 'required', type: 'boolean | undefined' },
  { name: 'selected', type: 'boolean | undefined' },
  { name: 'size', type: 'string | undefined', option: ['sm', 'md', 'lg', 'display'] },
  { name: 'suffix', type: 'string | number | undefined' },
  { name: 'suffixId', type: 'string | undefined' },
  { name: 'textCancel', type: 'TextValue' },
  { name: 'to', type: 'string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined' },
  { name: 'tonal', type: 'boolean | undefined' },
  { name: 'validationId', type: 'string | undefined' },
  { name: 'validationMessage', type: 'string | undefined' },
  { name: 'value', type: 'EventClickValue[\'value\']' },
  { name: 'width', type: 'string | undefined', option: ['custom'] }
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
