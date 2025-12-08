import { RefType } from '../../types/refTypes.ts';
export type LazyItemByMargin = {
    rootMargin: string;
    item: any;
};
/**
 * Hook for initializing the tracking of an element's appearance on the screen by margin.
 *
 * Хук для инициализации отслеживания появления элемента на экране по отступу.
 * @param element element for tracking/ элемента для отслеживания
 * @param rootMargin root margin for IntersectionObserver/ отступ для IntersectionObserver
 */
export declare const useLazyItemByMarginRef: (element: RefType<HTMLElement | undefined>, rootMargin: string) => {
    /** Lazy item status/ Статус ленивого элемента */
    lazyItemStatus: any;
    /**
     * Getting a tracked lazy item.
     *
     * Получение отслеживаемого ленивого элемента.
     */
    readonly lazyItem: any;
};
