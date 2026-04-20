import { Ref, ShallowRef, ComputedRef } from 'vue';
import { SnackbarEvent } from './SnackbarEvent';
import { SnackbarList, SnackbarValue } from './basicTypes';
import { SnackbarProps } from './props';
/**
 * SnackbarData
 */
export declare class SnackbarData {
    protected readonly props: Readonly<SnackbarProps>;
    protected readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly className: string;
    protected readonly event?: SnackbarEvent | undefined;
    /** Message list/ Список сообщений */
    readonly item: ShallowRef<SnackbarList, SnackbarList>;
    /** Item number/ Номер элемента */
    protected itemNumber: number;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element window element/ элемент окна
     * @param className class name/ название класса
     * @param event event manager for snackbar/ менеджер событий для снекбара
     */
    constructor(props: Readonly<SnackbarProps>, element: Ref<HTMLDivElement | undefined>, className: string, event?: SnackbarEvent | undefined);
    /**
     * Checks if there is an active element.
     *
     * Проверяет, есть ли активный элемент.
     */
    readonly isItem: ComputedRef<boolean>;
    /**
     * Checks if the element is prioritized.
     *
     * Проверяет, есть ли элемент в приоритете.
     */
    readonly isPriority: ComputedRef<boolean>;
    /**
     * Returns a message element by its value.
     *
     * Возвращает запись сообщения по его идентификатору.
     * @param value element identification/ идентификация элемента
     */
    getItemByValue(value: string): SnackbarValue | undefined;
    /**
     * Add message element.
     *
     * Добавить элемент сообщения.
     * @param item add element/ элемент добавления
     */
    readonly add: (item: SnackbarValue) => void;
    /**
     * Deleting message element.
     *
     * Удаление элемента сообщения.
     * @param value element identification/ идентификация элемента
     */
    readonly remove: (value: string) => void;
    /**
     * Clear all message elements.
     *
     * Очистить все элементы сообщений.
     */
    readonly clear: () => void;
    /**
     * Pauses the auto-close timer for all displayed notifications.
     *
     * Приостанавливает таймер автоматического закрытия для всех отображаемых уведомлений.
     */
    readonly pause: () => void;
    /**
     * Resumes the auto-close timer for all displayed notifications.
     *
     * Возобновляет таймер автоматического закрытия для всех отображаемых уведомлений.
     */
    readonly resume: () => void;
    /**
     * Returns a message element by its value.
     *
     * Возвращает элемент сообщения по его идентификатору.
     * @param value element identification/ идентификация элемента
     */
    protected getElementItem(value: string): HTMLDivElement | undefined;
    /**
     * Returns a message value.
     *
     * Возвращает идентификатор сообщения.
     * @param item message element/ элемент сообщения
     */
    protected getItemValue(item: SnackbarValue): string;
    /**
     * Returns a message delay.
     *
     * Возвращает задержку сообщения.
     * @param item message element/ элемент сообщения
     */
    protected getItemDelay(item: SnackbarValue): number;
    /**
     * Adds an item to the list of displayed elements with a timer.
     *
     * Добавляет элемент в список отображаемых элементов с таймером.
     * @param value element identification/ идентификация элемента
     * @param delay delay for closing the element/ задержка для закрытия элемента
     */
    protected addShowItem(value: string, delay: number): this;
    /**
     * Record deletion.
     *
     * Удаление записи.
     * @param value element identification/ идентификация элемента
     */
    protected performHide(value: string): void;
    /**
     * Managing the element during display.
     *
     * Управление элементом при выводе.
     * @param value element identification/ идентификация элемента
     * @param delay delay for closing the element/ задержка для закрытия элемента
     */
    protected initDisplay(value: string, delay: number): void;
    /**
     * Scroll to the end.
     *
     * Прокрутить до конца.
     */
    protected toScroll(): void;
}
