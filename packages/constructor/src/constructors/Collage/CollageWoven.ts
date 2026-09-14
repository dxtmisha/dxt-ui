import type { CollageElement } from './CollageElement'
import type { CollageEven } from './CollageEven'

/**
 * Class managing woven appearance layout, compact item states, and even state for Collage. /
 * Класс, управляющий макетом внешнего вида woven, компактными состояниями элементов и состоянием четности для Collage.
 */
export class CollageWoven {
  /** Class name for compact items in woven appearance / Имя класса для компактных элементов в woven режиме */
  readonly classCompact: string

  /**
   * Constructor for CollageWoven. /
   * Конструктор для CollageWoven.
   * @param className base class name of the component / базовое имя класса компонента
   * @param element manager for container DOM elements / менеджер DOM-элементов контейнера
   * @param even manager for even layout state / менеджер состояния четности макета
   */
  constructor(
    protected readonly className: string,
    protected readonly element?: CollageElement,
    protected readonly even?: CollageEven
  ) {
    this.classCompact = `${className}-item--compact`
  }

  /**
   * Toggles the compact class on the given item element. /
   * Переключает класс компактности на указанном элементе.
   * @param itemElement target item element / целевой элемент
   * @param compactState compact state flag / флаг состояния компактности
   */
  setCompact(itemElement: HTMLElement, compactState: boolean): void {
    itemElement.classList.toggle(this.classCompact, compactState)
  }

  /**
   * Recalculates woven layout alternating items and even state. /
   * Пересчитывает макет woven, чередуя элементы и состояние четности.
   */
  resize(): void {
    requestAnimationFrame(() => {
      if (!this.element?.is()) {
        return
      }

      const items = this.element.getItems()
      const columns = this.getColumns(items)

      if (columns <= 0) {
        this.even?.set(false)
        return
      }

      items.forEach((itemElement, index) => {
        const rowIndex = Math.floor(index / columns)
        const colIndex = index % columns
        const isCompact = (rowIndex + colIndex) % 2 === 1

        this.setCompact(itemElement, isCompact)
      })

      this.even?.set(columns % 2 === 0)
    })
  }

  /**
   * Calculates column count based on item positions along the left edge. /
   * Вычисляет количество колонок на основе позиций элементов по левому краю.
   * @param items array of item elements / массив элементов
   * @returns calculated column count / вычисленное количество колонок
   */
  protected getColumns(items: HTMLElement[]): number {
    if (items.length === 0) {
      return 0
    }

    let previousLeft = items[0].getBoundingClientRect().left

    for (let index = 1; index < items.length; index++) {
      const currentLeft = items[index].getBoundingClientRect().left

      if (currentLeft <= previousLeft) {
        return index
      }

      previousLeft = currentLeft
    }

    return items.length
  }
}
