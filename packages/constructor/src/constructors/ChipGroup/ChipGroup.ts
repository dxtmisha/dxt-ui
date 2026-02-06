import { type Ref, type ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  ListDataRef,
  type ListList,
  type ListSelectedList
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelValueInclude } from '../../classes/ModelValueInclude'

import type { ChipGroupComponents, ChipGroupEmits, ChipGroupSlots } from './types'
import type { ChipGroupProps } from './props'

/**
 * ChipGroup
 */
export class ChipGroup {
  readonly data: ListDataRef
  readonly event: EventClickInclude
  readonly model: ModelValueInclude<ListSelectedList>

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
   * @param EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param ModelValueIncludeConstructor class for working with model value/ класс для работы со значением модели
   * @param ListDataRefConstructor class for working with list data/ класс для работы с данными списка
   */
  constructor(
    protected readonly props: ChipGroupProps,
    protected readonly refs: ToRefs<ChipGroupProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ChipGroupComponents, ChipGroupProps>,
    protected readonly slots?: ChipGroupSlots,
    protected readonly emits?: ConstrEmit<ChipGroupEmits>,
    EventClickIncludeConstructor: typeof EventClickInclude = EventClickInclude,
    ModelValueIncludeConstructor: typeof ModelValueInclude = ModelValueInclude,
    ListDataRefConstructor: typeof ListDataRef = ListDataRef
  ) {
    this.event = new EventClickIncludeConstructor(undefined, undefined, this.emits)
    this.model = new ModelValueIncludeConstructor<ListSelectedList>(
      'selected',
      this.emits,
      this.event,
      this.refs.selected,
      this.refs.readonly
    )

    this.data = new ListDataRefConstructor(
      this.refs.list,
      undefined,
      undefined,
      undefined,
      undefined,
      this.model.value,
      this.refs.keyValue,
      this.refs.keyLabel
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
}
