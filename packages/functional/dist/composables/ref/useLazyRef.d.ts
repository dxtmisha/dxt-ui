import { Ref, ShallowRef } from 'vue';
export type LazyItem = {
    status: ShallowRef<boolean>;
    ratio: ShallowRef<number>;
    entry: ShallowRef<IntersectionObserverEntry | undefined>;
    stopWatch: () => void;
};
export type LazyList = Record<string, LazyItem>;
/**
 * Hook for initializing the tracking of an element's appearance on the screen.
 *
 * Хук для инициализации отслеживания появления элемента на экране.
 */
export declare const useLazyRef: (options?: IntersectionObserverInit) => {
    intersectionObserver: IntersectionObserver | undefined;
    /**
     * Getting a tracked element.
     *
     * Получение отслеживаемого элемента.
     * @param element tracked element/ отслеживаемый элемент
     */
    getItem(element: HTMLElement): LazyItem | undefined;
    /**
     * Adding an element for tracking.
     *
     * Добавление элемента для отслеживания.
     * @param element element for tracking/ элемента для отслеживания
     */
    addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean, boolean>;
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
