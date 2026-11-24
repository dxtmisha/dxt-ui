import type { ImageProps, ImagePropsBasic, ImagePropsInclude } from '../Image'
import type { IconPropsBasic, IconValue } from '../Icon'
import type { CollageBarPropsBasic, CollageBarPropsInclude } from '../CollageBar'

import type { EventClickProps } from '../../types/eventClickTypes'

/** Token-generated properties / Свойства, сгенерированные из токенов */
type CollageItemPropsToken = {
  // :type [!] System label / Системная метка
  compact?: boolean
  focus?: boolean
  selected?: boolean
  span?: 'standard' | 'banner' | 'huge' | 'large' | 'tall' | 'wide'
  // :type [!] System label / Системная метка
}

/**
 * Type describing basic incoming properties /
 * Тип, описывающий базовые входящие свойства
 */
export type CollageItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Image extends ImagePropsBasic = ImagePropsBasic,
  CollageBar extends CollageBarPropsBasic = CollageBarPropsBasic
> = ImagePropsInclude<Image>
  & CollageBarPropsInclude<CollageBar>
  & EventClickProps
  & {
    /** Image size / Размер изображения */
    size?: ImageProps['size']

    /** Image coordinator for cropping or positioning / Координаты изображения для обрезки или позиционирования */
    coordinator?: ImageProps['coordinator']
    /** Image X position / Позиция изображения по оси X */
    x?: ImageProps['x']
    /** Image Y position / Позиция изображения по оси Y */
    y?: ImageProps['y']

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
    span: 'standard'
    // :default [!] System label / Системная метка
  }
}
