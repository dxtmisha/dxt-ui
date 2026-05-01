import type { AriaLabelPropsInclude } from '../../types/ariaTypes'
import type { TextLoadingPropsInclude } from '../../types/textTypes'
import type { ClientOnlyPropsInclude } from '../../types/clientOnlyTypes'

export type ProgressPropsToken = {
  // :type [!] System label / Системная метка
  point?: boolean
  linear?: boolean
  circular?: boolean
  indeterminate?: string | 'type1' | 'type2' | 'type3'
  position?: string | 'top' | 'bottom' | 'static'
  dense?: boolean
  inverse?: boolean
  // :type [!] System label / Системная метка
}

export type ProgressPropsBasic = AriaLabelPropsInclude
  & TextLoadingPropsInclude
  & ClientOnlyPropsInclude
  & {
    /** Status/ Статус */
    /** Whether the progress is visible/ Видим ли прогресс */
    visible?: boolean

    /** Value/ Значения */
    /** Current progress value/ Текущее значение прогресса */
    value?: number | string
    /** Maximum progress value/ Максимальное значение прогресса */
    max?: number | string

    /** Style/ Стили */
    /** Whether to use linear progress/ Использовать ли линейный прогресс */
    linear?: boolean
    /** Whether to use circular progress/ Использовать ли круговой прогресс */
    circular?: boolean
    /** Whether to use point progress/ Использовать ли точечный прогресс */
    point?: boolean

    /** Delay before showing/ Задержка перед показом */
    delay?: number | string
    /** Delay before hiding/ Задержка перед скрытием */
    delayHide?: number | string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ProgressProps = ProgressPropsBasic & ProgressPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsProgress = {
  clientOnly: true,
  max: 100,
  delay: 360,
  delayHide: 200,
  ...{
    // :default [!] System label / Системная метка
    linear: true,
    indeterminate: 'type1',
    position: 'top'
    // :default [!] System label / Системная метка
  }
}
