import { Ref, ComputedRef } from 'vue';
import { ListDataItem } from '@dxtmisha/functional';
import { ListProps } from './props';
import { NumberOrStringOrBoolean } from '@dxtmisha/functional-basic';
/**
 * Class for working with element focus.
 *
 * Класс для работы с фокусировкой элемента.
 */
export declare class ListFocus {
    protected readonly props: ListProps;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly listId: number;
    readonly item: Ref<ListDataItem | undefined, ListDataItem | undefined>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element input element/ элемент ввода
     * @param listId unique list identifier/ уникальный идентификатор списка
     */
    constructor(props: ListProps, element: Ref<HTMLElement | undefined>, listId: number);
    /** Returns the value of the selected element/ Возвращает значение выбранного элемента */
    readonly focus: ComputedRef< NumberOrStringOrBoolean | undefined>;
    /**
     * Returns the selected element.
     *
     * Возвращает выбранный элемент.
     * @param index element index/ индекс элемента
     */
    isElement(index?: string): boolean;
    /**
     * Checks if the element is an item.
     *
     * Проверяет, является ли элемент элементом.
     */
    isItem(): boolean;
    /**
     * Checks if the element is a group.
     *
     * Проверяет, является ли элемент группой.
     */
    isGroup(): boolean;
    /**
     * Checks if the element is a menu.
     *
     * Проверяет, является ли элемент меню.
     */
    isMenu(): boolean;
    /**
     * Checks if the group or menu is open.
     *
     * Проверяет, открыта ли группа или меню.
     */
    isOpen(): boolean;
    /**
     * Returns the selected element.
     *
     * Возвращает выбранный элемент.
     */
    get(): ListDataItem | undefined;
    /**
     * Returns the selector for the desired element by its index.
     *
     * Возвращает селектор нужного элемента по его индексу.
     * @param index element index/ индекс элемента
     */
    getSelector(index?: string): string;
    /**
     * Returns the HTML element of the selected item.
     *
     * Возвращает HTML элемент выбранного элемента.
     * @param index element index/ индекс элемента
     */
    getElement(index?: string): HTMLDivElement | undefined;
    /**
     * Changes the selected element.
     *
     * Изменяет выбранный элемент.
     * @param item new value/ новое значение
     */
    set(item: ListDataItem | undefined): this;
    /**
     * Resets the selected element.
     *
     * Сбрасывает выбранный элемент.
     */
    reset(): this;
    /**
     * Performs a click on the selected element.
     *
     * Выполняет клик на выбранном элементе.
     */
    click(): void;
    /**
     * Moves to the value in focus.
     *
     * Перемещает к значению в фокусе.
     */
    toElementFocus(): boolean;
    /**
     * Scrolls to the desired element by its index.
     *
     * Скроллирует к нужному элементу по его индексу.
     * @param index element index/ индекс элемента
     */
    toElementSelected(index: string): this;
    /**
     * Scrolls to the desired element.
     *
     * Скроллирует к нужному элементу.
     * @param element the element to scroll to/ элемент, до которого надо проскроллить
     */
    protected toElement(element?: HTMLElement): void;
}
