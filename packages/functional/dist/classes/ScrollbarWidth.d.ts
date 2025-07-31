import { Ref, ComputedRef } from 'vue';
/**
 * Class for getting the scroll width.
 *
 * Класс для получения ширины скролла.
 */
export declare class ScrollbarWidth {
    private static storage;
    private static calculate;
    readonly item: Ref<boolean | undefined, boolean | undefined>;
    /**
     * Constructor
     */
    constructor();
    readonly is: ComputedRef<boolean>;
    /**
     * Checks whether to enable scroll hiding.
     *
     * Проверяет, надо ли включить скрытие скролла.
     */
    static is(): Promise<boolean>;
    /**
     * Returns the width of the scroll.
     *
     * Возвращает ширину скролла.
     */
    static get(): Promise<number>;
    /**
     * Creates elements to check the width of the scroll.
     *
     * Создает элементы для проверки ширины скролла.
     */
    private static createElement;
    /**
     * Initialization of data to check the width of the scroll.
     *
     * Инициализация данных для проверки ширины скролла.
     */
    private static init;
}
