import type { CropAreaClassesData } from './CropAreaClassesData'
import type { CropAreaCoordinator } from './basicTypes'

/**
 * Class managing dynamic CSS variable styles for CropArea.
 *
 * Класс, управляющий динамическими стилями через CSS-переменные для CropArea.
 */
export class CropAreaStyle {
  /** CSS variable property names / Имена CSS-переменных */
  protected readonly property: {
    /** CSS property for top inset / CSS-переменная для верхнего отступа */
    top: string
    /** CSS property for right inset / CSS-переменная для правого отступа */
    right: string
    /** CSS property for bottom inset / CSS-переменная для нижнего отступа */
    bottom: string
    /** CSS property for left inset / CSS-переменная для левого отступа */
    left: string
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param classes classes manager / менеджер классов
   */
  constructor(
    protected readonly classes: CropAreaClassesData
  ) {
    const className = this.classes.name

    this.property = {
      top: `--${className}-sys-crop-top`,
      right: `--${className}-sys-crop-right`,
      bottom: `--${className}-sys-crop-bottom`,
      left: `--${className}-sys-crop-left`
    }
  }

  /**
   * Updates CSS variables on the root DOM element.
   *
   * Обновляет CSS-переменные на корневом DOM-элементе.
   * @param coordinator coordinator array [top, right, bottom, left] / массив координат [сверху, справа, снизу, слева]
   */
  set(coordinator: CropAreaCoordinator): void {
    const element = this.classes.elementItem

    if (element) {
      const [top, right, bottom, left] = coordinator

      element.style.setProperty(this.property.top, `${top}%`)
      element.style.setProperty(this.property.right, `${right}%`)
      element.style.setProperty(this.property.bottom, `${bottom}%`)
      element.style.setProperty(this.property.left, `${left}%`)
    }
  }
}
