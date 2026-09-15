import type { CollageElement } from './CollageElement'

/**
 * Class managing item grow factors and CSS properties for Collage. /
 * Класс, управляющий коэффициентами роста элементов и пользовательскими свойствами CSS для Collage.
 */
export class CollageGrow {
  /** CSS custom property for item grow factor / Пользовательское CSS-свойство для коэффициента роста элемента */
  readonly propertyGrow: string

  /**
   * Constructor for CollageGrow. /
   * Конструктор для CollageGrow.
   * @param className base class name of the component / базовое имя класса компонента
   * @param element manager for container DOM elements / менеджер DOM-элементов контейнера
   */
  constructor(
    protected readonly className: string,
    protected readonly element?: CollageElement
  ) {
    this.propertyGrow = `--${className}-sys-item-grow`
  }

  /**
   * Sets the grow factor CSS custom property on the given item element. /
   * Устанавливает пользовательское CSS-свойство коэффициента роста на указанном элементе.
   * @param itemElement target item element / целевой элемент
   * @param grow grow factor value / значение коэффициента роста
   */
  setGrow(itemElement: HTMLElement, grow: number | string): void {
    itemElement.style.setProperty(this.propertyGrow, String(grow))
  }

  /**
   * Resets the grow factor CSS custom property on all items. /
   * Сбрасывает пользовательское CSS-свойство коэффициента роста на всех элементах.
   */
  resetGrow(): void {
    this.element?.getItems().forEach(
      itemElement => this.resetGrowItem(itemElement)
    )
  }

  /**
   * Resets the grow factor CSS custom property on the given item element. /
   * Сбрасывает пользовательское CSS-свойство коэффициента роста на указанном элементе.
   * @param itemElement target item element / целевой элемент
   */
  resetGrowItem(itemElement: HTMLElement): void {
    itemElement.style.removeProperty(this.propertyGrow)
  }
}
