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
 * Advanced wrapper for managing event listeners on DOM elements or the `window` object.
 *
 * `EventItem` simplifies the entire event lifecycle (start, stop, toggle, reset), provides
 * built-in optimizations for high-frequency events, and ensures DOM safety by automatically
 * checking if elements are still in the document.
 *
 * ### Key Features:
 * - **Lifecycle Control**: Easily `start`, `stop`, `toggle`, or `reset` event listeners.
 * - **DOM Safety**: Automatically halts the event if the target element is removed from the DOM.
 * - **Specialized Optimizations**:
 *   - `resize`: Uses `ResizeObserver` for any HTML element (not limited to `window`).
 *   - `scroll-sync`: High-performance scroll tracking using `requestAnimationFrame`.
 * - **Dynamic Configuration**: Chained setters for target element, event type, listener, and options.
 * - **Custom Event Dispatching**: Built-in support for triggering events with custom data via `dispatch`.
 * - **Strict Typing**: Generic support for elements, event objects, and custom detail data.
 *
 * ---
 *
 * Продвинутая обертка для управления слушателями событий на DOM-элементах или объекте `window`.
 *
 * `EventItem` упрощает весь жизненный цикл событий (запуск, остановка, переключение, сброс),
 * предоставляет встроенную оптимизацию для тяжелых событий и гарантирует безопасность работы с DOM,
 * автоматически проверяя наличие элементов в документе.
 *
 * ### Ключевые особенности:
 * - **Управление циклом**: Простой контроль через методы `start`, `stop`, `toggle` и `reset`.
 * - **Безопасность DOM**: Автоматическая остановка события, если целевой элемент удален из DOM.
 * - **Специальные оптимизации**:
 *   - `resize`: Использует `ResizeObserver` для любых HTML-элементов (не только для `window`).
 *   - `scroll-sync`: Высокопроизводительный трекинг скролла через `requestAnimationFrame`.
 * - **Динамическая настройка**: Чейнинг сеттеров для смены цели, типа события, метода или опций.
 * - **Диспетчеризация**: Встроенная поддержка вызова событий с передачей пользовательских данных через `dispatch`.
 * - **Строгая типизация**: Поддержка дженериков для типа элемента, объекта события и структуры данных.
 *
 * ---
 *
 * ### Usage Examples / Примеры использования:
 *
 * #### 1. Basic Listener / Базовый слушатель
 * ```typescript
 * const clickEvent = new EventItem('.btn', 'click', (e) => console.log('Clicked!'));
 * clickEvent.start();
 * ```
 *
 * #### 2. Specialized 'resize' and 'scroll-sync' / Оптимизированные 'resize' и 'scroll-sync'
 * ```typescript
 * // Tracks any element's size / Отслеживает размер любого элемента
 * const resizeEvent = new EventItem('.box', 'resize', (entry) => console.log('New size:', entry));
 *
 * // Performance-optimized scroll / Оптимизированный скролл
 * const scrollEvent = new EventItem(window, 'scroll-sync', () => console.log('Scrolling...'));
 *
 * resizeEvent.start();
 * scrollEvent.start();
 * ```
 *
 * #### 3. Custom Data and Dispatching / Пользовательские данные и диспетчеризация
 * ```typescript
 * interface UserData { id: number }
 * const emitter = new EventItem<Window, CustomEvent, UserData>(window, 'user-update');
 *
 * emitter.setListener((e, detail) => {
 *   console.log('Update received for ID:', detail?.id);
 * });
 *
 * emitter.start();
 *
 * // Trigger manually with data / Вызов вручную с данными
 * emitter.dispatch({ id: 456 });
 * ```
 *
 * #### 4. Chaining and Dynamic Updates / Чейнинг и динамическое обновление
 * ```typescript
 * const tracker = new EventItem('.item-1', 'mousemove', (e) => console.log(e.clientX));
 *
 * // Switch element on the fly / Переключение элемента "на лету"
 * tracker.start().setElement('.item-2');
 * ```
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
   * Constructor for EventItem.
   *
   * Конструктор для EventItem.
   * @param elementSelector target element or selector where the listener should be attached / целевой элемент или селектор, к которому должен быть прикреплен слушатель
   * @param type event type (e.g., 'click'), array of types, or special optimization types ('resize', 'scroll-sync') / тип события (например, 'click'), массив типов или специальные типы оптимизации ('resize', 'scroll-sync')
   * @param listener the handler function to be executed when the event occurs / функция-обработчик, которая будет выполнена при возникновении события
   * @param options standard EventListenerOptions or boolean for useCapture / стандартные EventListenerOptions или логическое значение для useCapture
   * @param detail additional data provided to the listener via the custom Event interaction / дополнительные данные, предоставляемые слушателю через кастомное взаимодействие с событием
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
   * Triggers the events on the target element, optionally with a new detail value.
   * This method manually initiates a `CustomEvent` dispatch for all specified types.
   *
   * Инициирует события на целевом элементе, опционально с новым значением detail.
   * Этот метод вручную запускает диспетчеризацию `CustomEvent` для всех указанных типов.
   * @param detail the value to be passed as the event detail / значение, которое будет передано как detail события
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
