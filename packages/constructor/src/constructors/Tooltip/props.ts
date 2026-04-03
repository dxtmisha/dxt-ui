import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'

import type { ArrowProps, ArrowPropsInclude } from '../Arrow'

export type TooltipPropsToken = {
  // :type [!] System label / Системная метка
  interactive?: boolean
  embedded?: boolean
  // :type [!] System label / Системная метка
}

export type TooltipPropsBasic<
  Arrow extends ArrowProps = ArrowProps
> = LabelProps
  & DescriptionProps
  & ArrowPropsInclude<Arrow>
  & {
    /** Status/ Статусы */
    /** Whether the tooltip is open/ Открыт ли тултип */
    open?: boolean
    /** Whether the tooltip is disabled/ Отключен ли тултип */
    disabled?: boolean

    /** Style/ Стили */
    /** Whether the tooltip should always be in the DOM/ Должен ли тултип всегда находиться в DOM */
    inDom?: boolean
    /** Whether to display the tooltip at the top by default/ Отображать ли тултип сверху по умолчанию */
    top?: boolean
    /** Indent from the control element/ Отступ от управляющего элемента */
    indent?: number
    /** Delay before showing the tooltip/ Задержка перед показом тултипа */
    delay?: number
    /** Delay before hiding the tooltip/ Задержка перед скрытием тултипа */
    delayHide?: number

    // Technical
    /**
     * The window will be displayed inside the current parent element/
     * Окно будет отображаться внутри текущего родительского элемента
     */
    embedded?: boolean
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TooltipProps = TooltipPropsBasic & TooltipPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTooltip = {
  indent: 4,
  delay: 64,
  delayHide: 0,
  ...{
    // :default [!] System label / Системная метка
    interactive: true
    // :default [!] System label / Системная метка
  }
}
