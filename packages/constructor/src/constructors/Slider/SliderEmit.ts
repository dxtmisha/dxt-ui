import { watch } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import type { ModelValueInclude } from '../../classes/ModelValueInclude'

import type { SliderThumbMax } from './SliderThumbMax'
import type { SliderThumbMin } from './SliderThumbMin'
import type { SliderValue } from './SliderValue'

import type { SliderEventDetail, SliderValueType } from './basicTypes'
import type { SliderEmits } from './types'
import type { SliderProps } from './props'

/**
 * Class for managing slider event emission and event detail generation.
 *
 * Класс для управления отправкой событий слайдера и генерации объекта деталей событий.
 */
export class SliderEmit {
  /**
   * Constructor
   * @param props input properties / входящие свойства
   * @param model model value helper / помощник значения модели
   * @param value slider value bounds manager / менеджер значений слайдера
   * @param minElement min thumb handle manager / менеджер минимального ползунка
   * @param maxElement max thumb handle manager / менеджер максимального ползунка
   * @param emits event emitter function / функция генерации событий
   */
  constructor(
    protected readonly props: SliderProps,
    protected readonly model: ModelValueInclude<SliderValueType>,
    protected readonly value: SliderValue,
    protected readonly minElement: SliderThumbMin,
    protected readonly maxElement: SliderThumbMax,
    protected readonly emits?: ConstrEmit<SliderEmits>
  ) {
    if (this.emits) {
      watch(
        this.model.value,
        () => this.emit('input')
      )
    }
  }

  /**
   * Emits input and change events with detail payload.
   *
   * Испускает события input и change с объектом деталей.
   * @param eventName event key / имя события
   */
  emit(eventName: 'input' | 'change'): void {
    const value = this.model.getValue()
    const detail = this.getDetail()

    if (value) {
      (this.emits as any)?.(eventName, value, detail)
    }
  }

  /**
   * Builds detail object payload for events.
   *
   * Формирует объект деталей для событий.
   * @returns event detail object / объект деталей события
   */
  protected getDetail(): SliderEventDetail {
    if (this.props.multiple) {
      return this.getDetailMultiple()
    }

    return this.getDetailSingle()
  }

  /**
   * Builds detail object payload for multiple range mode.
   *
   * Формирует объект деталей для режима диапазона.
   * @returns event detail object for range / объект деталей для диапазона
   */
  protected getDetailMultiple(): SliderEventDetail {
    const minItem = this.minElement.getItem()
    const maxItem = this.maxElement.getItem()

    return {
      mark: [
        this.value.min,
        this.value.max
      ],
      item: [
        minItem,
        maxItem
      ],
      value: [
        minItem.value,
        maxItem.value
      ]
    }
  }

  /**
   * Builds detail object payload for single thumb mode.
   *
   * Формирует объект деталей для одиночного режима.
   * @returns event detail object for single mode / объект деталей для одиночного режима
   */
  protected getDetailSingle(): SliderEventDetail {
    const maxItem = this.maxElement.getItem()

    return {
      mark: this.value.max,
      item: maxItem,
      value: maxItem.value
    }
  }
}
