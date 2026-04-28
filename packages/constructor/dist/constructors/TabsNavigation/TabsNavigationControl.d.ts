import { EventItem, ListDataRef } from '@dxtmisha/functional';
import { TabsNavigationSelected } from './TabsNavigationSelected';
import { TabsNavigationFocus } from './TabsNavigationFocus';
/**
 * Class for managing tab navigation control.
 *
 * Класс для управления контролем навигации вкладок.
 */
export declare class TabsNavigationControl {
    protected readonly selected: TabsNavigationSelected;
    protected readonly focus: TabsNavigationFocus;
    protected readonly data: ListDataRef;
    protected event?: EventItem<HTMLElement, any>;
    /**
     * Constructor
     * @param selected selection management object/ объект управления выделением
     * @param focus focus management object/ объект управления фокусом
     * @param data data list object/ объект списка данных
     */
    constructor(selected: TabsNavigationSelected, focus: TabsNavigationFocus, data: ListDataRef);
    /**
     * Returns bindings for the element.
     *
     * Возвращает привязки для элемента.
     */
    get binds(): {
        onFocus: () => void;
        onBlur: () => void;
    };
    /**
     * Returns the first item in the list.
     *
     * Возвращает первый элемент в списке.
     */
    getFirstItem(): string | undefined;
    /**
     * Handler for the focus event.
     *
     * Обработчик события фокуса.
     */
    readonly onFocus: () => void;
    /**
     * Handler for the blur event.
     *
     * Обработчик события потери фокуса.
     */
    readonly onBlur: () => void;
    /**
     * Returns the current focus value or the first item.
     *
     * Возвращает текущее значение фокуса или первый элемент.
     */
    protected getFocus(): string | undefined;
    /**
     * Starts the event.
     *
     * Запускает событие.
     */
    protected start(): void;
    /**
     * Stops the event.
     *
     * Останавливает событие.
     */
    protected stop(): void;
    /**
     * Moves focus to the previous item.
     *
     * Перемещает фокус на предыдущий элемент.
     */
    protected prev(): this;
    /**
     * Moves focus to the next item.
     *
     * Перемещает фокус на следующий элемент.
     */
    protected next(): this;
    /**
     * Method for tracking keys when a window is open.
     *
     * Метод для отслеживания нажатий при открытом окне.
     * @param event event object/ объект события
     */
    protected readonly on: (event: KeyboardEvent) => void;
}
