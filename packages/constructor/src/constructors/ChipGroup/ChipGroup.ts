import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, DesignComp, ListDataRef } from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'

import type { ChipGroupComponents, ChipGroupEmits, ChipGroupSlots } from './types'
import type { ChipGroupProps } from './props'

/**
 * ChipGroup
 */
export class ChipGroup {
  readonly data: ListDataRef
  readonly event: EventClickInclude

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
    protected readonly props: ChipGroupProps,
    protected readonly refs: ToRefs<ChipGroupProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ChipGroupComponents, ChipGroupProps>,
    protected readonly slots?: ChipGroupSlots,
    protected readonly emits?: ConstrEmit<ChipGroupEmits>
  ) {
    this.data = new ListDataRef(
      this.refs.list,
      undefined,
      undefined,
      undefined,
      this.refs.selected,
      this.refs.keyValue,
      this.refs.keyLabel
    )

    this.event = new EventClickInclude(undefined, undefined, this.emits)
  }
}
