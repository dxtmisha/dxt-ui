import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import type { ImageCoordinator } from '@dxtmisha/functional-basic'

export class DraggableWrapperClient {
  protected clientX: number = -1
  protected clientY: number = -1

  protected x: number = -1
  protected y: number = -1

  protected drop = false

  protected readonly property: {
    x: string
    y: string
  }

  /**
   * Constructor
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

  hasDrop(): boolean {
    return this.drop
  }

  set(x: number, y: number): this {
    this.x = x
    this.y = y

    return this
  }

  setClient(x: number, y: number): this {
    this.clientX = x
    this.clientY = y

    return this
  }

  setX(x: number): this {
    this.x = x
    return this
  }

  setY(y: number): this {
    this.y = y
    return this
  }

  setDrop(drop: boolean): this {
    this.drop = drop
    return this
  }

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

  move(coordinator: ImageCoordinator): this {
    this
      .setClient(coordinator.x, coordinator.y)
      .updateStyle()

    return this
  }

  update(x: number, y: number): void {
    const element = this.classes.getElement()

    if (element) {
      element.style.setProperty(this.property.x, `${x - this.x}px`)
      element.style.setProperty(this.property.y, `${y - this.y}px`)
    }
  }

  reset(): void {
    this.clientX = -1
    this.clientY = -1
    this.x = -1
    this.y = -1
    this.drop = false

    this.updateStyle()
  }

  protected updateStyle() {
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
