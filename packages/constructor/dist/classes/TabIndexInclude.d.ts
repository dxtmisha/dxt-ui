import { Ref } from 'vue';
import { EventItem } from '@dxtmisha/functional';
/**
 * Class for managing focus and tab index of elements
 *
 * Класс для управления фокусом и табиндексом элементов
 */
export declare class TabIndexInclude<E extends HTMLElement = HTMLElement> {
    protected readonly element: Ref<E | undefined> | (() => E | undefined);
    /** Previously focused element/ Ранее сфокусированный элемент */
    protected oldElement?: HTMLElement | Element | null;
    /** Event item for focus events/ Элемент события для событий фокуса */
    protected event?: EventItem<HTMLElement, any>;
    /**
     * Сonstructor
     * @param element - Reference to the element/ Ссылка на элемент
     */
    constructor(element: Ref<E | undefined> | (() => E | undefined));
    /**
     * Set focus to the element.
     *
     * Устанавливает фокус на элемент.
     */
    goTo(): this;
    /**
     * Reset focus to the previously focused element.
     *
     * Сбрасывает фокус на ранее сфокусированный элемент.
     */
    reset(): this;
    /**
     * Toggle focus based on status.
     *
     * Переключает фокус в зависимости от статуса.
     * @param status Focus status/ Статус фокуса
     */
    toggle(status: boolean): this;
    /**
     * Check if the element is defined.
     *
     * Проверяет, определен ли элемент.
     */
    protected isElement(): this is {
        element: Ref<E>;
    };
    /**
     * Check if the event is a Tab key event.
     *
     * Проверяет, является ли событие событием клавиши Tab.
     * @param event Keyboard event/ Событие клавиатуры
     */
    protected isTab(event: KeyboardEvent): boolean;
    /**
     * Check if the Shift key is pressed.
     *
     * Проверяет, нажата ли клавиша Shift.
     * @param event Keyboard event/ Событие клавиатуры
     */
    protected isShift(event: KeyboardEvent): boolean;
    /**
     * Get the element.
     *
     * Получает элемент.
     */
    protected getElement(): E | undefined;
    /**
     * Find the first focusable element.
     *
     * Находит первый фокусируемый элемент.
     */
    findFirstElement(): HTMLElement | undefined;
    /**
     * Find the last focusable element.
     *
     * Находит последний фокусируемый элемент.
     */
    findLastElement(): HTMLElement | undefined;
    /**
     * Set focus with temporary tab index modification.
     *
     * Устанавливает фокус с временным изменением табиндекса.
     */
    protected toFocus(): this;
    /**
     * Save the currently focused element.
     *
     * Сохраняет текущий сфокусированный элемент.
     */
    protected updateOldElement(): void;
    /**
     * Event listener for keyboard events.
     *
     * Слушатель событий для событий клавиатуры.
     * @param event Keyboard event/ Событие клавиатуры
     */
    protected listenEvent: (event: KeyboardEvent) => void;
    /**
     * Start the event listener.
     *
     * Запускает слушатель событий.
     */
    protected startEvent(): void;
    /**
     * Stop the event listener.
     *
     * Останавливает слушатель событий.
     */
    protected stopEvent(): void;
}
