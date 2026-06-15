import { ref } from 'vue'
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
      height: `--${className}-sys-item-height`
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
   * @returns this instance / текущий экземпляр класса
   */
  prepare(item: HTMLElement): this {
    const rect = item.getBoundingClientRect()

    item.style.setProperty(this.property.width, `${rect.width}px`)
    item.style.setProperty(this.property.height, `${rect.height}px`)
    item.classList.add(this.classes.list.active, this.classes.list.go)

    return this.set(item)
  }

  /**
   * Resets active element tracker.
   *
   * Сбрасывает отслеживание активного элемента.
   * @returns this instance / текущий экземпляр класса
   */
  reset(): this {
    return this.set(undefined)
  }
}
