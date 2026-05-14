import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import type { BleedComponents, BleedEmits, BleedSlots } from './types'
import type { BleedProps } from './props'

/**
 * Bleed
 */
export class Bleed {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: BleedProps,
    protected readonly refs: ToRefs<BleedProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<BleedComponents, BleedProps>,
    protected readonly slots?: BleedSlots,
    protected readonly emits?: ConstrEmit<BleedEmits>
  ) {
  }

  /**
   * Returns the tag name /
   * Возвращает название тега
   */
  get tag(): string {
    return this.props.tag ?? 'div'
  }
}
