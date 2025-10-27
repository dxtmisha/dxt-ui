import { getElement } from '../functions/getElement'
import { getElementOrWindow } from '../functions/getElementOrWindow'
import { isInDom } from '../functions/isInDom'
import { isNull } from '../functions/isNull'
import { isObject } from '../functions/isObject'
import { toArray } from '../functions/toArray'

import {
  type ElementOrString,
  type ElementOrWindow,
  type EventActivityItem,
  type EventListenerDetail,
  type EventOptions
} from '../types/basicTypes'

/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
export class EventItem<
  E extends ElementOrWindow,
  O extends Event,
  D extends Record<string, any> = Record<string, any>
> {
  /**
   * Element.
   *
   * Элемент.
   */
  protected element?: E

  /**
   * Element for checking. If the element is missing in the DOM, the event is turned off.
   *
   * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
   */
  protected elementControl?: ElementOrWindow
  protected elementControlEdit?: boolean

  /**
   * A case-sensitive string representing the event type to listen for.
   *
   * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
   */
  protected type: string[]

  /**
   * The object that receives a notification (an object that implements the Event interface)
   * when an event of the specified type occurs. This must be null, an object with a
   * handleEvent() method, or a JavaScript function.
   *
   * Объект, который принимает уведомление, когда событие указанного типа произошло.
   * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
   */
  protected listenerRecent = (event?: O | ResizeObserverEntry): void => {
    if (isInDom(this.elementControl)) {
      this.listener?.call(this.element, event as O, this.detail)

      if (
        isObject(this.options)
        && this.options?.once
      ) {
        this.stop()
      }
    } else {
      this.stop()
    }
  }

  /**
   * Event states.
   *
   * Состояния события.
   */
  protected activity = false
  protected activityItems: EventActivityItem<E>[] = []

  /**
   * Classes Constructor
   * @param elementSelector element/ элемент
   * @param type type/ тип
   * @param listener the object that receives a notification (an object that implements the
   * Event interface) when an event of the specified type occurs/ объект, который принимает
   * уведомление, когда событие указанного типа произошло
   * @param options object that specifies characteristics/ объект options
   * @param detail an event-dependent value associated with the event/ зависимое от события
   * значение, связанное с событием
   */
  constructor(
    elementSelector?: ElementOrString<E>,
    type: string | string[] = ['click'],
    protected listener?: EventListenerDetail<O, D>,
    protected options?: EventOptions,
    protected detail?: D
  ) {
    this.element = getElementOrWindow(elementSelector)
    this.elementControl = getElement(elementSelector)
    this.type = toArray(type)
  }

  /**
   * Checks whether event listening is currently enabled.
   *
   * Проверяет, включено ли сейчас прослушивание события.
   */
  isActive(): boolean {
    return this.activity
  }

  getElement(): E | undefined {
    return this.element
  }

  /**
   * Change of an element for tracking.
   *
   * Изменение элемента для прослеживания.
   * @param elementSelector element/ элемент
   */
  setElement(elementSelector?: ElementOrString<E>): this {
    const element = getElementOrWindow(elementSelector)

    if (!this.elementControlEdit) {
      this.elementControl = getElement(elementSelector)
    }

    this.element = element
    this.reset()

    return this
  }

  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param elementSelector element/ элемент
   */
  setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this {
    this.elementControl = getElement(elementSelector)
    this.elementControlEdit = !isNull(this.elementControl)

    if (!this.elementControlEdit) {
      this.elementControl = getElement(this.element)
    }

    return this
  }

  /**
   * Changes the type of the handled event.
   *
   * Изменяет тип обрабатываемого события.
   * @param type type/ тип
   */
  setType(type: string | string[]): this {
    this.type = toArray(type)
    this.reset()

    return this
  }

  /**
   * Modifies the object that receives the notification.
   *
   * Модифицирует объект, который получает уведомление.
   * @param listener
   */
  setListener(listener: EventListenerDetail<O, D>): this {
    this.listener = listener
    return this
  }

  /**
   * Modifying the options object that defines the characteristics of an object.
   *
   * Изменение объекта options, который определяет характеристики объекта.
   * @param options
   */
  setOptions(options?: EventOptions): this {
    this.options = options
    this.reset()

    return this
  }

  /**
   * Modifying a dependent value for the dispatch method.
   *
   * Изменение зависимого значения для метода dispatch.
   * @param detail
   */
  setDetail(detail?: D): this {
    this.detail = detail
    return this
  }

  /**
   * The method of the EventTarget sends an Event to the object, (synchronously) invoking
   * the affected EventListeners in the appropriate order.
   *
   * Отправляет событие в общую систему событий. Это событие подчиняется тем же правилам
   * поведения "Захвата" и "Всплывания" как и непосредственно инициированные события.
   * @param detail an event-dependent value associated with the event/ зависимое от события
   * значение, связанное с событием
   */
  dispatch(detail: D | undefined = this.detail): this {
    this.type.forEach(
      type => this.element?.dispatchEvent(new CustomEvent(type, { detail }))
    )

    return this
  }

  /**
   * Starting event listening.
   *
   * Запуск прослушивания события.
   */
  start(): this {
    if (!this.activity) {
      this.activity = true
      this.activityItems = []

      this.type.forEach((type) => {
        if (this.element) {
          if (
            !(type === 'resize' && this.makeResize())
            && !(type === 'scroll-sync' && this.makeScroll())
          ) {
            this.element.addEventListener(type, this.listenerRecent as EventListener, this.options)
            this.activityItems.push({
              element: this.element,
              type
            })
          }
        }
      })
    }

    return this
  }

  /**
   * Stopping event listening.
   *
   * Остановка прослушивания события.
   */
  stop(): this {
    if (this.activity) {
      this.activity = false
      this.activityItems.forEach(({
        element,
        type,
        listener,
        observer
      }) => {
        if (observer) {
          observer.disconnect()
        } else if (listener) {
          element?.removeEventListener(type, listener as EventListener)
        } else {
          element?.removeEventListener(type, this.listenerRecent as EventListener)
        }
      })
    }

    return this
  }

  /**
   * Toggling event handler state.
   *
   * Переключение состояния работы события.
   * @param activity event activation/ активация события
   */
  toggle(activity: boolean): this {
    return activity ? this.start() : this.stop()
  }

  /**
   * Overloads the listening events.
   *
   * Перегружает события прослушивания.
   */
  reset() {
    if (this.activity) {
      this.stop()
      this.start()
    }

    return this
  }

  /**
   * Checks if the ResizeObserver object exists.
   *
   * Проверяет, существует ли объект ResizeObserver.
   */
  protected isObserver(): boolean {
    return 'ResizeObserver' in window
  }

  /**
   * The implementation of the resize event for an element.
   *
   * Реализация события изменения размера для элемента.
   */
  protected makeResize(): boolean {
    if (
      this.element
      && this.element instanceof HTMLElement
      && this.element !== document.body
      && this.isObserver()
    ) {
      const observer = new ResizeObserver(
        (entries: ResizeObserverEntry[]) => this.listenerRecent(entries?.[0])
      )

      observer.observe(this.element)

      this.activityItems.push({
        element: this.element,
        type: 'resize',
        observer
      })

      return true
    }

    return false
  }

  /**
   * Implementation of the scroll event for an element.
   *
   * Реализация события изменения положения скролла для элемента.
   */
  protected makeScroll(): boolean {
    if (this.element) {
      let go = false
      const listener = (event: O): void => {
        if (!go) {
          go = true
          requestAnimationFrame(() => {
            this.listenerRecent(event)
            go = false
          })
        }
      }

      this.element.addEventListener('scroll', listener as EventListener, this.options)
      this.element.addEventListener('resize', listener as EventListener, this.options)
      this.activityItems.push(
        {
          element: this.element,
          type: 'scroll',
          listener
        },
        {
          element: this.element,
          type: 'resize',
          listener
        }
      )

      return true
    }

    return false
  }
}
