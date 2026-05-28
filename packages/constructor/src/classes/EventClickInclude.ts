import {
  type ConstrEmit,
  type ConstrHrefProps,
  isEnter,
  isObjectNotArray,
  RouterItemRef
} from '@dxtmisha/functional'

import { EnabledInclude } from './EnabledInclude'

import type {
  EventClickEmits,
  EventClickExpose,
  EventClickProps,
  EventClickValue
} from '../types/eventClickTypes'

/**
 * Base class for managing button events and click logic.
 * It handles standard browser clicks, keyboard interactions, router navigation, and emits click events.
 *
 * Базовый класс для управления событиями кнопки и логикой клика.
 * Обрабатывает стандартные клики браузера, клавиатурные взаимодействия, навигацию роутера и вызывает события клика.
 */
export class EventClickInclude {
  /**
   * Constructor for initializing EventClickInclude.
   *
   * Конструктор для инициализации EventClickInclude.
   * @param props input properties / входные свойства
   * @param enabled object for activity status management / объект для управления статусом активности
   * @param emits callback function for triggering events / функция обратного вызова для вызова событий
   */
  constructor(
    protected readonly props?: EventClickProps,
    protected readonly enabled?: EnabledInclude,
    protected readonly emits?: ConstrEmit<EventClickEmits>
  ) {
  }

  /**
   * Returns binding properties for the HTML element.
   *
   * Возвращает свойства привязки для HTML-элемента.
   * @returns object containing event and link bindings / объект, содержащий привязки событий и ссылок
   */
  get binds() {
    return {
      ...this.href,
      onClick: this.onClick,
      onKeydown: this.onKeydown
    }
  }

  /**
   * Exported component values.
   *
   * Экспонируемые значения компонента.
   * @returns object with exported values and details / объект с экспонируемыми значениями и деталями
   */
  get expose(): EventClickExpose {
    return {
      getValue: () => this.props?.value,
      getDetail: () => this.props?.detail
    }
  }

  /**
   * Link value properties.
   *
   * Свойства значения ссылки.
   * @returns computed link properties / вычисленные свойства ссылки
   */
  get href(): ConstrHrefProps {
    const to = this.props?.to

    if (
      this.props?.to
      && isObjectNotArray(to)
      && 'name' in to
    ) {
      return RouterItemRef.rawToHref(to)
    }

    return {
      href: this.props?.href
    }
  }

  /**
   * Event trigger function for click events.
   *
   * Функция вызова события для событий клика.
   * @param event mouse event object / объект события мыши
   * @param options optional event value options / необязательные параметры значения события
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
          this.enabled.isEnabled
          || (
            optionsItem.type === 'icon-trailing'
            && !this.enabled.isDisabled
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
   * Event trigger function when pressing the Space or Enter key.
   *
   * Функция вызова события при нажатии на клавишу Пробел или Enter.
   * @param event keyboard event object / объект события клавиатуры
   * @param options optional event value options / необязательные параметры значения события
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
   * Standardized click options and payload values for the event.
   *
   * Стандартизированные параметры клика и значения полезной нагрузки для события.
   * @param event mouse event object / объект события мыши
   * @returns processed click payload / обработанная полезная нагрузка клика
   */
  protected getOptions(event: MouseEvent): EventClickValue {
    return {
      type: this.getTargetType(event),
      value: this.props?.value,
      detail: this.props?.detail
    }
  }

  /**
   * Returns the type of the target element based on the `data-event-type` attribute.
   *
   * Возвращает тип целевого элемента на основе атрибута `data-event-type`.
   * @param event mouse event object / объект события мыши
   * @returns detected target type / определенный тип целевого элемента
   */
  protected getTargetType(event: MouseEvent) {
    const type = (event.target as HTMLElement)
      ?.closest<HTMLElement>('[data-event-type]')
      ?.dataset
      ?.eventType

    return type ?? 'click'
  }

  /**
   * Performs client-side navigation using the router if `to` property is set.
   *
   * Выполняет клиентскую навигацию с использованием роутера, если установлено свойство `to`.
   * @returns true if navigation was handled by the router, false otherwise / true, если навигация была обработана роутером, иначе false
   */
  protected toRouter(): boolean {
    if (this.props?.to) {
      RouterItemRef.push(this.props?.to)
      return true
    }

    return false
  }

  /**
   * Triggers the component click emits (click and clickLite).
   *
   * Вызывает события клика компонента (click и clickLite).
   * @param event mouse event object / объект события мыши
   * @param options processed click payload / обработанная полезная нагрузка клика
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
