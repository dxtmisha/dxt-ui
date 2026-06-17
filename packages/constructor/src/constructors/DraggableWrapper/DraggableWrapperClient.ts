import type { ImageCoordinator } from '@dxtmisha/functional-basic'

import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'

/**
 * Class managing client interaction coordinates and dragging states.
 *
 * Менеджер координат взаимодействия пользователя и состояний перетаскивания.
 */
export class DraggableWrapperClient {
  /** Current client X coordinate / Текущая координата X клиента */
  protected clientX: number = -1
  /** Current client Y coordinate / Текущая координата Y клиента */
  protected clientY: number = -1

  /** Drag start offset X coordinate / Координата смещения X начала перетаскивания */
  protected x: number = -1
  /** Drag start offset Y coordinate / Координата смещения Y начала перетаскивания */
  protected y: number = -1

  /** Target drop activation status / Статус активации цели сброса */
  protected drop = false

  /** Custom property keys map / Карта ключей пользовательских свойств */
  protected readonly property: {
    /** CSS property for client X coordinate / Свойство CSS для координаты X клиента */
    x: string
    /** CSS property for client Y coordinate / Свойство CSS для координаты Y клиента */
    y: string
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param classes class data / данные классов
   */
  constructor(
    protected readonly classes: DraggableWrapperClassesData
  ) {
    const className = this.classes.getName()

    this.property = {
      x: `--${className}-sys-client-x`,
      y: `--${className}-sys-client-y`
    }
  }

  /**
   * Checks if drop status is active.
   *
   * Проверяет, активен ли статус сброса.
   * @returns status / статус
   */
  hasDrop(): boolean {
    return this.drop
  }

  /**
   * Sets drag start offset coordinates.
   *
   * Устанавливает координаты смещения начала перетаскивания.
   * @param x coordinate X / координата X
   * @param y coordinate Y / координата Y
   * @returns this instance / текущий экземпляр класса
   */
  set(x: number, y: number): this {
    this.x = x
    this.y = y

    return this
  }

  /**
   * Sets current client coordinates.
   *
   * Устанавливает текущие координаты клиента.
   * @param x coordinate X / координата X
   * @param y coordinate Y / координата Y
   * @returns this instance / текущий экземпляр класса
   */
  setClient(x: number, y: number): this {
    this.clientX = x
    this.clientY = y

    return this
  }

  /**
   * Sets offset X coordinate.
   *
   * Устанавливает координату смещения X.
   * @param x coordinate X / координата X
   * @returns this instance / текущий экземпляр класса
   */
  setX(x: number): this {
    this.x = x
    return this
  }

  /**
   * Sets offset Y coordinate.
   *
   * Устанавливает координату смещения Y.
   * @param y coordinate Y / координата Y
   * @returns this instance / текущий экземпляр класса
   */
  setY(y: number): this {
    this.y = y
    return this
  }

  /**
   * Sets active drop status.
   *
   * Устанавливает активный статус сброса.
   * @param drop active drop status / активный статус сброса
   * @returns this instance / текущий экземпляр класса
   */
  setDrop(drop: boolean): this {
    this.drop = drop
    return this
  }

  /**
   * Prepares client state for a drag action.
   *
   * Подготавливает состояние клиента для начала перетаскивания.
   * @param item active draggable element / активный перетаскиваемый элемент
   * @param coordinator client coordinate parameters / параметры координат клиента
   * @returns this instance / текущий экземпляр класса
   */
  prepare(
    item: HTMLElement,
    coordinator: ImageCoordinator
  ): this {
    const rectItem = item.getBoundingClientRect()

    this
      .set(
        coordinator.x - rectItem.left,
        coordinator.y - rectItem.top
      )
      .setDrop(false)
      .move(coordinator)

    return this
  }

  /**
   * Updates client coordinates and CSS style variables.
   *
   * Обновляет координаты клиента и переменные стилей CSS.
   * @param coordinator client coordinate parameters / параметры координат клиента
   * @returns this instance / текущий экземпляр класса
   */
  move(coordinator: ImageCoordinator): this {
    this
      .setClient(coordinator.x, coordinator.y)
      .updateStyle()

    return this
  }

  /**
   * Updates coordinates style variables directly.
   *
   * Обновляет переменные стилей координат напрямую.
   * @param x coordinate X / координата X
   * @param y coordinate Y / координата Y
   */
  update(x: number, y: number): void {
    const element = this.classes.getElement()

    if (element) {
      element.style.setProperty(this.property.x, `${x - this.x}px`)
      element.style.setProperty(this.property.y, `${y - this.y}px`)
    }
  }

  /**
   * Resets all client coordinates and styles.
   *
   * Сбрасывает все координаты клиента и стили.
   */
  reset(): void {
    this.clientX = -1
    this.clientY = -1
    this.x = -1
    this.y = -1
    this.drop = false

    this.updateStyle()
  }

  /**
   * Calculates and updates styles on the wrapper element.
   *
   * Вычисляет и обновляет стили на элементе обертки.
   */
  protected updateStyle(): void {
    const element = this.classes.getElement()
    const rect = this.classes.getRect()

    if (
      !element
      || !rect
    ) {
      return
    }

    if (
      this.x >= 0
      || this.y >= 0
    ) {
      element.style.setProperty(this.property.x, `${this.clientX - rect.left}px`)
      element.style.setProperty(this.property.y, `${this.clientY - rect.top}px`)
    } else {
      element.style.removeProperty(this.property.x)
      element.style.removeProperty(this.property.y)
    }
  }
}
