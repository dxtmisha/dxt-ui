import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { RippleItem } from './RippleItem'

import type { RippleComponents, RippleEmits, RippleSlots } from './types'
import type { RippleProps } from './props'

/**
 * Base Ripple logic class (orchestrator).
 * Handles pointer presses on the ripple container and delegates creation
 * of wave elements to the RippleItem helper class.
 *
 * Базовый класс логики Ripple (оркестратор).
 * Обрабатывает нажатия указателя на контейнере эффекта и делегирует создание
 * элементов волны вспомогательному классу RippleItem.
 */
export class Ripple {
  /** Ripple item manager instance / Экземпляр менеджера элементов волны */
  readonly item: RippleItem

  /**
   * Constructor for creating a ripple instance.
   *
   * Конструктор для создания экземпляра эффекта волны (ripple).
   * @param props input properties / входные свойства
   * @param refs input properties in the form of reactive references / входные свойства в виде реактивных ссылок
   * @param element target element where ripples are rendered / целевой элемент, в котором рендерятся волны
   * @param className base CSS class name / базовое имя CSS-класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   * @param constructors.RippleItemConstructor class constructor for the ripple item / конструктор класса элемента волны
   */
  constructor(
    protected readonly props: RippleProps,
    protected readonly refs: ToRefs<RippleProps>,
    protected readonly element: Ref<HTMLSpanElement | undefined>,
    protected readonly className: string,
    protected readonly components?: DesignComp<RippleComponents, RippleProps>,
    protected readonly slots?: RippleSlots,
    protected readonly emits?: ConstrEmit<RippleEmits>,
    constructors: {
      RippleItemConstructor?: typeof RippleItem
    } = {}
  ) {
    const {
      RippleItemConstructor = RippleItem
    } = constructors

    this.item = new RippleItemConstructor(props, element, className)
  }

  /**
   * Pointer press handler that adds a new ripple effect element at the cursor coordinates.
   * Only the main button of the primary pointer triggers the effect.
   *
   * Обработчик нажатия указателя, который добавляет новый элемент эффекта волны по координатам курсора.
   * Эффект запускается только основной кнопкой основного указателя.
   * @param event pointer press event / событие нажатия указателя
   */
  readonly onPointerdown = (event: PointerEvent): void => {
    if (
      event.button === 0
      && event.isPrimary
    ) {
      this.item.add({
        x: event.offsetX,
        y: event.offsetY
      })
    }
  }
}
