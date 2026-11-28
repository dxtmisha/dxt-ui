import {
  type ConstrEmit,
  type ConstrHrefProps,
  isEnter,
  isObjectNotArray,
  RouterItemRef
} from '@dxtmisha/functional'

import type { EnabledInclude } from './EnabledInclude'

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
   * @param enabled callback returning object for activity status management / функция обратного вызова, возвращающая объект для управления статусом активности
   * @param emits callback function for triggering events / функция обратного вызова для вызова событий
   */
  constructor(
    protected readonly props?: EventClickProps,
    protected readonly enabled?: () => EnabledInclude | undefined,
    protected readonly emits?: ConstrEmit<EventClickEmits>
  ) {
  }

  /**
   * Returns binding properties for the HTML element.
   *
   * Возвращает свойства привязки для HTML-элемента.
   * @returns object containing event and link bindings / объект, содержащий привязки событий и ссылок
   */
  get binds(): ConstrHrefProps & {
    onClick: (event: MouseEvent, options?: EventClickValue) => void
    onKeydown: (event: KeyboardEvent, options?: EventClickValue) => void
  } {
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
      getValue: () => this.getValue(),
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
      isObjectNotArray(to)
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
  ): void => {
    if (this.isDisabled()) {
      event.preventDefault()
      return
    }

    if (this.emits) {
      if (options) {
        if (this.isEnabled()) {
          this.emit(event, options)
        }
      } else if (this.toRouter()) {
        event.preventDefault()
      } else if (this.isTargetHref(event)) {
        return
      } else {
        const optionsItem = this.getOptions(event)

        if (
          this.isEnabled()
          || optionsItem.type === 'icon-trailing'
        ) {
          this.emit(event, optionsItem)
        }
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
  ): void => {
    if (
      this.isDisabled()
      || this.isTargetHref(event)
    ) {
      return
    }

    if (isEnter(event)) {
      this.onClick(event as unknown as MouseEvent, options)
      event.preventDefault()
    }
  }

  /**
   * Checks if the component is disabled for click handling.
   *
   * Проверяет, отключён ли компонент для обработки клика.
   * @returns true if component is disabled / true, если компонент отключён
   */
  protected isDisabled(): boolean {
    return Boolean(this.enabled?.()?.isDisabled)
  }

  /**
   * Checks if the component is active for click handling and navigation.
   *
   * Проверяет, активен ли компонент для обработки клика и навигации.
   * @returns true if enabled manager is omitted or component is enabled / true, если менеджер активности отсутствует или компонент активен
   */
  protected isEnabled(): boolean {
    const enabled = this.enabled?.()

    return !enabled || enabled.isEnabled
  }

  /**
   * Checks if the clicked target belongs to an `<a>` element matching this component's `href`.
   *
   * Проверяет, относится ли целевой элемент клика к элементу `<a>`, ссылка которого совпадает с собственным `href` компонента.
   * @param event mouse or keyboard event object / объект события мыши или клавиатуры
   * @returns true if target is inside `<a href>` matching `props.href` / true, если цель находится внутри `<a href>`, совпадающего с `props.href`
   */
  protected isTargetHref(event: MouseEvent | KeyboardEvent): boolean {
    const href = this.props?.href

    if (
      href
      && !this.props?.to
    ) {
      return (event.target as HTMLElement | null)
        ?.closest?.('a[href]')
        ?.getAttribute('href') === href
    }

    return false
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
      value: this.getValue(),
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
  protected getTargetType(event: MouseEvent): string {
    const type = (event.target as HTMLElement | null)
      ?.closest?.<HTMLElement>('[data-event-type]')
      ?.dataset
      ?.eventType

    return type ?? 'click'
  }

  /**
   * Returns the component value or falls back to the index.
   *
   * Возвращает значение компонента или индекс в качестве запасного значения.
   * @returns component value or index / значение компонента или индекс
   */
  protected getValue(): EventClickValue['value'] | undefined {
    return this.props?.value ?? this.props?.index
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
  ): void {
    if (this.emits) {
      this.emits('click', event, options)
      this.emits('clickLite', options)
    }
  }

  /**
   * Performs client-side navigation using the router if `to` property is set.
   *
   * Выполняет клиентскую навигацию с использованием роутера, если установлено свойство `to`.
   * @returns true if navigation was handled by the router, false otherwise / true, если навигация была обработана роутером, иначе false
   */
  protected toRouter(): boolean {
    const to = this.props?.to

    if (
      to
      && this.isEnabled()
    ) {
      RouterItemRef.push(to)
      return true
    }

    return false
  }
}
