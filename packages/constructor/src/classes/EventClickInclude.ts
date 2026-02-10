import { toRefs, type ToRefs } from 'vue'
import { type ConstrEmit, isEnter, RouterItemRef } from '@dxtmisha/functional'

import { EnabledInclude } from './EnabledInclude'

import type {
  EventClickEmits,
  EventClickExpose,
  EventClickProps,
  EventClickValue
} from '../types/eventClickTypes'

/**
 * Base class for working with button events
 *
 * Базовый класс для работы с событиями кнопки
 */
export class EventClickInclude {
  protected readonly refs?: ToRefs<EventClickProps>

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param enabled Object for working with activity status/ Объект для работы со статусом активности
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props?: EventClickProps,
    protected readonly enabled?: EnabledInclude,
    protected readonly emits?: ConstrEmit<EventClickEmits>
  ) {
    this.refs = props ? toRefs(props) : undefined
  }

  /**
   * Exported values
   *
   * Экспортируемые значения
   */
  get expose(): EventClickExpose {
    return {
      value: this.refs?.value,
      detail: this.refs?.detail
    }
  }

  /**
   * Event trigger function
   *
   * Функция вызова события
   * @param event event object/ объект события
   * @param options data object/ объект с данными
   */
  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ) => {
    if (this.emits) {
      if (options) {
        this.emit(event, options)
      } else if (this.toRouter()) {
        event.preventDefault()
      } else if (this.enabled) {
        const optionsItem = this.getOptions(event)

        if (
          this.enabled.isEnabled.value
          || (
            optionsItem.type === 'icon-trailing'
            && !this.enabled.isDisabled.value
          )
        ) {
          this.emit(event, optionsItem)
        }
      } else {
        this.emit(event, this.getOptions(event))
      }
    }
  }

  /**
   * Event trigger function when pressing the space bar or enter key
   *
   * Функция вызова события при нажатии на пробел или клавишу Enter
   * @param event event object/ объект события
   * @param options data object/ объект с данными
   */
  readonly onKeydown = (
    event: KeyboardEvent,
    options?: EventClickValue
  ) => {
    if (isEnter(event)) {
      this.onClick(event as unknown as MouseEvent, options)
      event.preventDefault()
    }
  }

  /**
   * Parameters for the event
   *
   * Параметры для события
   */
  protected getOptions(event: MouseEvent): EventClickValue {
    return {
      type: this.getTargetType(event),
      value: this.props?.value,
      detail: this.props?.detail
    }
  }

  /**
   * Returns the type of the selected item
   *
   * Возвращает тип выбранного элемента
   */
  protected getTargetType(event: MouseEvent) {
    const type = (event.target as HTMLElement)
      ?.closest<HTMLElement>('[data-event-type]')
      ?.dataset
      ?.eventType

    return type ?? 'click'
  }

  /**
   * Changing the link through the router
   *
   * Изменение ссылки через router
   */
  protected toRouter(): boolean {
    if (this.props?.to) {
      RouterItemRef.push(this.props?.to)
      return true
    }

    return false
  }

  /**
   * Triggers the click event
   *
   * Вызывает событие клика
   * @param event event object/ объект события
   * @param options data object/ объект с данными
   */
  protected emit(
    event: MouseEvent,
    options: EventClickValue
  ) {
    if (this.emits) {
      this.emits('click', event, options)
      this.emits('clickLite', options)
    }
  }
}
