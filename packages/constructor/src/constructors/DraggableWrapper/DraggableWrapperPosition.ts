import { type Ref } from 'vue'
import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import { DraggableWrapperItem } from './DraggableWrapperItem'
import { DraggableWrapperSquare } from './DraggableWrapperSquare'
import { type DraggableWrapperClient } from './basicTypes'

/**
 * Class coordinating dragging movement, positions, drop spots, and element reorder /
 * Класс, координирующий движение перетаскивания, позиции, места сброса и изменение порядка элементов
 */
export class DraggableWrapperPosition {
  /** Coordinate tracking values / Отслеживание координат */
  protected readonly client: DraggableWrapperClient = {
    x: 0,
    y: 0,
    drop: false
  }

  protected readonly customPropertyX: string
  protected readonly customPropertyY: string

  constructor(
    protected readonly id: string,
    protected readonly className: string,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classes: DraggableWrapperClassesData,
    protected readonly item: DraggableWrapperItem,
    protected readonly itemGo: Ref<HTMLElement | undefined>,
    protected readonly emit: () => void,
    protected readonly square: DraggableWrapperSquare,
    protected readonly getSelection: () => (string | undefined)[]
  ) {
    this.customPropertyX = `--${this.className}-sys-client-x`
    this.customPropertyY = `--${this.className}-sys-client-y`
  }

  /**
   * Returns the x coordinate of the client /
   * Возвращает координату x клиента
   * @returns x coordinate / координата x
   */
  getX(): number {
    return this.client.x
  }

  /**
   * Returns the y coordinate of the client /
   * Возвращает координату y клиента
   * @returns y coordinate / координата y
   */
  getY(): number {
    return this.client.y
  }

  /**
   * Checks if the element was dropped /
   * Проверяет, был ли элемент сброшен
   * @returns true if the element was dropped / true, если элемент был сброшен
   */
  hasDrop(): boolean {
    return this.client.drop
  }

  /**
   * Checks if element represents a position-spot /
   * Проверяет, является ли элемент местом для позиционирования
   * @param item target element / целевой элемент
   * @returns true if cp-position class is present / true, если присутствует класс cp-position
   */
  isPosition(item: HTMLElement): boolean {
    return item.classList.contains(this.classes.list.position)
  }

  /**
   * Checks if element represents a drop-spot /
   * Проверяет, является ли элемент местом для сброса
   * @param item target element / целевой элемент
   * @returns true if cp-drop class is present / true, если присутствует класс cp-drop
   */
  isDrop(item: HTMLElement): boolean {
    return item.classList.contains(this.classes.list.drop)
  }

  /**
   * Identifies the sibling element under pointer coords /
   * Идентифицирует соседний элемент под координатами указателя
   * @param points list of elements at point / список элементов в точке
   * @returns sibling element or undefined / соседний элемент или undefined
   */
  findItem(points: Element[]): HTMLElement | undefined {
    let item: HTMLElement | undefined

    points.forEach((element) => {
      if (
        !item
        && element instanceof HTMLElement
        && element.classList.contains(this.id)
        && !element.classList.contains(this.classes.list.active)
        && element !== this.item.getActive()
      ) {
        item = element
      }
    })

    return item
  }

  /**
   * Updates the coordinates of the shifted element /
   * Обновляет координаты смещенного элемента
   * @param x x coordinate / координата x
   * @param y y coordinate / координата y
   */
  updateCoordinates(x: number, y: number): void {
    const element = this.element.value

    if (element) {
      element.style.setProperty(this.customPropertyX, `${x - this.client.x}px`)
      element.style.setProperty(this.customPropertyY, `${y - this.client.y}px`)
    }
  }

  /**
   * Resets CSS coordinate variables /
   * Сбрасывает переменные координат CSS
   */
  protected resetStyles(): void {
    const element = this.element.value
    if (element) {
      element.style.removeProperty(this.customPropertyX)
      element.style.removeProperty(this.customPropertyY)
    }
  }

  /**
   * Reorders drag elements in DOM placing them before spacer square /
   * Изменяет порядок элементов перетаскивания в DOM, помещая их перед заполнителем
   */
  protected insert(): void {
    const squareEl = this.square.getElement()
    if (squareEl && squareEl.parentElement) {
      const parent = squareEl.parentElement
      this.item.start.forEach((item) => {
        parent.insertBefore(item, squareEl)
      })
    }
  }

  /**
   * Coordinates drop-zone selections and spacer square updates /
   * Координирует выбор зоны сброса и обновление заполнителя
   * @param item target drop element / целевой элемент сброса
   */
  updateDropTarget(item: HTMLElement): void {
    if (!this.isDrop(item)) {
      this.resetDrop()
    } else if (item !== this.itemGo.value) {
      this.square.update()
      item.classList.add(this.classes.list.dragged)

      this.itemGo.value = item
      this.client.drop = true
    }
  }

  /**
   * Resets drop selection states and classes /
   * Сбрасывает состояния и классы выбора сброса
   */
  resetDrop(): void {
    const goItem = this.itemGo.value
    if (goItem && this.isDrop(goItem)) {
      goItem.classList.remove(this.classes.list.dragged)
      this.itemGo.value = undefined
      this.client.drop = false
    }
  }

  /**
   * Positions spacer square at target item position /
   * Позиционирует заполнитель на позиции целевого элемента
   * @param item target sibling item / целевой соседний элемент
   */
  updatePositionTarget(item: HTMLElement): void {
    if (!this.isPosition(item)) {
      this.resetPosition()
    } else {
      this.square.update(item)
      this.itemGo.value = item
    }
  }

  /**
   * Finishes dragging session and cleans styles /
   * Завершает сессию перетаскивания и очищает стили
   * @param go force emit reorder logic / принудительно запустить логику изменения порядка
   */
  reset(go = false): void {
    const active = this.item.getActive()
    if (active && (active.classList.contains(this.classes.list.return) || go)) {
      if (this.itemGo.value) {
        this.emit()

        if (!go && !this.client.drop) {
          this.insert()
        }
      }

      this.square.update()

      this.item.start.forEach((item) => {
        item.classList.remove(
          this.classes.list.active,
          this.classes.list.go,
          this.classes.list.selection,
          this.classes.list.selectionMore,
          this.classes.list.return
        )
        item.style.removeProperty('--_cp-width')
        item.style.removeProperty('--_cp-height')
        item.style.removeProperty('--_cp-shift')
      })

      this.item.setActive(undefined)
      this.item.setSelection(undefined)
      this.itemGo.value = undefined

      this.resetStyles()
    }
  }

  /**
   * Resets spacer square back to active element's location /
   * Сбрасывает заполнитель обратно на местоположение активного элемента
   */
  resetPosition(): void {
    if (this.itemGo.value && this.isPosition(this.itemGo.value)) {
      this.square.update(this.item.getActive(), true)
      this.itemGo.value = undefined
    }
  }

  /**
   * Animates active item return transition back to square /
   * Анимирует переход возврата активного элемента обратно к заполнителю
   */
  protected returnActive(): void {
    const active = this.item.getActive()
    const squareElement = this.square.getElement()
    const positionElement = this.element.value

    if (active && squareElement && positionElement) {
      const rectangle = positionElement.getBoundingClientRect()
      const rectangleSquare = squareElement.getBoundingClientRect()

      this.client.x = 0
      this.client.y = 0
      active.classList.add(this.classes.list.return)

      this.updateCoordinates(rectangleSquare.left - rectangle.left, rectangleSquare.top - rectangle.top)
    }
  }

  /**
   * Starts dragging /
   * Запускает перетаскивание
   * @param item dragged element / перетаскиваемый элемент
   * @param clientX x coordinate of the mouse / координата x мыши
   * @param clientY y coordinate of the mouse / координата y мыши
   */
  start(
    item: HTMLElement,
    clientX: number,
    clientY: number
  ): void {
    const rectangle = item.getBoundingClientRect()
    const rectanglePosition = this.element.value?.getBoundingClientRect()

    if (
      !rectangle
      || !rectanglePosition
    ) {
      return
    }

    this.client.x = clientX - rectangle.left
    this.client.y = clientY - rectangle.top
    this.client.drop = false

    this.item.setActive(item)

    this.updateCoordinates(
      clientX - rectanglePosition.left,
      clientY - rectanglePosition.top
    )

    this.square.update(item)

    item.style.setProperty('--_cp-width', `${rectangle.width}px`)
    item.style.setProperty('--_cp-height', `${rectangle.height}px`)
    item.classList.add(this.classes.list.active, this.classes.list.go)
  }

  /**
   * Exits drag session and coordinates final placement /
   * Выходит из сессии перетаскивания и координирует окончательное размещение
   */
  stop(): void {
    if (this.item.getActive()) {
      if (!this.itemGo.value) {
        this.returnActive()
      } else if (this.client.drop) {
        this.resetDrop()
        this.reset(true)
      } else {
        this.returnActive()
      }
    }
  }
}
