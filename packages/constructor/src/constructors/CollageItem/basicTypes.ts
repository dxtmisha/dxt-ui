import type { ConstrBind } from '@dxtmisha/functional'
import type { CollageItemPropsBasic } from './props'

export {
  COLLAGE_NAME_UPDATE,
  type CollageUpdate
} from '../Collage/basicTypes'

/**
 * Base scale factor for converting aspect ratio to integer grid tracks. /
 * Базовый масштабный коэффициент для перевода соотношения сторон в целые единицы сетки.
 */
export const COLLAGE_ITEM_SCALE = 10

/**
 * Type for including CollageItem component. /
 * Тип для подключения компонента CollageItem.
 */
export type CollageItemComponentInclude = {
  /** CollageItem component configuration / Конфигурация компонента CollageItem */
  collageItem?: object
}

/**
 * Type for embedding CollageItem properties in other components. /
 * Тип для внедрения свойств CollageItem в другие компоненты.
 */
export type CollageItemPropsInclude<
  CollageItem extends CollageItemPropsBasic = CollageItemPropsBasic
> = {
  /** Bound attributes passed directly to the CollageItem component / Атрибуты, передаваемые напрямую в компонент CollageItem */
  collageItemAttrs?: ConstrBind<CollageItem>
}

/**
 * Type describing dimensional exposed properties. /
 * Тип, описывающий экспонируемые свойства размеров.
 */
export type CollageItemDimensionsExpose = {
  /** Gets computed height factor / Получает вычисленный коэффициент высоты */
  getHeight(): number | undefined

  /** Gets computed width factor / Получает вычисленный коэффициент ширины */
  getWidth(): number | undefined
}
