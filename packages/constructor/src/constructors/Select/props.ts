import type { IconPropsBasic, IconValue } from '../Icon'
import type { FieldPropsBasic, FieldPropsInclude } from '../Field'
import type { FieldLabelPropsBasic } from '../FieldLabel'
import type { FieldMessagePropsBasic } from '../FieldMessage'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { ProgressPropsBasic } from '../Progress'
import type { FieldSelectProps } from '../../types/fieldTypes.ts'

interface SelectPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface SelectPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Field extends FieldPropsBasic = FieldPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> extends FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>,
  FieldSelectProps {
  // Value
  editValue?: boolean

  // Style
  hideList?: boolean
  showSearch?: boolean

  iconArrowDown?: IconValue<Icon>
  iconSearch?: IconValue<Icon>
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface SelectProps extends SelectPropsBasic, SelectPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSelect = {
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
