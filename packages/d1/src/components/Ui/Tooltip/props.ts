import { type TooltipPropsBasic, defaultsTooltip } from '@dxtmisha/constructor/Tooltip'

export const propsValues = {
  // :values [!] System label / Системная метка
  maxWidth: ['sm', 'md', 'lg']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  maxWidth?: 'sm' | 'md' | 'lg'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface TooltipProps extends TooltipPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTooltip,
  ...{
    // :default [!] System label / Системная метка
    maxWidth: 'md'
    // :default [!] System label / Системная метка
  }
}
