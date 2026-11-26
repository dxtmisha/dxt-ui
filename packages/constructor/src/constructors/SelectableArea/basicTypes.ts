/** Event parameters for the SelectableArea component / Параметры события для компонента SelectableArea */
export interface SelectableAreaEventParameters {
  /** All items in the area / Все элементы в области */
  items: HTMLElement[]
  /** Items that are currently selected / Элементы, которые в данный момент выбраны */
  itemsSelected: HTMLElement[]
  /** Array of values of selected elements / Массив значений выбранных элементов */
  selected: string[]
  /** Value of the last focused element / Значение последнего сфокусированного элемента */
  focus?: string
}

/**
 * Type describing control class properties for child elements /
 * Тип, описывающий свойства управляющих классов для дочерних элементов
 */
export type SelectableAreaControl = {
  /** Combined CSS class name for child items / Комбинированное имя класса CSS для дочерних элементов */
  className: string
  /** Combined CSS class for selected child items / Комбинированный класс CSS для выбранных дочерних элементов */
  classSelection: string
  /** CSS class for trigger element of click / Класс CSS для элемента триггера клика */
  classClick: string
  /** Function to handle item click / Функция для обработки клика по элементу */
  onClick: (event: MouseEvent | TouchEvent) => void
  /** Function to handle keyboard selection and Escape reset / Функция для обработки клавиатурного выбора и сброса по Escape */
  onKeydown: (event: KeyboardEvent) => void
  /** Array of currently selected item values / Массив значений текущих выбранных элементов */
  selected: string[]
}

/** Type describing lists of classes for SelectableArea / Тип, описывающий список классов для SelectableArea */
export type SelectableAreaClassesList = {
  /** Class for click element / Класс для элемента клика */
  click: string
  /** Class for selected element / Класс для выбранного элемента */
  selected: string
  /** Class for showing the selection square element / Класс для отображения элемента-квадрата выделения */
  show: string
  /** Class for blocking text selection / Класс для блокировки выделения текста */
  body: string
}
