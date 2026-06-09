import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import { DraggableWrapperClient } from './DraggableWrapperClient'
import { DraggableWrapperItem } from './DraggableWrapperItem'
import { DraggableWrapperSquare } from './DraggableWrapperSquare'

/**
 * Class coordinating dragging movement, positions, drop spots, and element reorder /
 * Класс, координирующий движение перетаскивания, позиции, места сброса и изменение порядка элементов
 */
export class DraggableWrapperPosition {
  protected readonly customProperty: {
    width: string
    height: string
    rotate: string
  }

  constructor(
    protected readonly id: string,
    protected readonly classes: DraggableWrapperClassesData,
    protected readonly item: DraggableWrapperItem,
    protected readonly emit: () => void,
    protected readonly square: DraggableWrapperSquare,
    protected readonly getSelection: () => (string | undefined)[],
    protected readonly client: DraggableWrapperClient
  ) {
    const className = this.classes.getName()

    this.customProperty = {
      width: `--${className}-sys-item-width`,
      height: `--${className}-sys-item-height`,
      rotate: `--${className}-sys-item-rotate`
    }
  }

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
   * Positions spacer square at target item position /
   * Позиционирует заполнитель на позиции целевого элемента
   * @param item target sibling item / целевой соседний элемент
   */
  updatePositionTarget(item: HTMLElement): void {
    if (!this.classes.isPosition(item)) {
      this.resetPosition()
    } else {
      this.square.prepare(item)
      this.item.getGo().set(item)
    }
  }

  /**
   * Finishes dragging session and cleans styles /
   * Завершает сессию перетаскивания и очищает стили
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

        this.resetItemStyles(item)
      }

      this.item.reset()

      this.client.reset()
    }
  }

  /**
   * Resets spacer square back to active element's location /
   * Сбрасывает заполнитель обратно на местоположение активного элемента
   */
  resetPosition(): void {
    if (this.item.getGo().get() && this.classes.isPosition(this.item.getGo().get()!)) {
      this.square.prepare(this.item.getActive().get(), true)
      this.item.getGo().reset()
    }
  }

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

  protected resetItemStyles(item: HTMLElement): void {
    item.style.removeProperty(this.customProperty.width)
    item.style.removeProperty(this.customProperty.height)
    item.style.removeProperty(this.customProperty.rotate)
  }
}
