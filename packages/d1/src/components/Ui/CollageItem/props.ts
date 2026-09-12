import { type CollageItemPropsBasic, defaultsCollageItem } from '@dxtmisha/constructor/CollageItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  span: ['banner', 'huge', 'large', 'tall', 'wide']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  selected?: boolean
  span?: 'banner' | 'huge' | 'large' | 'tall' | 'wide'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type CollageItemProps = CollageItemPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsCollageItem,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
