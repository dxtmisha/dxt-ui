/** Event parameters for the DraggableWrapper component / Параметры события для компонента DraggableWrapper */
export interface DraggableWrapperEventParameters {
  /** Active draggable element / Активный перемещаемый элемент */
  active: HTMLElement
  /** Target drop element / Целевой элемент сброса */
  to?: HTMLElement
  /** Selected elements stack / Стек выбранных элементов */
  selection?: HTMLElement[]

  /** Array of values: [activeValue, toValue] / Массив значений: [activeValue, toValue] */
  value: (string | undefined)[]
  /** Value of the active element / Значение активного элемента */
  valueActive?: string
  /** Value of the target element / Значение целевого элемента */
  valueTo?: string
  /** Array of values of selected elements / Массив значений выбранных элементов */
  valueSelection: (string | undefined)[]

  /** DOM layout direction / Направление структуры DOM */
  before?: boolean
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

/** Type describing lists of classes for DraggableWrapper / Тип, описывающий список классов для DraggableWrapper */
export type DraggableWrapperClassesList = {
  /** Class for trigger element / Класс для элемента-триггера */
  click: string
  /** Class for drop target area / Класс для области сброса */
  drop: string
  /** Class for element defining position / Класс для элемента, определяющего позицию */
  position: string
  /** Class for active element being dragged / Класс для активного перетаскиваемого элемента */
  active: string
  /** Class indicating drag target spot / Класс, указывающий на целевое место перетаскивания */
  go: string
  /** Class for additional selected elements / Класс для дополнительных выбранных элементов */
  selection: string
  /** Class for overflow selected elements / Класс для избыточных выбранных элементов */
  selectionMore: string
  /** Class for element returning to position / Класс для возвращающегося в позицию элемента */
  return: string
  /** Class for showing the spacer element / Класс для отображения элемента-заполнителя */
  show: string
  /** Class for active target drop area / Класс для активной целевой области сброса */
  dragged: string
  /** Class for selected elements / Класс для выбранных элементов */
  selected: string
  /** Class for blocking text selection / Класс для блокировки выделения текста */
  body: string
}
