// ai-none

import type { ConstrEmit } from '@dxtmisha/functional'

import type { MaskValidation } from './MaskValidation'
import type { MaskEventData } from './basicTypes'
import type { MaskEmits } from './types'

/**
 * Class for event invocation
 *
 * Класс для вызова событий
 */
export class MaskEmit {
  /** Current event type key/ Текущий ключ типа события */
  protected type?: string & keyof MaskEmits
  /** Native event object/ Объект нативного события */
  protected event?: Event
  /** Deferred input/change type preserved across synchronous key/focus events/ Отложенный тип input/change, сохраняемый при синхронных событиях клавиш/фокуса */
  protected deferredType?: 'input' | 'change'
  /** Deferred native event object for input/change/ Отложенный нативный объект события для input/change */
  protected deferredEvent?: Event

  /**
   * Constructor
   * @param validation object for working with validation/ объект для работы с валидацией
   * @param emits emit function (Design system bridge)/ функция вызова события
   */
  constructor(
    protected readonly validation: () => MaskValidation,
    protected readonly emits?: ConstrEmit<MaskEmits>
  ) {
  }

  /**
   * Checks whether extra data (validation) should be generated for current event
   *
   * Проверяет, нужно ли генерировать дополнительные данные (валидацию) для текущего события
   * @returns true if validation data is required / true, если нужны данные валидации
   */
  isValue(
    type: (string & keyof MaskEmits) | undefined = this.type ?? this.deferredType
  ): boolean {
    return Boolean(type && ['input', 'change'].indexOf(type) >= 0)
  }

  /**
   * Sets both event type and native event object
   *
   * Устанавливает одновременно тип события и объект события
   * @param type event name/ название события
   * @param event event object/ объект события
   * @returns current instance / текущий экземпляр
   */
  set<E extends Event>(
    type: string & keyof MaskEmits,
    event: E
  ): this {
    this.setType(type)
    this.setEvent(event)

    return this
  }

  /**
   * Sets event type
   *
   * Устанавливает тип события
   * @param type event name/ название события
   * @returns current instance / текущий экземпляр
   */
  setType(type: string & keyof MaskEmits): this {
    this.type = type

    if (type === 'input' || type === 'change') {
      this.deferredType = type
    }

    return this
  }

  /**
   * Sets native event object
   *
   * Устанавливает объект события
   * @param event event object/ объект события
   * @returns current instance / текущий экземпляр
   */
  setEvent<E extends Event>(event: E): this {
    this.event = event

    if (this.type === 'input' || this.type === 'change') {
      this.deferredEvent = event
    }

    return this
  }

  /**
   * Resets all internal state (type + event)
   *
   * Сбрасывает всё внутреннее состояние (тип и событие)
   * @returns current instance / текущий экземпляр
   */
  reset(): this {
    this.resetType()
    this.resetEvent()

    return this
  }

  /**
   * Resets stored event type
   *
   * Сбрасывает сохранённый тип события
   * @returns current instance / текущий экземпляр
   */
  resetType(): this {
    this.type = undefined
    this.deferredType = undefined
    this.deferredEvent = undefined

    return this
  }

  /**
   * Resets stored native event
   *
   * Сбрасывает сохранённый объект события
   * @returns current instance / текущий экземпляр
   */
  resetEvent(): this {
    this.event = undefined
    this.deferredEvent = undefined

    return this
  }

  /**
   * Initializes event handling and emits event with optional validation payload
   *
   * Инициализирует обработку и вызывает событие с опциональной валидацией
   * @returns current instance / текущий экземпляр
   */
  go(): this {
    const type = this.type ?? this.deferredType
    const event = this.type ? this.event : this.deferredEvent

    if (
      type
      && event
    ) {
      const isValueEvent = this.isValue(type)
      const validation = isValueEvent ? this.validation().item.value : undefined

      this.emits?.(
        type as 'input',
        event as InputEvent,
        validation as MaskEventData
      )

      if (type === 'input' && validation) {
        this.emits?.(
          'inputLite',
          validation
        )
      }

      if (type === 'change' && validation) {
        this.emits?.(
          'changeLite',
          validation
        )
      }

      if (isValueEvent) {
        this.deferredType = undefined
        this.deferredEvent = undefined
      }

      this.type = undefined
    }

    return this
  }
}
