// ai-none

import type { DesignName } from '@dxtmisha/functional'

import type { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import type { DraggableWrapperItem } from './DraggableWrapperItem'

/** Rotation step in degrees per stacked selection item / Шаг поворота в градусах на каждый элемент в стопке выделения */
const ROTATION_DEGREE = 4

/** Maximum number of visible rotated items in selection stack / Максимальное количество видимых повернутых элементов в стопке выделения */
const MAX_VISIBLE_SELECTION = 4

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
   * @param naming component naming helper / помощник именования компонента
   * @param classes classes helper instance factory / фабрика экземпляра помощника по классам
   * @param item item helper instance factory / фабрика экземпляра помощника по элементам
   */
  constructor(
    protected readonly naming: DesignName,
    protected readonly classes: () => DraggableWrapperClassesData,
    protected readonly item: () => DraggableWrapperItem
  ) {
    this.property = {
      width: this.naming.getStyle('item', 'width'),
      height: this.naming.getStyle('item', 'height'),
      rotate: this.naming.getStyle('item', 'rotate')
    }
  }

  /**
   * Prepares multiselection items styles and stacks.
   *
   * Подготавливает стили и стек выбранных элементов множественного выбора.
   */
  prepare(): void {
    const item = this.item()
    const classes = this.classes()
    const active = item.getActive().get()
    const selection = classes.findSelection()

    if (
      !selection
      || !active
      || !classes.isSelected(active)
    ) {
      return
    }

    let shift = 1

    item.getSelection().set([...selection])

    selection.forEach((element) => {
      if (element !== active) {
        const rect = element.getBoundingClientRect()
        const rotate: number = MAX_VISIBLE_SELECTION * ROTATION_DEGREE - shift * ROTATION_DEGREE

        this.updateItemStyles(element, rect, rotate)

        if (shift < MAX_VISIBLE_SELECTION) {
          shift++
        } else {
          element.classList.add(classes.getList().selectionMore)
        }
      }
    })
  }

  /**
   * Resets styles of all secondary selected elements in the stack without disrupting the active element.
   *
   * Сбрасывает стили всех дополнительных выбранных элементов в стеке, не затрагивая активный элемент.
   */
  stop(): void {
    const itemHelper = this.item()
    const active = itemHelper?.getActive()?.get()
    const selection = itemHelper?.getSelection()?.get()
    const classes = this.classes()

    if (selection) {
      selection.forEach((item) => {
        if (item === active) {
          return
        }

        item.style.removeProperty(this.property.width)
        item.style.removeProperty(this.property.height)
        item.style.removeProperty(this.property.rotate)

        item.classList.remove(
          classes.getList().active,
          classes.getList().selection,
          classes.getList().selectionMore
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

    const classes = this.classes()

    item.classList.add(
      classes.getList().active,
      classes.getList().selection
    )
  }
}
