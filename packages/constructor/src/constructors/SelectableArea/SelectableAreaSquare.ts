// ai-none

import { ref, type Ref } from 'vue'
import type { DesignName } from '@dxtmisha/functional'
import type { ImageCoordinator } from '@dxtmisha/functional-basic'

import type { SelectableAreaClassesData } from './SelectableAreaClassesData'

/**
 * Class managing square dragging selection logic.
 *
 * Класс, управляющий логикой выбора перетаскиванием квадрата.
 */
export class SelectableAreaSquare {
  /** Saved initial selected values / Сохраненные начальные выбранные значения */
  protected selectedStart: string[] = []
  /** Currently saved selected values / Текущие сохраненные выбранные значения */
  protected selectedCurrent: string[] = []

  /** Initial client position for square / Начальная позиция клиента для квадрата */
  protected client: ImageCoordinator = { x: 0, y: 0 }

  /** Custom properties names map / Карта имен пользовательских свойств */
  protected readonly property: {
    /** CSS property for square X coordinate / Свойство CSS для координаты X квадрата */
    x: string
    /** CSS property for square Y coordinate / Свойство CSS для координаты Y квадрата */
    y: string
    /** CSS property for square width / Свойство CSS для ширины квадрата */
    width: string
    /** CSS property for square height / Свойство CSS для высоты квадрата */
    height: string
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param naming component naming helper / помощник именования компонента
   * @param classes classes manager factory / фабрика менеджера классов
   */
  constructor(
    protected readonly naming: DesignName,
    protected readonly classes: () => SelectableAreaClassesData
  ) {
    this.property = {
      x: this.naming.getStyle('square', 'x'),
      y: this.naming.getStyle('square', 'y'),
      width: this.naming.getStyle('square', 'width'),
      height: this.naming.getStyle('square', 'height')
    }
  }

  /** Square element reference / Ссылка на элемент-квадрат */
  readonly squareElement = ref<HTMLElement | undefined>()

  /**
   * Returns current active selection.
   *
   * Возвращает текущий активный выбор.
   * @returns array of selected values / массив выбранных значений
   */
  getSelectedCurrent(): string[] {
    return this.selectedCurrent
  }

  /**
   * Returns the square element reference.
   *
   * Возвращает ссылку на элемент-квадрат.
   * @returns square element reference / ссылка на элемент-квадрат
   */
  getSquare(): Ref<HTMLElement | undefined> {
    return this.squareElement
  }

  /**
   * Updates the square size and position.
   *
   * Обновляет размер и позицию квадрата.
   * @param coordinator current client position / текущая позиция клиента
   */
  updateSquare(coordinator: ImageCoordinator): void {
    const width = coordinator.x - this.client.x
    const height = coordinator.y - this.client.y

    const squareElement = this.squareElement.value
    if (squareElement) {
      squareElement.style.setProperty(this.property.x, `${width < 0 ? coordinator.x : this.client.x}px`)
      squareElement.style.setProperty(this.property.y, `${height < 0 ? coordinator.y : this.client.y}px`)
      squareElement.style.setProperty(this.property.width, `${Math.abs(width)}px`)
      squareElement.style.setProperty(this.property.height, `${Math.abs(height)}px`)
    }
  }

  /**
   * Resets square state, hides the element, and clears inline custom properties.
   *
   * Сбрасывает состояние квадрата, скрывает элемент и очищает встроенные пользовательские свойства.
   */
  reset(): void {
    this.end()
    this.selectedCurrent = []
    this.client = { x: 0, y: 0 }

    const squareElement = this.squareElement.value
    if (squareElement) {
      squareElement.style.removeProperty(this.property.x)
      squareElement.style.removeProperty(this.property.y)
      squareElement.style.removeProperty(this.property.width)
      squareElement.style.removeProperty(this.property.height)
    }
  }

  /**
   * Ends the square selection interaction and hides the square.
   *
   * Завершает взаимодействие выбора области и скрывает квадрат.
   */
  end(): void {
    this.selectedStart = []

    const squareElement = this.squareElement.value
    if (squareElement) {
      squareElement.classList.remove(this.classes().list.show)
    }
  }

  /**
   * Updates square position and coordinates during move.
   *
   * Обновляет положение и координаты квадрата при перемещении.
   * @param coordinator current coordinates / текущие координаты
   */
  move(coordinator: ImageCoordinator): void {
    this.updateSquare(coordinator)
    this.selectionBySquare()
  }

  /**
   * Selects items that intersect with the square.
   *
   * Выбирает элементы, которые пересекаются с квадратом.
   */
  selectionBySquare(): void {
    const squareElement = this.squareElement.value
    if (!squareElement) {
      return
    }

    const squareRect = squareElement.getBoundingClientRect()
    const items = this.classes().findItems()
    const selectedSet = new Set<string>(this.selectedStart)

    for (const item of items) {
      const value = item.dataset?.value
      if (value === undefined) {
        continue
      }

      const rect = item.getBoundingClientRect()

      if (
        rect.right < squareRect.left
        || rect.bottom < squareRect.top
        || rect.left > squareRect.right
        || rect.top > squareRect.bottom
      ) {
        continue
      }

      if (selectedSet.has(value)) {
        selectedSet.delete(value)
      } else {
        selectedSet.add(value)
      }
    }

    this.selectedCurrent = Array.from(selectedSet)
  }

  /**
   * Starts the square selection interaction.
   *
   * Запускает взаимодействие выбора области.
   * @param client client starting coordinates / начальные координаты клиента
   * @param selected start selection values / начальные выбранные значения
   */
  start(client: ImageCoordinator, selected: readonly string[]): void {
    const squareElement = this.squareElement.value

    this.client = { ...client }
    this.selectedStart = [...selected]
    this.selectedCurrent = [...selected]

    this.updateSquare(client)

    if (squareElement) {
      squareElement.classList.add(this.classes().list.show)
    }
  }
}
