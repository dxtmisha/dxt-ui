import { type ActionsPropsBasic, defaultsActions } from '@dxtmisha/constructor/Actions'
import type { ButtonProps } from '../Button'

export const propsValues = {
  // :values [!] System label / Системная метка
  align: ['none', 'center', 'left', 'right', 'block'],
  flexible: ['adaptiveSm', 'adaptiveMd', 'adaptiveLg', 'adaptiveXl', 'adaptive2xl', 'containerSm', 'containerMd', 'containerLg', 'containerXl', 'container2xl'],
  padding: ['sm', 'md', 'lg', 'ySm', 'yMd', 'yLg', 'none']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  align?: 'none' | 'center' | 'left' | 'right' | 'block'
  flexible?: 'adaptiveSm' | 'adaptiveMd' | 'adaptiveLg' | 'adaptiveXl' | 'adaptive2xl' | 'containerSm' | 'containerMd' | 'containerLg' | 'containerXl' | 'container2xl'
  padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none'
  paddingByIndent?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface ActionsProps extends ActionsPropsBasic<ButtonProps>, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsActions,
  buttonSecondaryAttrs: {
    text: true,
    inverse: true
  },
  ...{
    // :default [!] System label / Системная метка
    align: 'right',
    paddingByIndent: true
    // :default [!] System label / Системная метка
  }
}
