import type { CheckboxPropsBasic } from '../Checkbox'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { FieldMessagePropsBasic } from '../FieldMessage'
import type { ImagePropsBasic } from '../Image'
import type { ProgressPropsBasic } from '../Progress'

/**
 * Type describing token properties for Switch.
 *
 * Тип, описывающий свойства токенов для Switch.
 */
type SwitchPropsToken = {
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
 * Interface describing basic properties of the Switch component.
 *
 * Интерфейс, описывающий базовые свойства компонента Switch.
 */
export type SwitchPropsBasic<
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
export type SwitchProps = SwitchPropsBasic & SwitchPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSwitch = {
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
