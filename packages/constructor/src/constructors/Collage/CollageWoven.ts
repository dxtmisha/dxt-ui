import type { CollageElement } from './CollageElement'

/**
 * Class managing woven variant layout and compact item states for Collage. /
 * Класс, управляющий макетом варианта woven и компактными состояниями элементов для Collage.
 */
export class CollageWoven {
  /** Class name for compact items in woven variant / Имя класса для компактных элементов в woven режиме */
  readonly classCompact: string

  /**
   * Constructor for CollageWoven. /
   * Конструктор для CollageWoven.
   * @param className base class name of the component / базовое имя класса компонента
   * @param element manager for container DOM elements / менеджер DOM-элементов контейнера
   */
  constructor(
    protected readonly className: string,
    protected readonly element?: CollageElement
  ) {
    this.classCompact = `${className}-item--compact`
  }

  /**
   * Recalculates woven layout alternating items. /
   * Пересчитывает макет woven, чередуя элементы.
   */
  resize(): void {
    requestAnimationFrame(() => {
      if (!this.element?.is()) {
        return
      }

      const items = this.element.getItems()
      const columns = this.getColumns(items)

      if (columns <= 0) {
        return
      }

      items.forEach((itemElement, index) => {
        const rowIndex = Math.floor(index / columns)
        const colIndex = index % columns
        const isCompact = (rowIndex + colIndex) % 2 === 1

        this.setCompact(itemElement, isCompact)
      })
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

    let previousLeft = items[0].offsetLeft

    for (let index = 1; index < items.length; index++) {
      const currentLeft = items[index].offsetLeft

      if (currentLeft <= previousLeft) {
        return index
      }

      previousLeft = currentLeft
    }

    return items.length
  }

  /**
   * Toggles the compact class on the given item element. /
   * Переключает класс компактности на указанном элементе.
   * @param itemElement target item element / целевой элемент
   * @param compactState compact state flag / флаг состояния компактности
   */
  protected setCompact(itemElement: HTMLElement, compactState: boolean): void {
    console.log('compactState', compactState)
    itemElement.classList.toggle(this.classCompact, compactState)
  }
}
