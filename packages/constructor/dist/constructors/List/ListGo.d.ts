import { ConstrEmit, ListDataRef } from '@dxtmisha/functional';
import { ListFocus } from './ListFocus';
import { ListProps } from './props';
import { ListEmits } from './types';
/**
 * Class for working with element focus.
 *
 * Класс для работы с фокусировкой элемента.
 */
export declare class ListGo {
    protected readonly props: ListProps;
    protected readonly focus: ListFocus;
    protected readonly data: ListDataRef;
    protected readonly emits?: ConstrEmit<ListEmits> | undefined;
    protected index: number;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param focus object of the class for working with focus/ объект класса для работы с фокусировкой
     * @param data object of the class for working with the list/ объект класса для работы со списком
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: ListProps, focus: ListFocus, data: ListDataRef, emits?: ConstrEmit<ListEmits> | undefined);
    /**
     * Changing the index in focus by the number in the array.
     *
     * Изменение значения в фокусе по номеру в массиве.
     * @param index number in the array/ номер в массиве
     */
    set(index: number): boolean;
    /**
     * Changes the selected element.
     *
     * Изменяет выбранный элемент.
     * @param value new value/ новое значение
     */
    preparation(value: any): void;
    /**
     * Scrolls the element to the selected element
     *
     * Прокрутить элемент до выбранного элемента
     */
    preparationBySelected(): void;
    /**
     * Moves the selected value back.
     *
     * Перемещает выбранное значение назад.
     */
    previous(): void;
    /**
     * Moves the selected value forward.
     *
     * Перемещает выбранное значение вперед.
     */
    next(): void;
    /**
     * Reset all records to the initial state.
     *
     * Сброс всех записей до начального состояния.
     */
    reset(): void;
    /**
     * Opens the window if the element is in it.
     *
     * Открывает окно, если элемент в нем.
     */
    open(): void;
    /**
     * Closes the window if the element is in it.
     *
     * Закрывает окно, если элемент в нем.
     */
    close(): void;
    /**
     * Stops the event.
     *
     * Останавливает событие.
     */
    stop(): void;
    /**
     * Checks if the next element is in the same window.
     *
     * Проверяет, находится ли следующий элемент в том же окне.
     */
    protected isFirstByParent(): boolean;
    /**
     * Checks if the next element is in the same window.
     *
     * Проверяет, находится ли следующий элемент в том же окне.
     */
    protected isLastByParent(): boolean;
    /**
     * Checks if the element is in a window.
     *
     * Проверяет, находится ли элемент в окне.
     */
    protected getMainItem(): HTMLDivElement | undefined;
    /**
     * Changing the index in focus by the number in the array.
     *
     * Изменение значения в фокусе по номеру в массиве.
     * @param index number in the array/ номер в массиве
     */
    protected setByIndex(index: number): void;
    /**
     * Moves the selected value forward by type.
     *
     * Перемещает выбранное значение вперед по типу.
     */
    protected nextByType(): void;
}
