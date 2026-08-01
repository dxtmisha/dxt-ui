import type { MotionFlipElementSizeRect } from './basicTypes'
import { MotionFlipElement } from './MotionFlipElement'

/**
 * Class for managing individual FLIP item elements.
 * Calculates bounding rectangles and manages system CSS properties for smooth transition.
 *
 * Класс для управления отдельными элементами FLIP.
 * Вычисляет прямоугольники размеров и управляет системными CSS-свойствами для плавного перехода.
 */
export class MotionFlipItem {
  /** Original element size and position rectangle / Исходный прямоугольник размера и положения элемента */
  protected original?: MotionFlipElementSizeRect

  /**
   * Constructor
   * @param element item HTML element / HTML-элемент элемента
   * @param elementManager main element manager instance / главный экземпляр менеджера элемента
   */
  constructor(
    protected readonly element: HTMLElement,
    protected readonly elementManager: MotionFlipElement
  ) { }

  /**
   * Checks if target element matches this item HTML element.
   *
   * Проверяет, совпадает ли целевой элемент с HTML-элементом этого элемента.
   * @param target target element / целевой элемент
   * @returns true if elements match / true, если элементы совпадают
   */
  isElement(target?: HTMLElement | null): boolean {
    return this.element === target
  }

  /**
   * Updates CSS position and size variables for the item element based on original rectangle.
   *
   * Обновляет переменные CSS положения и размера для элемента на основе исходного прямоугольника.
   * @returns current instance / текущий экземпляр
   */
  update(): this {
    if (this.original) {
      const currentRectangle = this.element.getBoundingClientRect()

      this
        .setStyle('top', this.original.top - currentRectangle.top)
        .setStyle('left', this.original.left - currentRectangle.left)
        .setStyle('width', currentRectangle.width)
        .setStyle('width-to', this.original.width)
        .setStyle('height', currentRectangle.height)
        .setStyle('height-to', this.original.height)
        .addClass()
    }

    return this
  }

  /**
   * Removes item sub-class and resets system CSS properties on the element.
   *
   * Удаляет подкласс элемента и сбрасывает системные CSS-свойства с элемента.
   * @returns current instance / текущий экземпляр
   */
  reset(): this {
    return this
      .resetStyle()
      .removeClass()
  }

  /**
   * Initializes and caches the original size and position rectangle.
   *
   * Инициализирует и кэширует исходный прямоугольник размера и положения.
   * @returns current instance / текущий экземпляр
   */
  initOriginalSize(): this {
    const rectangle = this.element.getBoundingClientRect()

    this.original = {
      top: rectangle.top,
      left: rectangle.left,
      width: rectangle.width,
      height: rectangle.height
    }

    return this
  }

  /**
   * Returns item sub-class name.
   *
   * Возвращает название подкласса элемента.
   * @returns item class name string / строка названия класса элемента
   */
  protected getItemClassName(): string {
    return `${this.elementManager.getClassName()}__item`
  }

  /**
   * Sets a custom CSS property on the item element.
   *
   * Устанавливает кастомное CSS-свойство для элемента.
   * @param name property name / название свойства
   * @param value property numeric value / числовое значение свойства
   * @returns current instance / текущий экземпляр
   */
  protected setStyle(name: string, value: number): this {
    const className = this.elementManager.getClassName()
    this.element.style.setProperty(`--${className}-sys-${name}`, `${value}px`)
    return this
  }

  /**
   * Adds item sub-class to the element.
   *
   * Добавляет подкласс элемента на элемент.
   * @returns current instance / текущий экземпляр
   */
  protected addClass(): this {
    this.element.classList.add(this.getItemClassName())
    return this
  }

  /**
   * Removes item sub-class from the element.
   *
   * Удаляет подкласс элемента с элемента.
   * @returns current instance / текущий экземпляр
   */
  protected removeClass(): this {
    this.element.classList.remove(this.getItemClassName())
    return this
  }

  /**
   * Removes a custom CSS property from the item element.
   *
   * Удаляет кастомное CSS-свойство с элемента.
   * @param name property name / название свойства
   * @returns current instance / текущий экземпляр
   */
  protected removeStyle(name: string): this {
    const className = this.elementManager.getClassName()
    this.element.style.removeProperty(`--${className}-sys-${name}`)
    return this
  }

  /**
   * Resets system CSS properties on the item element.
   *
   * Сбрасывает системные CSS-свойства с элемента.
   * @returns current instance / текущий экземпляр
   */
  protected resetStyle(): this {
    this
      .removeStyle('top')
      .removeStyle('left')
      .removeStyle('width')
      .removeStyle('width-to')
      .removeStyle('height')
      .removeStyle('height-to')

    return this
  }
}
