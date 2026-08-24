import type { ConstrBind } from '@dxtmisha/functional'
import type { CropAreaPropsBasic } from './props'

/**
 * Coordinate array format [top, right, bottom, left] in percentages /
 * Формат массива координат [сверху, справа, снизу, слева] в процентах
 */
export type CropAreaCoordinator = [number, number, number, number]

/** Single edge direction / Направление отдельного края */
export type CropAreaDirectionSingle
  = | 'top'
    | 'right'
    | 'bottom'
    | 'left'

/** Available crop manipulation directions / Доступные направления манипуляции кадрированием */
export type CropAreaDirection
  = | CropAreaDirectionSingle
    | 'right-top'
    | 'right-bottom'
    | 'left-top'
    | 'left-bottom'
    | 'center'

/** Position index map item / Элемент карты индексов позиций */
export type CropAreaPositionItem = {
  /** Target coordinate index / Индекс целевой координаты */
  index: number
  /** Opposite coordinate index / Индекс противоположной координаты */
  opposite: number
}

/** Position index map for single edges / Карта индексов позиций для отдельных краев */
export type CropAreaPositionMap = Record<CropAreaDirectionSingle, CropAreaPositionItem>

/** Event parameters for the CropArea component / Параметры события для компонента CropArea */
export interface CropAreaEventParameters {
  /** Direction of the handle or drag area / Направление ручки или области перетаскивания */
  direction: CropAreaDirection
  /** Resized single coordinate value / Измененное значение отдельной координаты */
  value: number
  /** Full current coordinator array / Полный текущий массив координат */
  coordinator: CropAreaCoordinator
}

/** CropArea component dependency registration / Регистрация зависимости компонента CropArea */
export type CropAreaComponentInclude = {
  /** CropArea component configuration / Конфигурация компонента CropArea */
  cropArea?: object
}

/** Props for embedding CropArea inside another component / Свойства для встраивания CropArea внутри другого компонента */
export type CropAreaPropsInclude<
  CropArea extends CropAreaPropsBasic = CropAreaPropsBasic
> = {
  /** Bound attributes passed directly to CropArea / Атрибуты привязки, передаваемые напрямую в CropArea */
  cropAreaAttrs?: ConstrBind<CropArea>
}
