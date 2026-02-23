import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'

import type { FieldInputCheckProps } from '../../types/fieldTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { ModelProps } from '../../types/modelTypes'

import type { IconPropsBasic, IconValue } from '../Icon'
import type { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { SkeletonPropsInclude } from '../Skeleton'

type CheckboxPropsToken = {
  // :type [!] System label / Системная метка
  required?: boolean
  block?: boolean
  itemCenter?: boolean
  right?: boolean
  focus?: boolean
  disabled?: boolean
  // :type [!] System label / Системная метка
}

export type CheckboxPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = LabelProps
  & DescriptionProps
  & FieldMessagePropsInclude<FieldMessage, FieldCounter>
  & FieldInputCheckProps
  & ProgressPropsInclude<Progress>
  & EnabledProps
  & ModelProps
  & SkeletonPropsInclude
  & {
    // Icon
    iconCheckbox?: IconValue<Icon>
    iconIndeterminate?: IconValue<Icon>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type CheckboxProps = CheckboxPropsBasic & CheckboxPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsCheckbox = {
  valueVariantHide: '0',
  ...{
    // :default [!] System label / Системная метка
    itemCenter: true
    // :default [!] System label / Системная метка
  }
}
