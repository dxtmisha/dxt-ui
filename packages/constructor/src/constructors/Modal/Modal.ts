import { ModalAbstract } from './ModalAbstract'
import { type WindowProps } from '../Window'

import type { ComponentIncludeExtra } from '../../types/componentInclude'

/**
 * Class for managing a modal window component.
 * It extends the abstract modal logic (ModalAbstract) to provide concrete modal behaviors, combining top/bottom bars, action buttons, and window overlays into a cohesive modal interface.
 *
 * Класс для управления компонентом модального окна.
 * Расширяет абстрактную логику модального окна (ModalAbstract) для обеспечения конкретного поведения, объединяя верхние/нижние панели, кнопки действий и оверлеи окон в единый модальный интерфейс.
 */
export class Modal extends ModalAbstract {
  /**
   * Retrieves additional properties for the window sub-component.
   *
   * Возвращает дополнительные свойства для подкомпонента окна.
   * @returns object with additional window properties / объект с дополнительными свойствами окна
   */
  protected override getExtraWindow(): ComponentIncludeExtra<WindowProps> {
    return {
      ...super.getExtraWindow(),

      open: this.props.open,
      image: this.props.image,

      adaptive: 'modal',
      imagePosition: this.props.imagePosition,
      closeButton: this.props.barsBackHide
    }
  }
}
