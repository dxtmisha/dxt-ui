import { Ref, ComputedRef } from 'vue';
/**
 * Class for working with horizontal scrolling.
 *
 * Класс для работы с горизонтальной прокруткой.
 */
export declare class ScrollToXInclude {
    protected readonly element: Ref<HTMLElement | undefined>;
    /**
     * Constructor
     * @param element element/ элемент
     */
    constructor(element: Ref<HTMLElement | undefined>);
    /**
     * Returns bindings for the element.
     *
     * Возвращает привязки для элемента.
     */
    readonly binds: ComputedRef<{
        onWheelPassive: (event: WheelEvent) => void;
    }>;
    /**
     * Handler for the wheel event.
     *
     * Обработчик события колеса мыши.
     * @param event wheel event/ событие колеса мыши
     */
    readonly onScrollToX: (event: WheelEvent) => void;
    /**
     * Checks if scroll snap is not enabled.
     *
     * Проверяет, не включена ли привязка прокрутки.
     */
    protected isNotScrollSnap(): boolean;
}
