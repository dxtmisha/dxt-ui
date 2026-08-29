// md5:6f16e7337ca7b2234b09abc1b821c48c true
import { type Ref, type ShallowRef } from 'vue';

export type LazyItem = {
    status: ShallowRef<boolean>;
    ratio: ShallowRef<number>;
    entry: ShallowRef<IntersectionObserverEntry | undefined>;
    stopWatch: () => void;
};

export type LazyList = Record<string, LazyItem>;

/** Initializes viewport intersection tracking for elements using IntersectionObserver. @keywords intersection-observer, lazy, viewport, visibility */
export declare const useLazyRef: (options?: IntersectionObserverInit) => {
    intersectionObserver: IntersectionObserver | undefined;
    /** Retrieves tracking state and intersection data for a target element. @keywords get, lazy-item, status */
    getItem(element?: HTMLElement): LazyItem | undefined;
    /** Adds an element ref to viewport intersection tracking. @keywords track, observe, lazy-load */
    addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean, boolean>;
    /** Removes an element from intersection tracking. @keywords unobserve, untrack, remove */
    removeLazyItem: (element?: HTMLElement) => void;
    /** Disconnects the observer and clears all tracked elements. @keywords disconnect, clear, cleanup */
    disconnectLazy: () => void | undefined;
};