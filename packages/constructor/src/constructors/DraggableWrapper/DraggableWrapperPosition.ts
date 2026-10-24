// ai-none

import { domElementsFromPoint, type ImageCoordinator } from '@dxtmisha/functional-basic'

import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import { DraggableWrapperClient } from './DraggableWrapperClient'
import { DraggableWrapperEmit } from './DraggableWrapperEmit'
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
   * @param classes classes helper instance factory / фабрика экземпляра помощника по классам
   * @param client client coordinates manager factory / фабрика менеджера клиентских координат
   * @param emit event emit helper class factory / фабрика вспомогательного класса вызова событий
   * @param item item helper instance factory / фабрика экземпляра помощника по элементам
   * @param square square placeholder manager factory / фабрика менеджера элемента-заполнителя
   */
  constructor(
    protected readonly classes: () => DraggableWrapperClassesData,
    protected readonly client: () => DraggableWrapperClient,
    protected readonly emit: () => DraggableWrapperEmit,
    protected readonly item: () => DraggableWrapperItem,
    protected readonly square: () => DraggableWrapperSquare
  ) {
  }

  /**
   * Main coordinate update handler during mouse move.
   *
   * Основной обработчик обновления координат при движении мыши.
   * @param client coordinate tracker / трекер координат
   */
  update(client: ImageCoordinator): void {
    const classes = this.classes()
    const points = domElementsFromPoint(client)
    const find = classes.findItemByPoints(client)

    if (find) {
      this.updateDropTarget(find)
      this.updatePositionTarget(find)
      return
    }

    const mainElement = classes.getElement()

    this.resetDrop()

    if (
      mainElement
      && points.indexOf(mainElement) === -1
    ) {
      this.resetPosition()
    }
  }

  /**
   * Finishes dragging session and cleans styles.
   *
   * Завершает сессию перетаскивания и очищает стили.
   * @param go force emit reorder logic / принудительно запустить логику изменения порядка
   */
  reset(go = false): void {
    const item = this.item()
    const active = item.getActive().get()
    const classes = this.classes()

    if (
      active
      && (
        classes.isReturn(active)
        || go
      )
    ) {
      if (item.getGo().is()) {
        this.emit().on()

        if (
          !go
          && !this.client().hasDrop()
        ) {
          this.insert()
        }
      }

      this.square().prepare()

      for (const element of item.get()) {
        element.classList.remove(
          classes.getList().active,
          classes.getList().selection,
          classes.getList().selectionMore,
          classes.getList().return
        )
      }

      item.reset()
      this.client().reset()
    }
  }

  /**
   * Stops drag action and checks drop target or returns item.
   *
   * Останавливает перетаскивание, проверяя цель сброса или возвращая элемент.
   */
  stop(): void {
    const item = this.item()

    if (
      !item.getActive().is()
    ) {
      return
    }

    if (
      !item.getGo().is()
    ) {
      this.returnActive()
      return
    }

    if (this.client().hasDrop()) {
      this.emit().on()
      this.resetDrop()
      this.reset(true)
    } else {
      this.returnActive()
    }
  }

  /**
   * Inserts dragged items before placeholder spacer element in DOM.
   *
   * Вставляет перетаскиваемые элементы перед элементом-заполнителем в DOM.
   */
  protected insert(): void {
    const squareElement = this.square().getElement()
    const parentElement = squareElement?.parentElement

    if (
      squareElement
      && parentElement
    ) {
      for (const item of this.item().get()) {
        parentElement.insertBefore(item, squareElement)
      }
    }
  }

  /**
   * Resets active target drop area status and styles.
   *
   * Сбрасывает статус и стили активной целевой области сброса.
   */
  protected resetDrop(): void {
    const itemHelper = this.item()
    const goElement = itemHelper.getGo().get()
    const classes = this.classes()

    if (
      goElement
      && classes.isDrop(goElement)
    ) {
      goElement.classList.remove(classes.getList().dropActive)

      itemHelper.getGo().reset()
      this.client().setDrop(false)
    }
  }

  /**
   * Resets placeholder position indicator status.
   *
   * Сбрасывает состояние индикатора позиции элемента-заполнителя.
   */
  protected resetPosition(): void {
    const itemHelper = this.item()
    const activeElement = itemHelper.getActive().get()

    this.square().prepare(activeElement, true)

    if (!this.client().hasDrop()) {
      itemHelper.getGo().reset()
    }
  }

  /**
   * Starts item return back transition.
   *
   * Запускает переход возврата элемента на место.
   */
  protected returnActive(): void {
    const classes = this.classes()
    const element = classes.getElement()
    const activeElement = this.item().getActive().get()
    const squareElement = this.square().getElement()

    if (
      element
      && activeElement
      && squareElement
    ) {
      const rectElement = element.getBoundingClientRect()
      const rectSquare = squareElement.getBoundingClientRect()

      this.client()
        .set(0, 0)
        .update(
          rectSquare.left - rectElement.left,
          rectSquare.top - rectElement.top
        )

      activeElement.classList.add(classes.getList().return)
    }
  }

  /**
   * Updates drop target area under coordinates.
   *
   * Обновляет целевую область сброса под координатами.
   * @param item HTML element acting as target / HTML-элемент в качестве цели
   */
  protected updateDropTarget(item: HTMLElement): void {
    this.resetDrop()

    const classes = this.classes()
    const itemHelper = this.item()

    if (
      classes.isDrop(item)
      && itemHelper.getGo().isByItem(item)
    ) {
      item.classList.add(classes.getList().dropActive)
      this.square().prepare()

      itemHelper.getGo().set(item)
      this.client().setDrop(true)
    }
  }

  /**
   * Updates placeholder insertion position target.
   *
   * Обновляет позицию вставки элемента-заполнителя.
   * @param item HTML element defining the position / HTML-элемент, определяющий позицию
   */
  protected updatePositionTarget(item: HTMLElement): void {
    if (this.classes().isPosition(item)) {
      this.square().prepare(item)
      this.item().getGo().set(item)

      return
    }

    this.resetPosition()
  }
}
