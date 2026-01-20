import type { ConstrBind } from '@dxtmisha/functional'

import type { IconPropsBasic, IconValue } from '../Icon'
import type { FieldPropsBasic, FieldPropsInclude } from '../Field'
import type { FieldLabelPropsBasic } from '../FieldLabel'
import type { FieldMessagePropsBasic } from '../FieldMessage'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { InputPropsBasic } from '../Input'
import type { ProgressPropsBasic } from '../Progress'
import type { MenuPropsBasic, MenuPropsInclude } from '../Menu'

import type { FieldSelectProps } from '../../types/fieldTypes'

export type SelectPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type SelectPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Field extends FieldPropsBasic = FieldPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Input extends InputPropsBasic = InputPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic,
  Menu extends MenuPropsBasic = MenuPropsBasic
> = FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>
  & FieldSelectProps
  & MenuPropsInclude<Menu> & {
  // Value
    editValue?: boolean

    // Style
    hideList?: boolean
    showSearch?: boolean
    filterMode?: boolean

    iconArrowDown?: IconValue<Icon>
    iconSearch?: IconValue<Icon>

    inputSearchAttrs?: ConstrBind<Input>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SelectProps = SelectPropsBasic & SelectPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSelect = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
