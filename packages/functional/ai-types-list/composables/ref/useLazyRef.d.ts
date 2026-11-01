// md5:03f530a108139eee352d243859c0611b
import { type Ref, type ShallowRef } from 'vue';
export type LazyItem = {
    status: ShallowRef<boolean>;
    ratio: ShallowRef<number>;
    entry: ShallowRef<IntersectionObserverEntry | undefined>;
    stopWatch: () => void;
};
export type LazyList = Record<string, LazyItem>;
/**
 * Hook for initializing the tracking of an element's appearance on the screen.
 * Registrations of the same element share observation and keep independent state and cleanup.
 *
 * Хук для инициализации отслеживания появления элемента на экране.
 * Регистрации одного элемента разделяют наблюдение, сохраняя независимое состояние и очистку.
 */
export declare const useLazyRef: (options?: IntersectionObserverInit) => {
    intersectionObserver: IntersectionObserver | undefined;
    /**
     * Gets a registration for an element, optionally selected by its status ref.
     *
     * Получает регистрацию элемента, при необходимости выбранную по её ref статуса.
     * @param element tracked element / отслеживаемый элемент
     * @param status status ref returned by addLazyItem / ref статуса, возвращённый addLazyItem
     * @returns matching registration or the first active one / нужная регистрация или первая активная
     */
    getItem(element?: HTMLElement, status?: ShallowRef<boolean>): LazyItem | undefined;
    /**
     * Adding an element for tracking.
     *
     * Добавление элемента для отслеживания.
     * @param element element for tracking/ элемента для отслеживания
     * @returns independent visibility status / независимый статус видимости
     */
    addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean>;
    /**
     * Removes all registrations of an element from tracking.
     *
     * Удаляет все регистрации элемента из отслеживания.
     */
    removeLazyItem: (element?: HTMLElement) => void;
    /**
     * Removing all elements from tracking.
     *
     * Удаление всех элементов из отслеживания.
     */
    disconnectLazy: () => void | undefined;
};
