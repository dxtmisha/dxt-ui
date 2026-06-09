import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import { DraggableWrapperItem } from './DraggableWrapperItem'

/**
 * Helper class for managing multiselection styles and states during drag /
 * Вспомогательный класс для управления стилями и состояниями множественного выбора при перетаскивании
 */
export class DraggableWrapperSelection {
  protected readonly customProperty: {
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

    this.customProperty = {
      width: `--${className}-sys-item-width`,
      height: `--${className}-sys-item-height`,
      rotate: `--${className}-sys-item-rotate`
    }
  }

  /**
   * Gets list of dataset values for the selection /
   * Возвращает список значений dataset для выбранных элементов
   * @returns array of dataset values / массив значений dataset
   */
  getSelection(): (string | undefined)[] {
    const selection = this.item.getSelection().get()
    const active = this.item.getActive().get()
    const list = selection || (active ? [active] : [])
    return list.map(item => item?.dataset?.value)
  }

  /**
   * Finds all elements involved in the current selection stack /
   * Находит все элементы, участвующие в текущем стеке выбора
   * @returns array of html elements / массив html-элементов
   */
  protected findSelection(): HTMLElement[] {
    const element = this.classes.getElement()

    if (!element) {
      return []
    }

    const elements = element.querySelectorAll<HTMLElement>(
      `.${this.id}.${this.classes.list.active}, .${this.id}.${this.classes.list.selected}`
    )

    return Array.from(elements)
  }

  /**
   * Coordinates the selections stack visual offset and rotation angles /
   * Координирует визуальное смещение и углы поворота стека выбранных элементов
   */
  update(): void {
    const active = this.item.getActive().get()
    if (!active) {
      return
    }

    if (active.classList.contains(this.classes.list.selected)) {
      let shift = 1
      const deg = 4
      const max = 4

      const selection = this.findSelection()
      this.item.getSelection().set(selection)

      for (const item of selection) {
        if (item !== active) {
          const rect = item.getBoundingClientRect()

          this.updateItemStyles(item, rect, max * deg - shift * deg)
          item.classList.add(this.classes.list.active, this.classes.list.selection)

          if (shift < max) {
            shift++
          } else {
            item.classList.add(this.classes.list.selectionMore)
          }
        }
      }
    }
  }

  protected updateItemStyles(item: HTMLElement, rect: DOMRect, rotate: number): void {
    item.style.setProperty(this.customProperty.width, `${rect.width}px`)
    item.style.setProperty(this.customProperty.height, `${rect.height}px`)
    item.style.setProperty(this.customProperty.rotate, `-${rotate}deg`)
  }
}
