import { EventItem } from './EventItem';
import { ElementOrString, EventListenerDetail } from '../types/basicTypes';
/**
 * Data for the loading event.
 *
 * Данные для события загрузки.
 */
export type LoadingDetail = {
    /** Loading status / Статус загрузки */
    loading: boolean;
};
/**
 * Registration item for the loading event.
 *
 * Элемент регистрации для события загрузки.
 */
export type LoadingRegistrationItem = {
    /** Event item / Элемент события */
    item: EventItem<Window, CustomEvent, LoadingDetail>;
    /** Event listener / Слушатель события */
    listener: EventListenerDetail<CustomEvent, LoadingDetail>;
    /** Element / Элемент */
    element?: ElementOrString<HTMLElement>;
};
/**
 * Class for working with global loading.
 *
 * Класс для работы с глобальной загрузкой.
 */
export declare class LoadingInstance {
    protected eventName: string;
    /** Current loading value / Текущее значение загрузки */
    protected value: number;
    /** Event item / Элемент события */
    protected event?: EventItem<Window, CustomEvent>;
    /** Registration list / Список регистрации */
    protected registrationList: LoadingRegistrationItem[];
    /**
     * Constructor
     * @param eventName name of the event for tracking loading/ название события для отслеживания загрузки
     */
    constructor(eventName?: string);
    /**
     * Check if the loader is active now.
     *
     * Проверить, активен ли сейчас загрузчик.
     * @returns returns true if the loader is active/ возвращает true, если загрузчик активен
     */
    is(): boolean;
    /**
     * Get current loading value.
     *
     * Получить текущее значение загрузки.
     * @returns returns the current loading value/ возвращает текущее значение загрузки
     */
    get(): number;
    /**
     * Shows the loader.
     *
     * Показывает загрузчик.
     * @returns void
     */
    show(): void;
    /**
     * Hides the loader.
     *
     * Скрывает загрузчик.
     * @returns void
     */
    hide(): void;
    /**
     * Event registration to listen for data changes.
     *
     * Регистрация события для прослушивания изменений данных.
     * @param listener the object that receives a notification (an object that implements the
     * Event interface) when an event of the specified type occurs/ объект, который принимает
     * уведомление, когда событие указанного типа произошло
     * @param element element/ элемент
     * @returns void
     */
    registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /**
     * Unregistration of an event.
     *
     * Отмена регистрации события.
     * @param listener the object that receives a notification (an object that implements the
     * Event interface) when an event of the specified type occurs/ объект, который принимает
     * уведомление, когда событие указанного типа произошло
     * @param element element/ элемент
     * @returns void
     */
    unregistrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /**
     * Calls the event listener.
     *
     * Вызывает слушателя событий.
     */
    protected dispatch(): void;
}
