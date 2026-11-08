import type { VNode } from 'vue'
import type { ConstrClass, ConstrItem } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ComponentOutletComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ComponentOutletEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ComponentOutletExpose<
  ElementType = Element
> {
  /** Returns the resolved component instance or DOM element / Возвращает экземпляр разрешённого компонента или DOM-элемент */
  getElement<T = ElementType>(): T | undefined
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ComponentOutletSlots {
  /** Default slot forwarded to the resolved component / Слот по умолчанию, передаваемый в разрешённый компонент */
  default?(props: ConstrItem): VNode[]
  /** Named slots forwarded to the resolved component / Именованные слоты, передаваемые в разрешённый компонент */
  [key: string]: ((props: ConstrItem) => VNode[]) | undefined
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ComponentOutletClasses = {
  /** Root element classes / Классы корневого элемента */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
