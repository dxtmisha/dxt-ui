import type { CollageElement } from './CollageElement'

/**
 * Class managing dynamic styles, item CSS properties, and grow factors for Collage.
 *
 * Класс, управляющий динамическими стилями, пользовательскими свойствами CSS и коэффициентами роста элементов для Collage.
 */
export class CollageStyle {
  /** Property names mapping / Карта имен свойств */
  readonly property: {
    /** CSS custom property for item grow factor / Пользовательское CSS-свойство для коэффициента роста элемента */
    grow: string
  }

  /**
   * Constructor for CollageStyle.
   *
   * Конструктор для CollageStyle.
   * @param className base class name of the component / базовое имя класса компонента
   * @param element manager for container DOM elements / менеджер DOM-элементов контейнера
   */
  constructor(
    protected readonly className: string,
    protected readonly element?: CollageElement
  ) {
    this.property = {
      grow: `--${className}-sys-item-grow`
    }
  }

  /**
   * Sets the grow factor CSS custom property on the given item element.
   *
   * Устанавливает пользовательское CSS-свойство коэффициента роста на указанном элементе.
   * @param itemElement target item element / целевой элемент
   * @param grow grow factor value / значение коэффициента роста
   */
  setGrow(itemElement: HTMLElement, grow: number | string): void {
    itemElement.style.setProperty(this.property.grow, String(grow))
  }

  /**
   * Resets the grow factor CSS custom property on all items.
   *
   * Сбрасывает пользовательское CSS-свойство коэффициента роста на всех элементах.
   */
  resetGrow(): void {
    this.element?.getItems().forEach(
      itemElement => this.resetGrowItem(itemElement)
    )
  }

  /**
   * Resets the grow factor CSS custom property on the given item element.
   *
   * Сбрасывает пользовательское CSS-свойство коэффициента роста на указанном элементе.
   * @param itemElement target item element / целевой элемент
   */
  resetGrowItem(itemElement: HTMLElement): void {
    itemElement.style.removeProperty(this.property.grow)
  }
}
