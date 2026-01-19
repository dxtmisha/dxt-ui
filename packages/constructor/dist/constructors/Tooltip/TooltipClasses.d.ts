/**
 * Class for working with class names.
 *
 * Класс для работы с названиями классов.
 */
export declare class TooltipClasses {
    protected readonly className: string;
    /**
     * Identification of the current window. Used to search for the current component and its control/
     * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля
     */
    protected readonly id: string;
    protected readonly idItem: string;
    /**
     * Constructor
     * @param className class name/ название класса
     */
    constructor(className: string);
    /**
     * Returns the identifier of the current window.
     *
     * Возвращает идентификатор текущего окна.
     */
    getId(): string;
    /**
     * Returns the identifier of the current item.
     *
     * Возвращает идентификатор текущего элемента.
     */
    getIdItem(): string;
    /**
     * Returns a class for control.
     *
     * Возвращает класс для контроля.
     */
    getClassControl(): string;
    /**
     * Returns a class for control.
     *
     * Возвращает класс для контроля.
     */
    getControl(): string;
    /**
     * Returns the class selector for control.
     *
     * Возвращает селектор класса для управления.
     */
    getSelectorControl(): string;
    /**
     * Finds the control element.
     *
     * Находит элемент управления.
     */
    findControl(): HTMLElement | undefined;
    /**
     * Finds the control element among its descendants.
     *
     * Находит элемент управления среди его потомков.
     * @param target selected element/ выбранный элемент
     */
    findControlByTarget(target: HTMLElement): HTMLElement | undefined;
}
