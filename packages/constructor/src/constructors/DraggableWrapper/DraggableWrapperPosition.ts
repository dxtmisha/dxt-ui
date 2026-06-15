import type { ImageCoordinator } from '@dxtmisha/functional-basic'
import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import { DraggableWrapperClient } from './DraggableWrapperClient'
import { DraggableWrapperItem } from './DraggableWrapperItem'
import { DraggableWrapperSquare } from './DraggableWrapperSquare'

/**
 * Class coordinating dragging movement, positions, drop spots, and element reorder.
 *
 * Класс, координирующий движение перетаскивания, позиции, места сброса и изменение порядка элементов.
 */
export class DraggableWrapperPosition {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param id unique component identifier / уникальный идентификатор компонента
   * @param classes classes helper instance / экземпляр помощника по классам
   * @param item item helper instance / экземпляр помощника по элементам
   * @param emit callback function to trigger drop/position event / функция обратного вызова для запуска события сброса/позиционирования
   * @param square square placeholder manager / менеджер элемента-заполнителя
   * @param getSelection getter for selected element values / геттер для значений выбранных элементов
   * @param client client coordinates manager / менеджер клиентских координат
   */
  constructor(
    protected readonly id: string,
    protected readonly classes: DraggableWrapperClassesData,
    protected readonly item: DraggableWrapperItem,
    protected readonly emit: () => void,
    protected readonly square: DraggableWrapperSquare,
    protected readonly getSelection: () => (string | undefined)[],
    protected readonly client: DraggableWrapperClient
  ) {
  }

  /**
   * Main coordinate update handler during mouse move.
   *
   * Основной обработчик обновления координат при движении мыши.
   * @param client coordinate tracker / трекер координат
   */
  update(client: ImageCoordinator): void {
    const points = this.classes.findElementsFromPoint(client)
    const find = this.classes.findItemByPoints(client)

    if (find) {
      this.updateDropTarget(find)
      this.updatePositionTarget(find)
      return
    }

    const container = this.classes.getElement()

    if (
      container
      && points.indexOf(container) === -1
    ) {
      this.resetPosition()
      return
    }

    this.resetDrop()
  }

  /**
   * Updates drop target area under coordinates.
   *
   * Обновляет целевую область сброса под координатами.
   * @param item HTML element acting as target / HTML-элемент в качестве цели
   */
  updateDropTarget(item: HTMLElement): void {
    if (!this.classes.isDrop(item)) {
      this.resetDrop()
      return
    }

    if (this.item.getGo().isByItem(item)) {
      item.classList.add(this.classes.list.dragged)
      this.square.prepare()

      this.item.getGo().set(item)
      this.client.setDrop(true)
    }
  }

  /**
   * Updates placeholder insertion position target.
   *
   * Обновляет позицию вставки элемента-заполнителя.
   * @param item HTML element defining the position / HTML-элемент, определяющий позицию
   */
  updatePositionTarget(item: HTMLElement): void {
    if (this.classes.isPosition(item)) {
      this.square.prepare(item)
      this.item.getGo().set(item)

      return
    }

    this.resetPosition()
  }

  /**
   * Resets active target drop area status and styles.
   *
   * Сбрасывает статус и стили активной целевой области сброса.
   */
  resetDrop(): void {
    const goElement = this.item.getGo().get()

    if (
      goElement
      && this.classes.isDrop(goElement)
    ) {
      goElement.classList.remove(this.classes.list.dragged)

      this.item.getGo().reset()
      this.client.setDrop(false)
    }
  }

  /**
   * Resets placeholder position indicator status.
   *
   * Сбрасывает состояние индикатора позиции элемента-заполнителя.
   */
  resetPosition(): void {
    const goElement = this.item.getGo().get()

    if (
      goElement
      && this.classes.isPosition(goElement)
    ) {
      const activeElement = this.item.getActive().get()

      this.square.prepare(activeElement, true)
      this.item.getGo().reset()
    }
  }

  /**
   * Inserts dragged items before placeholder spacer element in DOM.
   *
   * Вставляет перетаскиваемые элементы перед элементом-заполнителем в DOM.
   */
  protected insert(): void {
    const squareElement = this.square.getElement()
    const parentElement = squareElement?.parentElement

    if (
      squareElement
      && parentElement
    ) {
      for (const item of this.item.get()) {
        parentElement.insertBefore(item, squareElement)
      }
    }
  }

  /**
   * Finishes dragging session and cleans styles.
   *
   * Завершает сессию перетаскивания и очищает стили.
   * @param go force emit reorder logic / принудительно запустить логику изменения порядка
   */
  reset(go = false): void {
    const active = this.item.getActive().get()
    if (active && (active.classList.contains(this.classes.list.return) || go)) {
      if (this.item.getGo().get()) {
        this.emit()

        if (!go && !this.client.hasDrop()) {
          this.insert()
        }
      }

      this.square.prepare()

      for (const item of this.item.get()) {
        item.classList.remove(
          this.classes.list.active,
          this.classes.list.go,
          this.classes.list.selection,
          this.classes.list.selectionMore,
          this.classes.list.return
        )
      }

      this.item.reset()

      this.client.reset()
    }
  }

  /**
   * Stops drag action and checks drop target or returns item.
   *
   * Останавливает перетаскивание, проверяя цель сброса или возвращая элемент.
   */
  stop(): void {
    if (
      !this.item.getActive().is()
    ) {
      return
    }

    if (
      !this.item.getGo().is()
    ) {
      this.returnActive()
      return
    }

    if (this.client.hasDrop()) {
      this.resetDrop()
      this.reset(true)
    } else {
      this.returnActive()
    }
  }

  /**
   * Starts item return back transition.
   *
   * Запускает переход возврата элемента на место.
   */
  protected returnActive(): void {
    const element = this.classes.getElement()
    const activeElement = this.item.getActive().get()
    const squareElement = this.square.getElement()

    if (
      element
      && activeElement
      && squareElement
    ) {
      const rectElement = element.getBoundingClientRect()
      const rectSquare = squareElement.getBoundingClientRect()

      this.client.set(0, 0)
      activeElement.classList.add(this.classes.list.return)

      this.client.update(
        rectSquare.left - rectElement.left,
        rectSquare.top - rectElement.top
      )
    }
  }
}
