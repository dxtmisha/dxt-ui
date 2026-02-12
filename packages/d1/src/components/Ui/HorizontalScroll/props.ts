import { type HorizontalScrollPropsBasic, defaultsHorizontalScroll } from '@dxtmisha/constructor/HorizontalScroll'

export const propsValues = {
  // :values [!] System label / Системная метка
  align: ['left', 'center', 'end']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  align?: 'left' | 'center' | 'end'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type HorizontalScrollProps =  HorizontalScrollPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsHorizontalScroll,
  ...{
    // :default [!] System label / Системная метка
    align: 'left'
    // :default [!] System label / Системная метка
  }
}
