import { WindowOpen } from './WindowOpen';
import { WindowClasses } from './WindowClasses.ts';
/**
 * A class for managing the hiding of elements outside the window when it is open.
 *
 * Класс для управления скрытием элементов вне окна при его открытии.
 */
export declare class WindowHidden {
    protected classes: WindowClasses;
    protected open: WindowOpen;
    protected elements: HTMLElement[];
    /**
     * Constructor
     * @param classes an object for working with class names / объект для работы с названиями классов
     * @param open an object for working with the open state of the window / объект для работы с состоянием открытия окна
     */
    constructor(classes: WindowClasses, open: WindowOpen);
    /**
     * Returns the aria attribute data for hiding elements.
     *
     * Возвращает данные aria-атрибута для скрытия элементов.
     */
    protected getAriaData(): {
        key: any;
        value: any;
    };
    /**
     * Finds all elements outside the window that need to be hidden.
     *
     * Находит все элементы вне окна, которые нужно скрыть.
     */
    protected findElements(): NodeListOf<HTMLElement> | undefined;
    /**
     * Hides elements outside the window by adding aria-hidden attribute.
     *
     * Скрывает элементы вне окна, добавляя атрибут aria-hidden.
     */
    protected toHidden(): void;
    /**
     * Shows previously hidden elements by removing aria-hidden attribute.
     *
     * Показывает ранее скрытые элементы, удаляя атрибут aria-hidden.
     */
    protected toShow(): void;
}
