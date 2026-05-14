import type { ImagePropsBasic } from '../Image'
import type { FieldMessagePropsBasic } from '../FieldMessage'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { ProgressPropsBasic } from '../Progress'
import type { CheckboxPropsBasic } from '../Checkbox'

type SwitchPropsToken = {
  // :type [!] System label / Системная метка
  block?: boolean
  adaptive?: 'rightAlways'
  container?: boolean
  required?: boolean
  itemCenter?: boolean
  comp?: boolean | 'item' | true
  focus?: boolean
  disabled?: boolean
  // :type [!] System label / Системная метка
}

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
  valueVariantHide: '0',
  ...{
    // :default [!] System label / Системная метка
    block: true,
    itemCenter: true
    // :default [!] System label / Системная метка
  }
}
