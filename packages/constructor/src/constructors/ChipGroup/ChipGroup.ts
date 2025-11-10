import { ref, type Ref, type ToRefs, watch } from 'vue'
import {
  type ConstrEmit,
  DesignComp,
  ListDataRef,
  type ListList,
  type ListSelectedList
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { ChipGroupComponents, ChipGroupEmits, ChipGroupSlots } from './types'
import type { ChipGroupProps } from './props'

/**
 * ChipGroup
 */
export class ChipGroup {
  readonly data: ListDataRef
  readonly event: EventClickInclude

  readonly value = ref<ListSelectedList>()

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
      this.value,
      this.refs.keyValue,
      this.refs.keyLabel
    )

    this.event = new EventClickInclude(undefined, undefined, this.emits)

    new ModelInclude('selected', this.emits, this.value)

    watch(
      [this.refs.selected],
      () => {
        this.value.value = this.props.selected
      },
      { immediate: true }
    )
  }

  /**
   * Get list of items.
   *
   * Получить список элементов.
   */
  getList(): ListList {
    return this.data.fullData.value
  }

  /**
   * Click handler.
   *
   * Обработчик клика.
   * @param event event object/ объект события
   * @param options data object/ объект с данными
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    if (
      options
      && 'value' in options
      && !this.props.readonly
    ) {
      this.value.value = options.value
    }

    this.event.onClick(event, options)
  }
}
