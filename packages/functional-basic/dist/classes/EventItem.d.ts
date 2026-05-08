import { ElementOrString, ElementOrWindow, EventActivityItem, EventListenerDetail, EventOptions } from '../types/basicTypes';
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
export declare class EventItem<E extends ElementOrWindow, O extends Event, D extends Record<string, any> = Record<string, any>> {
    protected listener?: EventListenerDetail<O, D> | undefined;
    protected options?: EventOptions;
    protected detail?: D | undefined;
    /**
     * Element.
     *
     * Элемент.
     */
    protected element?: E;
    /**
     * Element for checking. If the element is missing in the DOM, the event is turned off.
     *
     * Элемент для проверки. Если элемент отсутствует в DOM, событие выключается.
     */
    protected elementControl?: ElementOrWindow;
    protected elementControlEdit?: boolean;
    /**
     * A case-sensitive string representing the event type to listen for.
     *
     * Чувствительная к регистру строка, представляющая тип обрабатываемого события.
     */
    protected type: string[];
    /**
     * The object that receives a notification (an object that implements the Event interface)
     * when an event of the specified type occurs. This must be null, an object with a
     * handleEvent() method, or a JavaScript function.
     *
     * Объект, который принимает уведомление, когда событие указанного типа произошло.
     * Это должен быть объект, реализующий интерфейс EventListener или просто функция JavaScript.
     */
    protected listenerRecent: (event?: O | ResizeObserverEntry) => void;
    /**
     * Event states.
     *
     * Состояния события.
     */
    protected activity: boolean;
    protected activityItems: EventActivityItem<E>[];
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
    constructor(elementSelector?: ElementOrString<E>, type?: string | string[], listener?: EventListenerDetail<O, D> | undefined, options?: EventOptions, detail?: D | undefined);
    /**
     * Checks whether event listening is currently enabled.
     *
     * Проверяет, включено ли сейчас прослушивание события.
     * @returns true if active / true, если активно
     */
    isActive(): boolean;
    /**
     * Returns the target element.
     *
     * Возвращает целевой элемент.
     * @returns target element / целевой элемент
     */
    getElement(): E | undefined;
    /**
     * Change of an element for tracking.
     *
     * Изменение элемента для прослеживания.
     * @param elementSelector target element or selector / целевой элемент или селектор
     * @returns this instance / текущий экземпляр
     */
    setElement(elementSelector?: ElementOrString<E>): this;
    /**
     * Modifies the control element for DOM safety checks.
     *
     * Модифицирует контрольный элемент для проверки безопасности DOM.
     * @param elementSelector control element or selector / контрольный элемент или селектор
     * @returns this instance / текущий экземпляр
     */
    setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this;
    /**
     * Changes the type of the handled event.
     *
     * Изменяет тип обрабатываемого события.
     * @param type event type or array of types / тип события или массив типов
     * @returns this instance / текущий экземпляр
     */
    setType(type: string | string[]): this;
    /**
     * Modifies the listener function.
     *
     * Модифицирует функцию-слушатель.
     * @param listener new listener function / новая функция-слушатель
     * @returns this instance / текущий экземпляр
     */
    setListener(listener: EventListenerDetail<O, D>): this;
    /**
     * Modifying the options object that defines the characteristics of the event listener.
     *
     * Изменение объекта options, который определяет характеристики слушателя событий.
     * @param options event listener options / опции слушателя событий
     * @returns this instance / текущий экземпляр
     */
    setOptions(options?: EventOptions): this;
    /**
     * Modifying the additional data provided to the listener.
     *
     * Изменение дополнительных данных, передаваемых слушателю.
     * @param detail custom data / пользовательские данные
     * @returns this instance / текущий экземпляр
     */
    setDetail(detail?: D): this;
    /**
     * Triggers the events on the target element, optionally with a new detail value.
     * This method manually initiates a `CustomEvent` dispatch for all specified types.
     *
     * Инициирует события на целевом элементе, опционально с новым значением detail.
     * Этот метод вручную запускает диспетчеризацию `CustomEvent` для всех указанных типов.
     * @param detail the value to be passed as the event detail / значение, которое будет передано как detail события
     * @returns this instance / текущий экземпляр
     */
    dispatch(detail?: D | undefined): this;
    /**
     * Starts event listening.
     *
     * Запуск прослушивания события.
     * @returns this instance / текущий экземпляр
     */
    start(): this;
    /**
     * Stops event listening.
     *
     * Остановка прослушивания события.
     * @returns this instance / текущий экземпляр
     */
    stop(): this;
    /**
     * Toggling event handler state.
     *
     * Переключение состояния работы события.
     * @param activity event activation/ активация события
     * @returns this instance / текущий экземпляр
     */
    toggle(activity: boolean): this;
    /**
     * Overloads the listening events (stops and starts again if active).
     *
     * Перегружает события прослушивания (останавливает и запускает заново, если активно).
     * @returns this instance / текущий экземпляр
     */
    reset(): this;
    /**
     * Checks if the ResizeObserver object exists.
     *
     * Проверяет, существует ли объект ResizeObserver.
     */
    protected isObserver(): boolean;
    /**
     * The implementation of the resize event for an element.
     *
     * Реализация события изменения размера для элемента.
     */
    protected makeResize(): boolean;
    /**
     * Implementation of the scroll event for an element.
     *
     * Реализация события изменения положения скролла для элемента.
     */
    protected makeScroll(): boolean;
}
