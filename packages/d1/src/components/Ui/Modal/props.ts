import { type ModalPropsBasic, defaultsModal } from '@dxtmisha/constructor/Modal'

export const propsValues = {
  // :values [!] System label / Системная метка
  imagePosition: ['top', 'left'],
  width: ['sm', 'md', 'lg', 'xl', 'auto']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  imagePosition?: 'top' | 'left'
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'auto'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ModalProps = ModalPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsModal,
  ...{
    // :default [!] System label / Системная метка
    imagePosition: 'top',
    width: 'md'
    // :default [!] System label / Системная метка
  }
}
