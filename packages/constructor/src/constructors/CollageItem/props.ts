import type { ImagePropsBasic, ImagePropsInclude } from '../Image'
import type { IconPropsBasic, IconValue } from '../Icon'
import type { CollageBarPropsBasic, CollageBarPropsInclude } from '../CollageBar'

import type { EventClickProps } from '../../types/eventClickTypes'

type CollageItemPropsToken = {
  // :type [!] System label / Системная метка
  selected?: boolean
  span?: 'banner' | 'huge' | 'large' | 'tall' | 'wide'
  // :type [!] System label / Системная метка
}

export type CollageItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Image extends ImagePropsBasic = ImagePropsBasic,
  CollageBar extends CollageBarPropsBasic = CollageBarPropsBasic
> = ImagePropsInclude<Image>
  & CollageBarPropsInclude<CollageBar>
  & EventClickProps
  & {
    /** Image coordinator for cropping or positioning / Координаты изображения для обрезки или позиционирования */
    coordinator?: number[] | any
    /** Image X position / Позиция изображения по оси X */
    x?: string | number
    /** Image Y position / Позиция изображения по оси Y */
    y?: string | number

    /** HTML tag for the body element / HTML-тег для элемента тела */
    tag?: string

    /** Icon for the check indicator / Иконка для индикатора выбора */
    iconCheck?: IconValue<Icon>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type CollageItemProps = CollageItemPropsBasic & CollageItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsCollageItem = {
  tag: 'a',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
