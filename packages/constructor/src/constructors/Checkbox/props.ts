import type { ConstrBind } from '@dxtmisha/functional'

import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'

import type { FieldInputCheckProps } from '../../types/fieldTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { ModelProps } from '../../types/modelTypes'

import type { ImagePropsBasic } from '../Image'
import type { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { SkeletonPropsInclude } from '../Skeleton'

type CheckboxPropsToken = {
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

export type CheckboxPropsBasic<
  Image extends ImagePropsBasic = ImagePropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = LabelProps
  & DescriptionProps
  & FieldMessagePropsInclude<FieldMessage, FieldCounter>
  & FieldInputCheckProps
  & ProgressPropsInclude<Progress>
  & EnabledProps
  & ModelProps<boolean>
  & SkeletonPropsInclude
  & {
    /** Icon/ Иконка */
    /** Icon for the checked state/ Иконка для отмеченного состояния */
    iconCheckbox?: string | ConstrBind<Image> | null
    /** Icon for the indeterminate state/ Иконка для неопределенного состояния */
    iconIndeterminate?: string | ConstrBind<Image> | null
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
    block: true,
    itemCenter: true
    // :default [!] System label / Системная метка
  }
}
