import { WindowClassesList, WindowStatusItem } from './basicTypes';
/**
 * Class for working with class names.
 *
 * Класс для работы с названиями классов.
 */
export declare class WindowClasses {
    protected readonly className: string;
    /**
     * Identification of the current window. Used to search for the current component and its control.
     *
     * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля.
     */
    protected readonly id: string;
    protected readonly controlId: string;
    readonly list: WindowClassesList;
    /**
     * Constructor
     * @param className class name/ название класса
     */
    constructor(className: string);
    /**
     * Checks if the selected element is a window.
     *
     * Проверяет, является ли выбранный элемент окном.
     * @param target selected item/ выбранный элемент
     */
    isWindow(target?: HTMLElement): boolean;
    /**
     * Checks if the selected element is a window teleport.
     *
     * Проверяет, является ли выбранный элемент телепортом окна.
     * @param target selected item/ выбранный элемент
     */
    isWindowTeleport(target?: HTMLElement): boolean;
    /**
     * Checks if the selected element is a window or a window teleport.
     *
     * Проверяет, является ли выбранный элемент окном или телепортом окна.
     * @param target selected item/ выбранный элемент
     */
    isWindowOrTeleport(target?: HTMLElement): boolean;
    /**
     * Returns the identifier of the current window.
     *
     * Возвращает идентификатор текущего окна.
     */
    getId(): string;
    /**
     * Returns the identifier of the control of the current window.
     *
     * Возвращает идентификатор контроля текущего окна.
     */
    getControlId(): string;
    /**
     * Returns the full name of the class for the status.
     *
     * Возвращает полное название класса для статуса.
     * @param status названия статуса
     */
    getClassStatus(status: WindowStatusItem): string;
    /**
     * Returns the class selector for control.
     *
     * Возвращает селектор класса для управления.
     */
    getSelectorControl(): string;
    /**
     * Search and return the window element at the selected item.
     *
     * Поиск и возврат элемента окна у выбранного элемента.
     * @param target selected item/ выбранный элемент
     */
    findMain<T extends HTMLElement>(target: HTMLElement): T | undefined;
    /**
     * Search and return of the control element of the current component.
     *
     * Поиск и возврат элемента управления текущего компонента.
     */
    findControl(): HTMLElement | undefined;
    /**
     * Find the control at the selected window.
     *
     * Найди элемент управления у выбранного окна.
     * @param element window element/ элемент окна
     */
    findControlByElement(element?: HTMLElement): HTMLElement | undefined;
    /**
     * Search and return of the window body element for the current component.
     *
     * Поиск и возврат элемента тела окна для текущего компонента.
     */
    findBody(): HTMLDivElement | undefined;
    /**
     * Search and return of the context body element of the window for the current component.
     *
     * Поиск и возврат элемента контекста тела окна для текущего компонента.
     */
    findBodyContext(): HTMLDivElement | undefined;
    /**
     * Search and return of the window body element for other components (not current)
     * with additional selectors.
     *
     * Поиск и возврат элемента тела окна для других компонентов (не текущего)
     * с дополнительными селекторами.
     * @param selectors additional CSS selectors/ дополнительные CSS селекторы
     * @param status status of the window/ статус окна
     */
    findBodyOther(selectors: string, status?: WindowStatusItem): HTMLDivElement | undefined;
    /**
     * Returns the list of available classes.
     *
     * Возвращает список доступных классов.
     * @param className class name/ название класса
     * @param id identification of the current window/ идентификация текущего окна
     */
    static getClassesList(className: string, id?: string): WindowClassesList;
    /**
     * Returns a list of available classes by design name.
     *
     * Возвращает список доступных классов по названию дизайна.
     * @param design design name/ названия дизайна
     */
    static getClassesListByDesign(design: string): WindowClassesList;
}
