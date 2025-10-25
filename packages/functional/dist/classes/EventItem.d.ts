import { ElementOrString, ElementOrWindow, EventActivityItem, EventListenerDetail, EventOptions } from '../types/basicTypes';
/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
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
    constructor(elementSelector?: ElementOrString<E>, type?: string | string[], listener?: EventListenerDetail<O, D> | undefined, options?: EventOptions, detail?: D | undefined);
    /**
     * Checks whether event listening is currently enabled.
     *
     * Проверяет, включено ли сейчас прослушивание события.
     */
    isActive(): boolean;
    getElement(): E | undefined;
    /**
     * Change of an element for tracking.
     *
     * Изменение элемента для прослеживания.
     * @param elementSelector element/ элемент
     */
    setElement(elementSelector?: ElementOrString<E>): this;
    /**
     * Modifies the object that receives the notification.
     *
     * Модифицирует объект, который получает уведомление.
     * @param elementSelector element/ элемент
     */
    setElementControl<EC extends HTMLElement>(elementSelector?: ElementOrString<EC>): this;
    /**
     * Changes the type of the handled event.
     *
     * Изменяет тип обрабатываемого события.
     * @param type type/ тип
     */
    setType(type: string | string[]): this;
    /**
     * Modifies the object that receives the notification.
     *
     * Модифицирует объект, который получает уведомление.
     * @param listener
     */
    setListener(listener: EventListenerDetail<O, D>): this;
    /**
     * Modifying the options object that defines the characteristics of an object.
     *
     * Изменение объекта options, который определяет характеристики объекта.
     * @param options
     */
    setOptions(options?: EventOptions): this;
    /**
     * Modifying a dependent value for the dispatch method.
     *
     * Изменение зависимого значения для метода dispatch.
     * @param detail
     */
    setDetail(detail?: D): this;
    /**
     * The method of the EventTarget sends an Event to the object, (synchronously) invoking
     * the affected EventListeners in the appropriate order.
     *
     * Отправляет событие в общую систему событий. Это событие подчиняется тем же правилам
     * поведения "Захвата" и "Всплывания" как и непосредственно инициированные события.
     * @param detail an event-dependent value associated with the event/ зависимое от события
     * значение, связанное с событием
     */
    dispatch(detail?: D | undefined): this;
    /**
     * Starting event listening.
     *
     * Запуск прослушивания события.
     */
    start(): this;
    /**
     * Stopping event listening.
     *
     * Остановка прослушивания события.
     */
    stop(): this;
    /**
     * Toggling event handler state.
     *
     * Переключение состояния работы события.
     * @param activity event activation/ активация события
     */
    toggle(activity: boolean): this;
    /**
     * Overloads the listening events.
     *
     * Перегружает события прослушивания.
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
