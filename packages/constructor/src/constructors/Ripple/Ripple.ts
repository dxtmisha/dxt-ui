import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { RippleItem } from './RippleItem'

import type { RippleComponents, RippleEmits, RippleSlots } from './types'
import type { RippleProps } from './props'

/**
 * Base Ripple class for working in Vue.
 *
 * Базовый класс Ripple для работы во Vue.
 */
export class Ripple {
  /** Ripple item manager instance / Экземпляр менеджера эффекта свечения */
  protected readonly item: RippleItem

  /**
   * Constructor for creating a ripple instance.
   *
   * Конструктор для создания экземпляра эффекта свечения (ripple).
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
   * Click event handler that adds a new ripple effect element at the cursor coordinates.
   *
   * Обработчик события клика, который добавляет новый элемент эффекта волны по координатам курсора.
   * @param event mouse click event / событие клика мыши
   */
  readonly onClick = (event: MouseEvent) => this.item.add(event.offsetX, event.offsetY)
}
