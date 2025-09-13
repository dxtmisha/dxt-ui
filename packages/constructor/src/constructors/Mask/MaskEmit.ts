import { MaskValidation } from './MaskValidation'
import type { ConstrEmit } from '@dxt-ui/functional'

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

  /**
   * Constructor
   * @param validation object for working with validation/ объект для работы с валидацией
   * @param emits emit function (Design system bridge)/ функция вызова события
   */
  constructor(
    protected readonly validation: MaskValidation,
    protected readonly emits?: ConstrEmit<MaskEmits>
  ) {
  }

  /**
   * Checks whether extra data (validation) should be generated for current event
   *
   * Проверяет, нужно ли генерировать дополнительные данные (валидацию) для текущего события
   */
  isValue(): boolean {
    return Boolean(this.type && ['input', 'change'].indexOf(this.type) >= 0)
  }

  /**
   * Initializes event handling and emits event with optional validation payload
   *
   * Инициализирует обработку и вызывает событие с опциональной валидацией
   */
  go(): this {
    if (
      this.type
      && this.event
    ) {
      const validation = this.isValue() ? this.validation.item.value : undefined

      this.emits?.(
        this.type as 'input',
        this.event as InputEvent,
        validation as MaskEventData
      )

      if (
        this.type === 'inputLite'
        || this.type === 'changeLite'
      ) {
        this.emits?.(
          this.type as never,
          validation as never
        )
      }
    }

    return this
  }

  /**
   * Sets both event type and native event object
   *
   * Устанавливает одновременно тип события и объект события
   * @param type event name/ название события
   * @param event event object/ объект события
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
   */
  setType(type: string & keyof MaskEmits): this {
    this.type = type
    return this
  }

  /**
   * Sets native event object
   *
   * Устанавливает объект события
   * @param event event object/ объект события
   */
  setEvent<E extends Event>(event: E): this {
    this.event = event
    return this
  }

  /**
   * Resets all internal state (type + event)
   *
   * Сбрасывает всё внутреннее состояние (тип и событие)
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
   */
  resetType(): this {
    this.type = undefined
    return this
  }

  /**
   * Resets stored native event
   *
   * Сбрасывает сохранённый объект события
   */
  resetEvent(): this {
    this.event = undefined
    return this
  }
}
