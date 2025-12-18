import { Ref } from 'vue';
import { WindowClasses } from './WindowClasses';
/**
 * A class for working with elements.
 *
 * Класс для работы с элементами.
 */
export declare class WindowElement {
    protected readonly classes: WindowClasses;
    readonly element: Ref<HTMLDivElement | undefined>;
    /**
     * Constructor
     * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
     * @param element the element of the window itself/ элемент самого окна
     */
    constructor(classes: WindowClasses, element: Ref<HTMLDivElement | undefined>);
    /**
     * Checks if the main element exists.
     *
     * Проверяет, есть ли главный элемент.
     */
    isMain(): boolean;
    /**
     * Returns the main element.
     *
     * Возвращает главного элемента.
     */
    getMain(): HTMLDivElement | undefined;
    /**
     * Returns the control element of the current component.
     *
     * Возвращает элемент управления текущего компонента.
     */
    getControl(): HTMLElement | undefined;
    /**
     * Returns the dimensions of the control element.
     *
     * Возвращает размеры элемента управления.
     */
    getControlRect(): DOMRect | undefined;
    /**
     * Returns the body element of the window.
     *
     * Возвращает элемент тела окна.
     */
    getBody(): HTMLDivElement | undefined;
    /**
     * Returns the dimensions of the window's body element.
     *
     * Возвращает размеры элемента тела окна.
     */
    getBodyRect(): DOMRect | undefined;
    /**
     * Returns the window context element.
     *
     * Возвращает элемент контекста окна.
     */
    getBodyContext(): HTMLDivElement | undefined;
}
