import { Ref, ShallowRef, ComputedRef } from 'vue';
import { SnackbarList, SnackbarValue } from './basicTypes';
import { SnackbarProps } from './props';
/**
 * Class for managing data.
 *
 * Класс для управления данными.
 */
export declare class SnackbarData {
    protected readonly props: Readonly<SnackbarProps>;
    protected readonly element: Ref<HTMLDivElement | undefined>;
    protected readonly className: string;
    /** Message list / Список сообщений */
    readonly item: ShallowRef<SnackbarList, SnackbarList>;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param element window element / элемент окна
     * @param className class name / название класса
     */
    constructor(props: Readonly<SnackbarProps>, element: Ref<HTMLDivElement | undefined>, className: string);
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
     * Add message element.
     *
     * Добавить элемент сообщения.
     * @param item add element / элемент добавления
     */
    readonly add: (item: SnackbarValue) => void;
    /**
     * Deleting message element.
     *
     * Удаление элемента сообщения.
     * @param value element identification / идентификация элемента
     */
    readonly remove: (value: string) => void;
    /**
     * Clear all message elements.
     *
     * Очистить все элементы сообщений.
     */
    readonly clear: () => void;
    /**
     * Returns a message element by its value.
     *
     * Возвращает элемент сообщения по его идентификации.
     * @param value element identification / идентификация элемента
     */
    protected getElementItem(value: string): Element | null;
    /**
     * Returns a message element by its value.
     *
     * Возвращает запись сообщения по его идентификации.
     * @param value element identification / идентификация элемента
     */
    protected getItemByValue(value: string): SnackbarValue | undefined;
    /**
     * Returns a message value.
     *
     * Возвращает идентификация сообщения.
     * @param item message element / элемент сообщения
     */
    protected getItemValue(item: SnackbarValue): string;
    /**
     * Returns a message delay.
     *
     * Возвращает задержку сообщения.
     * @param item message element / элемент сообщения
     */
    protected getItemDelay(item: SnackbarValue): number;
    /**
     * Record deletion.
     *
     * Удаление записи.
     * @param value element identification / идентификация элемента
     */
    protected toNone(value: string): void;
    /**
     * Managing the element during display.
     *
     * Управление элементом при выводе.
     * @param value element identification / идентификация элемента
     * @param delay delay for closing the element / задержка для закрытия элемента
     */
    protected toShow(value: string, delay: number): void;
    /**
     * Scroll to the end.
     *
     * Прокрутить до конца.
     */
    protected toScroll(): void;
}
