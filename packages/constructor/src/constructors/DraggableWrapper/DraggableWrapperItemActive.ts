import { ref } from 'vue'
import type { ImageCoordinator } from '@dxtmisha/functional-basic'

import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'

/**
 * Class for managing the active draggable item during dragging session.
 *
 * Класс для управления активным перетаскиваемым элементом во время сессии перетаскивания.
 */
export class DraggableWrapperItemActive {
  /** Target active element / Целевой активный элемент */
  protected readonly item = ref<HTMLElement>()

  /** Property names map / Карта имен свойств */
  protected readonly property: {
    /** CSS property for item width / Свойство CSS для ширины элемента */
    width: string
    /** CSS property for item height / Свойство CSS для высоты элемента */
    height: string
    /** CSS property for item rotation / Свойство CSS для поворота элемента */
    rotate: string
    /** CSS property for X offset shift / Свойство CSS для смещения по оси X */
    shiftX: string
    /** CSS property for Y offset shift / Свойство CSS для смещения по оси Y */
    shiftY: string
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param classes classes helper instance / экземпляр помощника по классам
   */
  constructor(
    protected readonly classes: DraggableWrapperClassesData
  ) {
    const className = this.classes.getName()

    this.property = {
      width: `--${className}-sys-item-width`,
      height: `--${className}-sys-item-height`,
      rotate: `--${className}-sys-item-rotate`,
      shiftX: `--${className}-sys-item-shift-x`,
      shiftY: `--${className}-sys-item-shift-y`
    }
  }

  /**
   * Checks if an active item is defined.
   *
   * Проверяет, определен ли активный элемент.
   * @returns check result / результат проверки
   */
  is(): boolean {
    return Boolean(this.item.value)
  }

  /**
   * Returns the active item.
   *
   * Возвращает активный элемент.
   * @returns active element or undefined / активный элемент или undefined
   */
  get(): HTMLElement | undefined {
    return this.item.value
  }

  /**
   * Sets the active element.
   *
   * Устанавливает активный элемент.
   * @param value active element or undefined / активный элемент или undefined
   * @returns this instance / текущий экземпляр класса
   */
  set(value: HTMLElement | undefined): this {
    this.item.value = value
    return this
  }

  /**
   * Prepares the item style properties and classes for drag.
   *
   * Подготавливает стили и классы элемента для перетаскивания.
   * @param item HTML element to prepare / HTML-элемент для подготовки
   * @param coordinator client coordinate parameters / параметры координат клиента
   * @returns this instance / текущий экземпляр класса
   */
  prepare(
    item: HTMLElement,
    coordinator: ImageCoordinator
  ): this {
    this.reset()

    const rect = item.getBoundingClientRect()
    const shiftX = coordinator.x - rect.left
    const shiftY = coordinator.y - rect.top

    item.style.setProperty(this.property.width, `${rect.width}px`)
    item.style.setProperty(this.property.height, `${rect.height}px`)

    item.style.setProperty(this.property.shiftX, `${shiftX}px`)
    item.style.setProperty(this.property.shiftY, `${shiftY}px`)

    item.classList.add(
      this.classes.list.active,
      this.classes.list.go
    )

    return this.set(item)
  }

  /**
   * Resets active element tracker.
   *
   * Сбрасывает отслеживание активного элемента.
   * @returns this instance / текущий экземпляр класса
   */
  reset(): this {
    return this
      .resetItemStyles()
      .set(undefined)
  }

  /**
   * Removes custom CSS property coordinates and styles from the item.
   *
   * Удаляет координаты пользовательских свойств CSS и стилей с элемента.
   */
  resetItemStyles(): this {
    const item = this.get()

    if (item) {
      item.style.removeProperty(this.property.width)
      item.style.removeProperty(this.property.height)
      item.style.removeProperty(this.property.rotate)
      item.style.removeProperty(this.property.shiftX)
      item.style.removeProperty(this.property.shiftY)
    }

    return this
  }
}
