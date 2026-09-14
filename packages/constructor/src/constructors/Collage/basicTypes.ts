import type { ConstrBind } from '@dxtmisha/functional'

import type { CollageItemPropsBasic } from '../CollageItem'
import type { CollagePropsBasic } from './props'

/**
 * Provide name for collage layout update callback. /
 * Название provide для функции обновления макета коллажа.
 */
export const COLLAGE_NAME_UPDATE = 'collage-update'

/**
 * Type describing a grouped row of collage elements with its center coordinate. /
 * Тип, описывающий сгруппированную строку элементов коллажа с её координатой центра.
 */
export type CollageElementRow = {
  /** Vertical center coordinate of the row / Вертикальная координата центра строки */
  center: number
  /** Elements located in this row / Элементы, расположенные в этой строке */
  items: HTMLElement[]
}

/**
 * Callback function for requesting collage layout recalculation. /
 * Функция обратного вызова для запроса перерасчета макета коллажа.
 */
export type CollageUpdate = () => void

/**
 * Type for including Collage component. /
 * Тип для подключения компонента Collage.
 */
export type CollageComponentInclude = {
  /** Collage component configuration / Конфигурация компонента Collage */
  collage?: object
}

/**
 * Type for embedding Collage properties in other components. /
 * Тип для внедрения свойств Collage в другие компоненты.
 */
export type CollagePropsInclude<
  CollageItem extends CollageItemPropsBasic = CollageItemPropsBasic,
  Collage extends CollagePropsBasic<CollageItem> = CollagePropsBasic<CollageItem>
> = {
  /** Bound attributes passed directly to the Collage component / Атрибуты, передаваемые напрямую в компонент Collage */
  collageAttrs?: ConstrBind<Collage>
}
