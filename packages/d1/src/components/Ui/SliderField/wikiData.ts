import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'counter', type: 'string | number' },
  { name: 'counterId', type: 'string' },
  { name: 'counterShow', type: 'boolean' },
  { name: 'counterTemplate', type: 'string' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterPropsBasic>' },
  { name: 'fieldLabelAttrs', type: 'ConstrBind<FieldLabelProps>' },
  { name: 'fieldMessageAttrs', type: 'ConstrBind<FieldMessageProps>' },
  { name: 'forceShowMessage', type: 'boolean' },
  { name: 'hasHtmlCode', type: 'boolean' },
  { name: 'helperId', type: 'string' },
  { name: 'helperMessage', type: 'string' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTrailing', type: 'IconValue<IconProps>' },
  { name: 'iconTrailingDirOnly', type: 'boolean' },
  { name: 'iconTrailingPalette', type: 'boolean' },
  { name: 'iconTrailingTurnOnly', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'inputAttrs', type: 'Partial<HTMLInputElement>' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'labelLeading', type: 'string' },
  { name: 'labelSeparator', type: 'string' },
  { name: 'labelTrailing', type: 'string' },
  { name: 'magnet', type: 'boolean' },
  { name: 'marks', type: 'number[] | ListRecord<SliderMarkItem>' },
  { name: 'max', type: 'NumberOrString' },
  { name: 'maxlength', type: 'string | number' },
  { name: 'min', type: 'NumberOrString' },
  { name: 'minimumDistance', type: 'NumberOrString' },
  { name: 'modelValue', type: '([number, number] & string)' },
  { name: 'multiple', type: 'boolean' },
  { name: 'name', type: 'string' },
  { name: 'onUpdate:modelValue', type: '(((value: SliderValueType) => void) & ((value: string) => void))' },
  { name: 'onUpdate:value', type: '(((value: SliderValueType) => void) & ((value: string) => void))' },
  { name: 'placeholder', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'required', type: 'boolean' },
  { name: 'selected', type: 'boolean' },
  { name: 'showInput', type: 'boolean' },
  { name: 'showThumbLabel', type: 'boolean' },
  { name: 'showValue', type: 'boolean' },
  { name: 'showValueInLabel', type: 'boolean' },
  { name: 'sliderAttrs', type: 'SliderProps' },
  { name: 'step', type: 'NumberOrString' },
  { name: 'validationId', type: 'string' },
  { name: 'validationMessage', type: 'string' },
  { name: 'value', type: '(SliderValueType & SliderValueProp)' },
  { name: 'vertical', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'label', description: `Label slot content/ Содержимое слота метки`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'leading', properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'mark', description: `Slot for mark custom rendering / Слот для пользовательского рендеринга метки`, properties: [{ name: 'props', type: '(SliderMarkSlot) | undefined' }] },
  { name: 'maxLabel', description: `Slot for max thumb label / Слот для метки максимального ползунка`, properties: [{ name: 'props', type: '(SliderThumbSlot) | undefined' }] },
  { name: 'minLabel', description: `Slot for min thumb label / Слот для метки минимального ползунка`, properties: [{ name: 'props', type: '(SliderThumbSlot) | undefined' }] },
  { name: 'trailing', properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'change', description: `Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`, properties: [{ name: 'event', type: 'InputEvent | Event' }, { name: 'value', type: 'FieldValidationItem<SliderValueType>' }] },
  { name: 'changeLite', description: `Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`, properties: [{ name: 'value', type: 'FieldValidationItem<SliderValueType>' }] },
  { name: 'input', description: `Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`, properties: [{ name: 'event', type: 'InputEvent | Event' }, { name: 'value', type: 'FieldValidationItem<SliderValueType>' }] },
  { name: 'inputLite', description: `Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`, properties: [{ name: 'value', type: 'FieldValidationItem<SliderValueType>' }] },
  { name: 'update:modelValue', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'SliderValueType' }] },
  { name: 'update:value', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'SliderValueType' }] }
  // :eventsList [!] System label / Системная метка
]

export const SliderFieldWikiData: WikiDataItem = {
  component: 'SliderField',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
