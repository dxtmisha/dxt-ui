// ai-none

import type { DesignName } from '@dxtmisha/functional'

import type { CollageElement } from './CollageElement'
import type { CollageProps } from './props'

/**
 * Class managing item grow factors and CSS custom properties for Collage.
 *
 * Класс, управляющий коэффициентами роста элементов и пользовательскими свойствами CSS для Collage.
 */
export class CollageGrow {
  /**
   * Checks if the current collage variant uses grow factors.
   *
   * Проверяет, использует ли текущий вариант коллажа коэффициенты роста.
   * @param props component properties / свойства компонента
   * @returns true if grow calculations are needed / true, если требуются расчёты коэффициентов роста
   */
  static is(props?: Readonly<CollageProps>): boolean {
    return props?.variant === 'masonryHorizontal'
      || props?.variant === 'masonryVertical'
  }

  /** CSS custom property for item grow factor / Пользовательское CSS-свойство для коэффициента роста элемента */
  readonly propertyGrow: string

  /**
   * Constructor for CollageGrow.
   *
   * Конструктор для CollageGrow.
   * @param naming component naming helper / помощник именования компонента
   * @param elementItem getter returning container DOM element manager / геттер, возвращающий менеджер DOM-элементов контейнера
   */
  constructor(
    protected readonly naming: DesignName,
    protected readonly elementItem: () => CollageElement
  ) {
    this.propertyGrow = naming.getStyle('item-grow')
  }

  /**
   * Sets the grow factor CSS custom property on the given item element.
   *
   * Устанавливает пользовательское CSS-свойство коэффициента роста на указанном элементе.
   * @param itemElement target item element / целевой элемент
   * @param grow grow factor value / значение коэффициента роста
   */
  setGrow(itemElement: HTMLElement, grow: number | string): void {
    itemElement.style.setProperty(this.propertyGrow, String(grow))
  }

  /**
   * Resets the grow factor CSS custom property on all items.
   *
   * Сбрасывает пользовательское CSS-свойство коэффициента роста на всех элементах.
   */
  resetGrow(): void {
    this.elementItem().getItems().forEach(
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
    itemElement.style.removeProperty(this.propertyGrow)
  }
}
