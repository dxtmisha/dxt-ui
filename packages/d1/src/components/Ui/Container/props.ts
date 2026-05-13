import { type ContainerPropsBasic, defaultsContainer } from '@dxtmisha/constructor/Container'

export const propsValues = {
  // :values [!] System label / Системная метка
  align: ['left', 'center', 'right']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  align?: 'left' | 'center' | 'right'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ContainerProps = ContainerPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsContainer,
  ...{
    // :default [!] System label / Системная метка
    align: 'center'
    // :default [!] System label / Системная метка
  }
}
