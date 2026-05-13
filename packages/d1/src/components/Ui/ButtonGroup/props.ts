import { type ButtonGroupPropsBasic, defaultsButtonGroup } from '@dxtmisha/constructor/ButtonGroup'
import type { ButtonProps } from '../Button'

export const propsValues = {
  // :values [!] System label / Системная метка
  orientation: ['horizontal', 'vertical']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  orientation?: string | 'horizontal' | 'vertical'
  wrap?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ButtonGroupProps = ButtonGroupPropsBasic<ButtonProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsButtonGroup,
  ...{
    // :default [!] System label / Системная метка
    orientation: 'horizontal'
    // :default [!] System label / Системная метка
  }
}
