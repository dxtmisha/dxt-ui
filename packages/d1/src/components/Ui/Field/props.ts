import { type FieldPropsBasic, defaultsField } from '@dxt-ui/constructor/Field'

export const propsValues = {
  // :values [!] System label / Системная метка
  align: ['center', 'right', 'left'],
  width: []
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  readonly?: boolean
  block?: boolean
  isValue?: boolean
  basic?: boolean
  classic?: boolean
  tonal?: boolean
  filled?: boolean
  outlined?: boolean
  arrow?: boolean
  align?: 'center' | 'right' | 'left'
  width?: string | 'custom'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface FieldProps extends FieldPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsField,
  ...{
    // :default [!] System label / Системная метка
    classic: true,
    align: 'center'
    // :default [!] System label / Системная метка
  }
}
