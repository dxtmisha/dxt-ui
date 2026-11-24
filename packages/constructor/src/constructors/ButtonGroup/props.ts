import type { ConstrBind } from '@dxtmisha/functional'

import type { AreaPropsInclude } from '../../types/areaTypes'
import type {
  AriaLabelPropsInclude,
  AriaRolePropsInclude
} from '../../types/ariaTypes'
import type { ButtonPropsBasic } from '../Button'
import type { SkeletonPropsInclude } from '../Skeleton'

/**
 * Token properties for ButtonGroup component /
 * Токен-свойства компонента ButtonGroup
 */
export type ButtonGroupPropsToken = {
  // :type [!] System label / Системная метка
  orientation?: 'horizontal' | 'vertical'
  wrap?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Basic properties for ButtonGroup component /
 * Базовые свойства компонента ButtonGroup
 */
export type ButtonGroupPropsBasic<
  Button extends ButtonPropsBasic = ButtonPropsBasic
> = AreaPropsInclude
  & AriaLabelPropsInclude
  & AriaRolePropsInclude
  & SkeletonPropsInclude
  & {
    // Value
    /** Primary list of button configurations / Основной список конфигураций кнопок */
    list?: readonly ConstrBind<Button>[]

    // Style
    /** Shared attributes for buttons / Общие атрибуты для кнопок */
    buttonAttrs?: ConstrBind<Button>
  }

/**
 * Type describing incoming properties /
 * Тип, описывающий входящие свойства
 */
export type ButtonGroupProps = ButtonGroupPropsBasic & ButtonGroupPropsToken

/**
 * Default value for property /
 * Значение по умолчанию для свойства
 */
export const defaultsButtonGroup: ButtonGroupProps = {
  area: 'button-group',
  role: 'group',
  ...{
    // :default [!] System label / Системная метка
    orientation: 'horizontal'
    // :default [!] System label / Системная метка
  }
}
