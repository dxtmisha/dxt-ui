import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import { DraggableWrapperItem } from './DraggableWrapperItem'

/**
 * Helper class for managing multiselection styles and states during drag /
 * Вспомогательный класс для управления стилями и состояниями множественного выбора при перетаскивании
 */
export class DraggableWrapperSelection {
  protected readonly property: {
    width: string
    height: string
    rotate: string
  }

  /**
   * Constructor
   * @param id unique component identifier / уникальный идентификатор компонента
   * @param classes classes helper instance / экземпляр помощника по классам
   * @param item item helper instance / экземпляр помощника по элементам
   */
  constructor(
    protected readonly id: string,
    protected readonly classes: DraggableWrapperClassesData,
    protected readonly item: DraggableWrapperItem
  ) {
    const className = this.classes.getName()

    this.property = {
      width: `--${className}-sys-item-width`,
      height: `--${className}-sys-item-height`,
      rotate: `--${className}-sys-item-rotate`
    }
  }

  prepare(): void {
    const active = this.item.getActive().get()
    const selection = this.classes.findSelection()

    if (
      !selection
      || !active
      || !active.classList.contains(this.classes.list.selected)
    ) {
      return
    }

    let shift = 1
    const deg = 4
    const max = 4

    this.item.getSelection().set([...selection])

    selection.forEach((item) => {
      if (item !== active) {
        const rect = item.getBoundingClientRect()
        const rotate: number = max * deg - shift * deg

        this.updateItemStyles(item, rect, rotate)

        if (shift < max) {
          shift++
        } else {
          item.classList.add(this.classes.list.selectionMore)
        }
      }
    })
  }

  protected updateItemStyles(
    item: HTMLElement,
    rect: DOMRect,
    rotate: number
  ): void {
    item.style.setProperty(this.property.width, `${rect.width}px`)
    item.style.setProperty(this.property.height, `${rect.height}px`)
    item.style.setProperty(this.property.rotate, `-${rotate}deg`)

    item.classList.add(
      this.classes.list.active,
      this.classes.list.selection
    )
  }
}
