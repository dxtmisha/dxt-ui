import {
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { RippleItem } from './RippleItem'

import type { RippleProps } from './props'
import type { RippleComponents, RippleEmits, RippleSlots } from './types'

/** Ripple dependency constructors type / Тип конструкторов зависимостей Ripple */
export type RippleConstructors = {
  /** Ripple item constructor / Конструктор элемента волны */
  item: typeof RippleItem
}

/**
 * Base Ripple logic class (orchestrator).
 * Handles pointer presses on the ripple container and delegates creation
 * of wave elements to the RippleItem helper class.
 *
 * Базовый класс логики Ripple (оркестратор).
 * Обрабатывает нажатия указателя на контейнере эффекта и делегирует создание
 * элементов волны вспомогательному классу RippleItem.
 */
export class Ripple extends DesignLogicAbstract<
  HTMLSpanElement,
  RippleComponents,
  RippleEmits,
  RippleSlots,
  RippleProps,
  RippleConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<RippleConstructors> = {
    item: {
      item: RippleItem,
      parameters: () => [
        this.props,
        this.element,
        this.naming
      ]
    }
  }

  /**
   * Pointer press handler that adds a new ripple effect element at the cursor coordinates.
   * Only the main button of the primary pointer triggers the effect when not disabled.
   *
   * Обработчик нажатия указателя, который добавляет новый элемент эффекта волны по координатам курсора.
   * Эффект запускается только основной кнопкой основного указателя, если компонент не отключён.
   * @param event pointer press event / событие нажатия указателя
   */
  readonly onPointerdown = (event: PointerEvent): void => {
    if (
      !this.props.disabled
      && event.button === 0
      && event.isPrimary
    ) {
      this.i('item').add({
        x: event.offsetX,
        y: event.offsetY
      })
    }
  }
}
