import { type CollageItemPropsBasic, defaultsCollageItem } from '@dxtmisha/constructor/CollageItem'

import type { IconProps } from '../Icon'
import type { ImageProps } from '../Image'
import type { CollageBarProps } from '../CollageBar'

export const propsValues = {
  // :values [!] System label / Системная метка
  span: ['standard', 'banner', 'huge', 'large', 'tall', 'wide']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  compact?: boolean
  focus?: boolean
  selected?: boolean
  span?: 'standard' | 'banner' | 'huge' | 'large' | 'tall' | 'wide'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type CollageItemProps = CollageItemPropsBasic<
  IconProps,
  ImageProps,
  CollageBarProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsCollageItem,
  ...{
    // :default [!] System label / Системная метка
    span: 'standard'
    // :default [!] System label / Системная метка
  }
}
