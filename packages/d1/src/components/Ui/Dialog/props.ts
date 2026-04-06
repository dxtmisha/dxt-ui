import { type DialogPropsBasic, defaultsDialog } from '@dxtmisha/constructor/Dialog'

export const propsValues = {
  // :values [!] System label / Системная метка
  imagePosition: ['top', 'left'],
  width: ['sm', 'md', 'lg', 'auto']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  success?: boolean
  error?: boolean
  imagePosition?: 'top' | 'left'
  width?: 'sm' | 'md' | 'lg' | 'auto'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type DialogProps = DialogPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsDialog,
  buttonClose: {
    outline: true
  },
  ...{
    // :default [!] System label / Системная метка
    imagePosition: 'top',
    width: 'md'
    // :default [!] System label / Системная метка
  }
}
