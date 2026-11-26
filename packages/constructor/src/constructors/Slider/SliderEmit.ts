// ai-none

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
   * Constructor.
   *
   * Конструктор.
   * @param props input properties / входящие свойства
   * @param maxElement getter returning max thumb handle manager / функция, возвращающая менеджер максимального ползунка
   * @param minElement getter returning min thumb handle manager / функция, возвращающая менеджер минимального ползунка
   * @param model getter returning model value helper / функция, возвращающая помощник значения модели
   * @param value getter returning slider value bounds manager / функция, возвращающая менеджер значений слайдера
   * @param emits event emitter function / функция генерации событий
   */
  constructor(
    protected readonly props: Readonly<SliderProps>,
    protected readonly maxElement: () => SliderThumbMax,
    protected readonly minElement: () => SliderThumbMin,
    protected readonly model: () => ModelValueInclude<SliderValueType>,
    protected readonly value: () => SliderValue,
    protected readonly emits?: ConstrEmit<SliderEmits>
  ) {
  }

  /**
   * Emits input and change events with detail payload.
   *
   * Испускает события input и change с объектом деталей.
   * @param eventName event key / имя события
   */
  emit(eventName: 'input' | 'change'): void {
    const value = this.model().get()

    if (value !== undefined) {
      const detail = this.getDetail()

      if (eventName === 'input') {
        this.emits?.('input', detail)
        this.emits?.('inputLite', value)
      } else if (eventName === 'change') {
        this.emits?.('change', detail)
        this.emits?.('changeLite', value)
      }
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
    const minItem = this.minElement().getItem()
    const maxItem = this.maxElement().getItem()
    const valueItem = this.value()

    return {
      mark: [
        valueItem.min,
        valueItem.max
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
    const maxItem = this.maxElement().getItem()

    return {
      mark: this.value().max,
      item: maxItem,
      value: maxItem.value
    }
  }
}
