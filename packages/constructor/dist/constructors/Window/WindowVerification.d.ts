import { WindowPersistent } from './WindowPersistent';
import { WindowClasses } from './WindowClasses';
import { WindowElement } from './WindowElement';
import { WindowStatic } from './WindowStatic';
import { WindowOpen } from './WindowOpen';
import { WindowProps } from './props';
/**
 * Class for managing the opening and closing of the window.
 *
 * Класс для управления открытием и закрытием окна.
 */
export declare class WindowVerification {
    protected readonly props: WindowProps;
    protected readonly persistent: WindowPersistent;
    protected readonly classes: WindowClasses;
    protected readonly element: WindowElement;
    protected readonly staticMode: WindowStatic;
    protected readonly open: WindowOpen;
    protected target?: HTMLElement;
    protected focus?: HTMLElement;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param persistent object for working with the animation before turning off the window/ объект для работы с анимацией перед выключением окна
     * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
     * @param element an object of the class for working with elements/ объект класса для работы с элементами
     * @param staticMode class object for working with static status/ объект класса для работы со статическим статусом
     * @param open the class object for working with the status of closing or opening the window/ объект класса для работы со статусом закрытия или открытия окна
     */
    constructor(props: WindowProps, persistent: WindowPersistent, classes: WindowClasses, element: WindowElement, staticMode: WindowStatic, open: WindowOpen);
    /**
     * Updates the window opening status.
     *
     * Обновления статус открытия окно.
     * @param target the selected window/ выбранное окно
     */
    update(target: HTMLElement): Promise<void>;
    /**
     * Returns the element in focus.
     *
     * Возвращает элемент в фокусе.
     */
    getFocus(): HTMLElement | undefined;
    protected getTarget<R extends HTMLElement>(): R;
    /**
     * Checks if the selected element is in focus.
     *
     * Проверяет, находится ли выбранный элемент в фокусе.
     */
    protected isFocus(): boolean;
    /**
     * Checks if the target element is the window itself.
     *
     * Проверяет, является ли элемент-цель самим окном.
     */
    protected isTarget(): boolean;
    protected isTargetInBody(): boolean;
    /**
     * Checks if the selected window is under other windows.
     *
     * Проверяет, находится ли выбранное окно под другими окнами.
     * @param target the selected window/ выбранное окно
     */
    protected isChildren(target?: HTMLElement): boolean;
    /**
     * Checks if the window is enabled or if the conditions for opening the window are met.
     *
     * Проверяет, включено ли окно или подходят ли условия для открытия окна.
     */
    protected isEnabled(): boolean;
    /**
     * Checks if the window needs to be closed automatically.
     *
     * Проверяет, нужно ли автоматически закрывать окно.
     */
    protected isAutoClose(): boolean;
    /**
     * Checks if the change of the opening status of the window is blocked.
     *
     * Проверяет, заблокировано ли изменение статуса открытия окна.
     */
    protected isNotBlock(): boolean;
    /**
     * Checks if the change of the opening status of the window is blocked.
     *
     * Проверяет, заблокировано ли изменение статуса открытия окна.
     * @param item element for testing/ элемент для проверки
     */
    protected isNotBlockItem(item?: HTMLElement): boolean;
    /**
     * Checks if there is an element with a close lock.
     *
     * Проверяет, есть ли элемент с блокировкой закрытия.
     */
    protected isNotBlockChildren(): boolean;
    /**
     * Checks if there is a blocking element from other windows.
     *
     * Проверяет, есть ли блокирующий элемент от других окон.
     */
    protected isBlockOther(): boolean;
    /**
     * Checks if it needs to be opened when the right button is pressed.
     *
     * Проверяет, нужно ли открывать при нажатии правой кнопки.
     */
    protected isContextmenu(): boolean;
    /**
     * Checks if the window can be closed.
     *
     * Проверяет, можно ли закрыть окно.
     */
    protected isClose(): boolean;
    /**
     * Checks if the element is a menu.
     *
     * Проверяет, является ли элемент меню.
     */
    protected isMenu(element?: HTMLElement | undefined): boolean;
    /**
     * Checks if the element should only open.
     *
     * Проверяет, должен ли элемент только открываться.
     */
    protected isOpenOnly(): boolean;
}
