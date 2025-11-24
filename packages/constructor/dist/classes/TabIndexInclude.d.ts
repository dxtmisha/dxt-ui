import { Ref } from 'vue';
/**
 * Class for managing focus and tab index of elements
 *
 * Класс для управления фокусом и табиндексом элементов
 */
export declare class TabIndexInclude<E extends HTMLElement> {
    protected readonly element: Ref<E | undefined> | (() => E | undefined);
    /** Previously focused element/ Ранее сфокусированный элемент */
    protected oldElement?: HTMLElement | Element | null;
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
     * Get the element.
     *
     * Получает элемент.
     */
    protected getElement(): E | undefined;
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
}
