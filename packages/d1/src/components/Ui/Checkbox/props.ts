import { type CheckboxPropsBasic, defaultsCheckbox } from '@dxtmisha/constructor/Checkbox'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['rightAlways', 'rightSm', 'rightMd', 'rightLg', 'rightXl', 'right2xl'],
  container: ['rightSm', 'rightMd', 'rightLg', 'rightXl', 'right2xl']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  block?: boolean
  adaptive?: 'rightAlways' | 'rightSm' | 'rightMd' | 'rightLg' | 'rightXl' | 'right2xl'
  container?: 'rightSm' | 'rightMd' | 'rightLg' | 'rightXl' | 'right2xl'
  required?: boolean
  itemCenter?: boolean
  focus?: boolean
  disabled?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type CheckboxProps = CheckboxPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsCheckbox,
  ...{
    // :default [!] System label / Системная метка
    block: true,
    itemCenter: true
    // :default [!] System label / Системная метка
  }
}
