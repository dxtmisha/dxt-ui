import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxt-ui/functional'

import { RippleItem } from './RippleItem.ts'

import type { RippleComponents, RippleEmits, RippleSlots } from './types'
import type { RippleProps } from './props'

/**
 * Base Ripple class for working in Vue.
 *
 * Базовый класс Ripple для работы во Vue.
 */
export class Ripple {
  protected readonly item: RippleItem

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: RippleProps,
    protected readonly refs: ToRefs<RippleProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly className: string,
    protected readonly components?: DesignComp<RippleComponents, RippleProps>,
    protected readonly slots?: RippleSlots,
    protected readonly emits?: ConstrEmit<RippleEmits>
  ) {
    this.item = new RippleItem(props, element, className)
  }

  /**
   * The click event adds a wave effect element.
   *
   * Событие клика добавляет элемент эффекта волна.
   * @param event click event/ событие клика
   */
  readonly onClick = (event: MouseEvent) => this.item.add(event.offsetX, event.offsetY)
}
