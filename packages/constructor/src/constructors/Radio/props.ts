import type { ImagePropsBasic } from '../Image'
import type { FieldMessagePropsBasic } from '../FieldMessage'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { ProgressPropsBasic } from '../Progress'

import type { CheckboxPropsBasic } from '../Checkbox'

/**
 * Type describing token properties for Radio.
 *
 * Тип, описывающий свойства токенов для Radio.
 */
type RadioPropsToken = {
  // :type [!] System label / Системная метка
  block?: boolean
  adaptive?: 'rightAlways'
  container?: boolean
  required?: boolean
  itemCenter?: boolean
  focus?: boolean
  disabled?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Interface describing basic properties of the Radio component.
 *
 * Интерфейс, описывающий базовые свойства компонента Radio.
 */
export type RadioPropsBasic<
  Image extends ImagePropsBasic = ImagePropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = CheckboxPropsBasic<Image, FieldMessage, FieldCounter, Progress>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type RadioProps = RadioPropsBasic & RadioPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsRadio = {
  modelValue: undefined,
  valueVariant: undefined,
  valueVariantHide: '0',
  ...{
    // :default [!] System label / Системная метка
    block: true,
    itemCenter: true
    // :default [!] System label / Системная метка
  }
}
