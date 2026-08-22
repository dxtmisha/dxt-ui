import type { FieldStepProps } from '../../types/fieldTypes'
import type { ModelProps } from '../../types/modelTypes'
import type { CropAreaCoordinator } from './basicTypes'

/** Type describing token properties / Тип, описывающий свойства токенов */
type CropAreaPropsToken = {
  // :type [!] System label / Системная метка
  readonly?: boolean
  disabled?: boolean
  disabledTop?: boolean
  disabledRight?: boolean
  disabledBottom?: boolean
  disabledLeft?: boolean
  // :type [!] System label / Системная метка
}

/** Type describing basic properties / Тип, описывающий базовые свойства */
export type CropAreaPropsBasic = ModelProps<any>
  & FieldStepProps
  & {
    /** Initial coordinate values [top, right, bottom, left] / Начальные значения координат [сверху, справа, снизу, слева] */
    value?: CropAreaCoordinator

    /** Tab index order / Порядок табуляции */
    tabindex?: number | string

    /** HTML tag of the wrapper element / HTML-тег элемента обертки */
    tag?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type CropAreaProps = CropAreaPropsBasic & CropAreaPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsCropArea = {
  min: 8,
  step: 1,
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
