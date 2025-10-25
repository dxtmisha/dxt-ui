import { Ref, ComputedRef } from 'vue';
/**
 * Class for getting the scroll width as a reactive item.
 *
 * Класс для получения ширины скролла в виде реактивного элемента.
 */
export declare class ScrollbarWidthRef {
    /**
     * Reactive item.
     *
     * Реактивный элемент.
     */
    readonly item: Ref<boolean | undefined, boolean | undefined>;
    /**
     * Constructor
     */
    constructor();
    /**
     * Checks whether the scroll width is defined.
     *
     * Проверяет, определена ли ширина скролла.
     */
    readonly is: ComputedRef<boolean>;
}
