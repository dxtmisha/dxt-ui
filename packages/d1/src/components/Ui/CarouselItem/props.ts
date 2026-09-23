import { type CarouselItemPropsBasic, defaultsCarouselItem } from '@dxtmisha/constructor/CarouselItem'
import type { ImageProps } from '../Image'

export const propsValues = {
  // :values [!] System label / Системная метка
  snap: ['start', 'center', 'end', 'none']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  selected?: boolean
  snap?: 'start' | 'center' | 'end' | 'none'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type CarouselItemProps = CarouselItemPropsBasic<ImageProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsCarouselItem,
  ...{
    // :default [!] System label / Системная метка
    snap: 'start'
    // :default [!] System label / Системная метка
  }
}
