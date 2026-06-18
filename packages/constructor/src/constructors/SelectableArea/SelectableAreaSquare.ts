import { ref, type Ref } from 'vue'
import type { ImageCoordinator } from '@dxtmisha/functional-basic'

import type { SelectableAreaClassesData } from './SelectableAreaClassesData'
import type { SelectableAreaItem } from './SelectableAreaItem'

import type { SelectableAreaProps } from './props'

/**
 * Class managing square dragging selection logic.
 *
 * Класс, управляющий логикой выбора перетаскиванием квадрата.
 */
export class SelectableAreaSquare {
  /** Square element reference / Ссылка на элемент-квадрат */
  protected readonly square = ref<HTMLElement | undefined>()

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
   * @param classes classes manager / менеджер классов
   * @param props properties / свойства
   * @param item item manager / менеджер элементов
   */
  constructor(
    protected readonly classes: SelectableAreaClassesData,
    protected readonly props: SelectableAreaProps,
    protected readonly item: SelectableAreaItem
  ) {
    const className = this.classes.getName()

    this.property = {
      x: `--${className}-sys-square-x`,
      y: `--${className}-sys-square-y`,
      width: `--${className}-sys-square-width`,
      height: `--${className}-sys-square-height`
    }
  }

  /**
   * Returns the square element reference.
   *
   * Возвращает ссылку на элемент-квадрат.
   */
  getSquare(): Ref<HTMLElement | undefined> {
    return this.square
  }

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
   * Selects items that intersect with the square.
   *
   * Выбирает элементы, которые пересекаются с квадратом.
   */
  selectionBySquare(): void {
    const squareElement = this.square.value
    if (!squareElement) return

    const squareRect = squareElement.getBoundingClientRect()
    const items = this.classes.findItems()

    this.selectedCurrent = [...this.selectedStart]

    items.forEach((item) => {
      const rect = item.getBoundingClientRect()
      const value = item.dataset?.value

      if (
        rect.right < squareRect.left
        || rect.bottom < squareRect.top
        || rect.left > squareRect.right
        || rect.top > squareRect.bottom
        || !value
      ) {
        return
      }

      const index = this.selectedCurrent.indexOf(value)

      if (index === -1) {
        this.selectedCurrent.push(value)
      } else {
        this.selectedCurrent.splice(index, 1)
      }
    })
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

    const squareElement = this.square.value
    if (squareElement) {
      squareElement.style.setProperty(this.property.x, `${width < 0 ? coordinator.x : this.client.x}px`)
      squareElement.style.setProperty(this.property.y, `${height < 0 ? coordinator.y : this.client.y}px`)
      squareElement.style.setProperty(this.property.width, `${Math.abs(width)}px`)
      squareElement.style.setProperty(this.property.height, `${Math.abs(height)}px`)
    }
  }

  /**
   * Starts the square selection interaction.
   *
   * Запускает взаимодействие выбора области.
   * @param client client starting coordinates / начальные координаты клиента
   * @param selected start selection values / начальные выбранные значения
   */
  start(client: ImageCoordinator, selected: string[]): void {
    const squareElement = this.square.value

    this.client = client
    this.selectedStart = selected

    this.updateSquare(client)

    if (squareElement) {
      squareElement.classList.add(this.classes.list.show)
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
   * Ends the square selection interaction and hides the square.
   *
   * Завершает взаимодействие выбора области и скрывает квадрат.
   */
  end(): void {
    const squareElement = this.square.value

    if (squareElement) {
      squareElement.classList.remove(this.classes.list.show)
    }
  }
}
