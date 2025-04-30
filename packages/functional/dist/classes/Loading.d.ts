import { EventItem } from './EventItem';
import { ElementOrString, EventListenerDetail } from '../types/basicTypes';
type LoadingDetail = {
    loading: boolean;
};
/**
 * Class for working with global loading.
 *
 * Класс для работы с глобальной загрузкой.
 */
export declare class Loading {
    protected static value: number;
    protected static event?: EventItem<Window, CustomEvent>;
    /**
     * Check if the loader is active now.
     *
     * Проверить, активен ли сейчас загрузчик.
     */
    static is(): boolean;
    /**
     * Shows the loader.
     *
     * Показывает загрузчик.
     */
    static show(): void;
    /**
     * Hides the loader.
     *
     * Скрывает загрузчик.
     */
    static hide(): void;
    /**
     * Event registration to listen for data changes.
     *
     * Регистрация события для прослушивания изменений данных.
     * @param listener the object that receives a notification (an object that implements the
     * Event interface) when an event of the specified type occurs/ объект, который принимает
     * уведомление, когда событие указанного типа произошло
     * @param element element/ элемент
     */
    static registrationEvent(listener: EventListenerDetail<CustomEvent, LoadingDetail>, element?: ElementOrString<HTMLElement>): void;
    /**
     * Calls the event listener.
     *
     * Вызывает слушателя событий.
     */
    protected static dispatch(): void;
}
export {};
