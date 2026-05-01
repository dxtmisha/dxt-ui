import { type GridItemPropsBasic, defaultsGridItem } from '@dxtmisha/constructor/GridItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  base: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  sm: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  md: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  lg: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  xl: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  xl2: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  base?: string | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  sm?: string | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  md?: string | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  lg?: string | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  xl?: string | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  xl2?: string | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type GridItemProps = GridItemPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsGridItem,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
