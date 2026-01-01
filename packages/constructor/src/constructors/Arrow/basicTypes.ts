import type { ConstrBind } from '@dxtmisha/functional'
import type { ArrowProps } from './props'

/** Arrow direction enum / Направление стрелки перечисление */
export enum ArrowDirection {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
  HIDE = 'hide'
}

export type ArrowBorder = {
  top: number
  bottom: number
  left: number
  right: number
}

export type ArrowCenter = {
  x: number
  y: number
}

/**
 * Component map for including the Arrow component/
 * Карта компонентов для подключения компонента Arrow
 */
export type ArrowComponentInclude = {
  arrow?: object
}

/**
 * Props used to include and configure the Arrow component/
 * Свойства для подключения и настройки компонента Arrow
 */
export interface ArrowPropsInclude<
  Arrow extends ArrowProps = ArrowProps
> {
  // Status
  /** Show arrow/ Показать стрелку */
  arrowShow?: boolean

  /** Arrow position/ Позиция стрелки */
  arrowPosition?: ArrowProps['position']

  // Style
  /** Additional attributes for Arrow component/ Дополнительные атрибуты для компонента Arrow */
  arrowAttrs?: ConstrBind<Arrow>
}
