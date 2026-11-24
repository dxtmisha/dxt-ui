import { computed, toRef } from 'vue'
import {
  type ConstrItems,
  DesignLogicAbstract,
  ListDataRef,
  type ListList,
  type ListSelectedList
} from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelValueInclude } from '../../classes/ModelValueInclude'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { ChipGroupProps } from './props'
import type { ChipGroupComponents, ChipGroupEmits, ChipGroupSlots } from './types'

/** ChipGroup dependency constructors type / Тип конструкторов зависимостей ChipGroup */
export type ChipGroupConstructors = {
  /** List data manager constructor / Конструктор менеджера данных списка */
  data: typeof ListDataRef
  /** Click event handler constructor / Конструктор обработчика событий клика */
  event: typeof EventClickInclude
  /** Model value manager constructor / Конструктор менеджера значения модели */
  model: typeof ModelValueInclude<ListSelectedList | undefined>
}

/**
 * ChipGroup orchestrator class for managing a collection of chips, selection state,
 * and click event dispatching.
 *
 * Класс-оркестратор ChipGroup для управления коллекцией чипов, состоянием выбора
 * и обработкой событий клика.
 */
export class ChipGroup extends DesignLogicAbstract<
  HTMLDivElement,
  ChipGroupComponents,
  ChipGroupEmits,
  ChipGroupSlots,
  ChipGroupProps,
  ChipGroupConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ChipGroupConstructors> = {
    data: {
      item: ListDataRef,
      parameters: () => [
        toRef(this.props, 'list'),
        undefined,
        undefined,
        undefined,
        undefined,
        computed(() => this.i('model').value.value),
        toRef(this.props, 'keyValue'),
        toRef(this.props, 'keyLabel')
      ]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        undefined,
        this.emits
      ]
    },
    model: {
      item: ModelValueInclude<ListSelectedList | undefined>,
      parameters: () => [
        'selected',
        this.emits,
        undefined,
        computed(() => this.props.modelSelected ?? this.props.selected),
        () => this.props.readonly,
        () => this.props.multiple
      ]
    }
  }

  /**
   * Returns normalized list of chip items with computed selection states.
   *
   * Возвращает нормализованный список элементов чипов с вычисленными состояниями выбора.
   * @returns list of chip items / список элементов чипов
   */
  getList(): ListList {
    return this.i('data').fullData.value
  }

  /**
   * Handles chip click event, updates selection model when editable, and emits click events.
   *
   * Обрабатывает событие клика по чипу, обновляет модель выбора при доступности редактирования и эмитит события клика.
   * @param event native mouse click event / нативное событие клика мыши
   * @param options event click payload / данные события клика
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    this.i('model').onClick(event, options)
    this.i('event').onClick(event, options)
  }
}
