import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import { DraggableWrapperItem } from './DraggableWrapperItem'

/**
 * Helper class for managing multiselection styles and states during drag.
 *
 * Вспомогательный класс для управления стилями и состояниями множественного выбора при перетаскивании.
 */
export class DraggableWrapperSelection {
  /** Custom properties names map / Карта имен пользовательских свойств */
  protected readonly property: {
    /** CSS property for item width / Свойство CSS для ширины элемента */
    width: string
    /** CSS property for item height / Свойство CSS для высоты элемента */
    height: string
    /** CSS property for item rotation / Свойство CSS для поворота элемента */
    rotate: string
  }

  /**
   * Constructor.
   *
   * Конструктор.
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

  /**
   * Prepares multiselection items styles and stacks.
   *
   * Подготавливает стили и стек выбранных элементов множественного выбора.
   */
  prepare(): void {
    const active = this.item.getActive().get()
    const selection = this.classes.findSelection()

    if (
      !selection
      || !active
      || !this.classes.isSelected(active)
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

  /**
   * Resets styles of all selected elements in the stack.
   *
   * Сбрасывает стили всех выбранных элементов в стеке.
   */
  stop(): void {
    const selection = this.item.getSelection().get()

    if (selection) {
      selection.forEach((item) => {
        item.style.removeProperty(this.property.width)
        item.style.removeProperty(this.property.height)
        item.style.removeProperty(this.property.rotate)

        item.classList.remove(
          this.classes.list.active,
          this.classes.list.selection,
          this.classes.list.selectionMore
        )
      })
    }
  }

  /**
   * Updates CSS property variables and classes for multiselection item.
   *
   * Обновляет переменные свойств CSS и классы для выбранного элемента множественного выбора.
   * @param item HTML element to update / обновляемый HTML-элемент
   * @param rect bounding rectangle / ограничивающий прямоугольник
   * @param rotate rotation angle in degrees / угол поворота в градусах
   */
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
