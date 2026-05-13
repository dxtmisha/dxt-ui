import type { ConstrBind } from '@dxtmisha/functional'

import type { ButtonPropsBasic } from '../Button'
import type { AreaPropsInclude } from '../../types/areaTypes'

type ButtonGroupPropsToken = {
  // :type [!] System label / Системная метка
  orientation?: 'horizontal' | 'vertical'
  wrap?: boolean
  // :type [!] System label / Системная метка
}

export type ButtonGroupPropsBasic<
  Button extends ButtonPropsBasic = ButtonPropsBasic
> = AreaPropsInclude
  & {
    // Value
    /** Primary list of button configurations/ Основной список конфигураций кнопок */
    list?: ConstrBind<Button>[]

    // Style
    /** Shared attributes for buttons/ Общие атрибуты для кнопок */
    buttonAttrs?: ConstrBind<Button>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ButtonGroupProps = ButtonGroupPropsBasic & ButtonGroupPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsButtonGroup = {
  area: 'button-group',
  ...{
    // :default [!] System label / Системная метка
    orientation: 'horizontal'
    // :default [!] System label / Системная метка
  }
}
