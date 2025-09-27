import { Ref, ShallowRef } from 'vue';
export type LazyItem = {
    status: ShallowRef<boolean>;
    stopWatch: () => void;
};
export type LazyList = Record<string, LazyItem>;
/**
 * Hook for initializing the tracking of an element's appearance on the screen.
 *
 * Хук для инициализации отслеживания появления элемента на экране.
 */
export declare const useLazyRef: () => {
    intersectionObserver: IntersectionObserver | undefined;
    /**
     * Adding an element for tracking.
     *
     * Добавление элемента для отслеживания.
     * @param element element for tracking/ элемента для отслеживания
     */
    addLazyItem(element: Ref<HTMLElement>): ShallowRef<boolean, boolean>;
    /**
     * Removing an element from tracking.
     *
     * Удаление элемента из отслеживания.
     */
    removeLazyItem: (element?: HTMLElement) => void;
    /**
     * Removing all elements from tracking.
     *
     * Удаление всех элементов из отслеживания.
     */
    disconnectLazy: () => void | undefined;
};
