import type { ConstrClass } from '@dxtmisha/functional'
import type { DraggableWrapperControl, DraggableWrapperEventParameters } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work /
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type DraggableWrapperComponents = {
}

/**
 * Type describing available events /
 * Тип, описывающий доступные события.
 */
export type DraggableWrapperEmits = {
  /** Event triggered when dragging completes on a target drop element / Событие, вызываемое при завершении перетаскивания на целевой элемент сброса */
  drop: [parameters: DraggableWrapperEventParameters]
  /** Event triggered when dragging completes on a sorting position / Событие, вызываемое при завершении перетаскивания на позицию сортировки */
  position: [parameters: DraggableWrapperEventParameters]
}

/**
 * Type describing available properties /
 * Тип, описывающий доступные свойства.
 */
export interface DraggableWrapperExpose {
  /**
   * Helper method to calculate the reordered array after a drop /
   * Вспомогательный метод для расчета переупорядоченного массива после сброса
   * @param values original array of items / исходный массив элементов
   * @param parameters event parameters from the drop event / параметры события сброса
   * @returns new reordered array / новый переупорядоченный массив
   */
  toNewPosition<T extends { value?: any }>(
    values: T[],
    parameters: DraggableWrapperEventParameters
  ): T[]
}

/**
 * Type describing available slots /
 * Тип, описывающий доступные слоты.
 */
export interface DraggableWrapperSlots {
  /** Default slot containing the draggable children / Дефолтный слот, содержащий перетаскиваемые дочерние элементы */
  default?(props: DraggableWrapperControl): any
}

/**
 * Type describing subclasses /
 * Тип, описывающий подклассы.
 */
export type DraggableWrapperClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  square: string
  // :classes [!] System label / Системная метка
}
