import type { AreaProps } from '../../types/areaTypes'

type ContainerPropsToken = {
  // :type [!] System label / Системная метка
  align?: 'left' | 'center' | 'right'
  // :type [!] System label / Системная метка
}

export type ContainerPropsBasic = AreaProps & {}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ContainerProps = ContainerPropsBasic & ContainerPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsContainer = {
  area: 'container',
  ...{
    // :default [!] System label / Системная метка
    align: 'center'
    // :default [!] System label / Системная метка
  }
}
