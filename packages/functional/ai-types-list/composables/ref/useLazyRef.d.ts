// md5:a01cd75627bf54364be60aa1236f015e true
import { Ref, ShallowRef } from 'vue';

export type LazyItem = {
    status: ShallowRef<boolean>;
    ratio: ShallowRef<number>;
    entry: ShallowRef<IntersectionObserverEntry | undefined>;
    stopWatch: () => void;
};

export type LazyList = Record<string, LazyItem>;

/**
 * Initializes lazy reference tracking using Intersection Observer.
 * @keywords useLazyRef, lazy, observer, intersection, ref
 */
export declare const useLazyRef: (options?: IntersectionObserverInit) => {
    intersectionObserver: IntersectionObserver | undefined;
    /**
     * Gets lazy item by element.
     * @keywords getItem, lazy, element
     */
    getItem(element?: HTMLElement): LazyItem | undefined;
    /**
     * Adds an element for lazy tracking.
     * @keywords addLazyItem, lazy, track
     */
    addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean, boolean>;
    /**
     * Removes an element from lazy tracking.
     * @keywords removeLazyItem, lazy, remove
     */
    removeLazyItem: (element?: HTMLElement) => void;
    /**
     * Disconnects lazy observer.
     * @keywords disconnectLazy, lazy, observer
     */
    disconnectLazy: () => void | undefined;
};