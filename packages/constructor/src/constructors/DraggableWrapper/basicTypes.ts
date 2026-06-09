/**
 * Event parameters for the DraggableWrapper component /
 * Параметры события для компонента DraggableWrapper
 */
export interface DraggableWrapperEventParameters {
  /** Active draggable element / Активный перемещаемый элемент */
  active: HTMLElement
  /** Selected elements stack / Стек выбранных элементов */
  selection?: HTMLElement[]
  /** Target drop element / Целевой элемент сброса */
  to?: HTMLElement
  /** Array of values: [activeValue, toValue] / Массив значений: [activeValue, toValue] */
  value: (string | undefined)[]
  /** Array of values of selected elements / Массив значений выбранных элементов */
  valueSelection: (string | undefined)[]
  /** DOM layout direction / Направление структуры DOM */
  before?: boolean
  /** Value of the active element / Значение активного элемента */
  valueActive?: string
  /** Value of the target element / Значение целевого элемента */
  valueTo?: string
}

/**
 * Type describing the coordinates and status of the mouse /
 * Тип, описывающий координаты и статус мыши
 */
export interface DraggableWrapperClient {
  x: number
  y: number
  drop: boolean
}

/**
 * Type describing control class properties for child elements /
 * Тип, описывающий свойства управляющих классов для дочерних элементов
 */
export type DraggableWrapperControl = {
  /** Combined CSS class name for child items / Комбинированное имя класса CSS для дочерних элементов */
  className: string
  /** CSS class for trigger element of drag / Класс CSS для элемента триггера перетаскивания */
  classClick: string
  /** CSS class for drop target areas / Класс CSS для областей сброса */
  classDrop: string
  /** CSS class for standard draggable items / Класс CSS для стандартных перемещаемых элементов */
  classPosition: string
}

/**
 * Type describing lists of classes for DraggableWrapper /
 * Тип, описывающий список классов для DraggableWrapper
 */
export type DraggableWrapperClassesList = {
  click: string
  drop: string
  position: string
  active: string
  go: string
  selection: string
  selectionMore: string
  return: string
  show: string
  dragged: string
  selected: string
  body: string
}
