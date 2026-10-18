// ai-none

import type { Ref } from 'vue'
import type { DesignName } from '@dxtmisha/functional'

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
   * @param element wrapper element reference / ссылка на элемент обертки
   * @param naming component naming helper / помощник именования компонента
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    naming: DesignName
  ) {
    this.property = {
      top: naming.getStyle('crop-top'),
      right: naming.getStyle('crop-right'),
      bottom: naming.getStyle('crop-bottom'),
      left: naming.getStyle('crop-left')
    }
  }

  /**
   * Updates CSS variables on the root DOM element.
   *
   * Обновляет CSS-переменные на корневом DOM-элементе.
   * @param coordinator coordinator array [top, right, bottom, left] / массив координат [сверху, справа, снизу, слева]
   */
  set(coordinator: CropAreaCoordinator): void {
    const element = this.element.value

    if (element) {
      const [top, right, bottom, left] = coordinator

      element.style.setProperty(this.property.top, `${top}%`)
      element.style.setProperty(this.property.right, `${right}%`)
      element.style.setProperty(this.property.bottom, `${bottom}%`)
      element.style.setProperty(this.property.left, `${left}%`)
    }
  }
}
