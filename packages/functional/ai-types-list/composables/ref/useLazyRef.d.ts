// md5:6f16e7337ca7b2234b09abc1b821c48c true
import { type Ref, type ShallowRef } from 'vue';
export type LazyItem = {
    status: ShallowRef<boolean>;
    ratio: ShallowRef<number>;
    entry: ShallowRef<IntersectionObserverEntry | undefined>;
    stopWatch: () => void;
};
export type LazyList = Record<string, LazyItem>;
/** Initializes tracking of element visibility using IntersectionObserver. @keywords intersection observer, lazy loading, visibility tracking, viewport */
export declare const useLazyRef: (options?: IntersectionObserverInit) => {
    intersectionObserver: IntersectionObserver | undefined;
    /** Retrieves tracked state for an element. @keywords get lazy item, tracking state */
    getItem(element?: HTMLElement): LazyItem | undefined;
    /** Registers an element for visibility tracking and returns its visibility status ref. @keywords add lazy item, observe, viewport visibility */
    addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean, boolean>;
    /** Removes a specific element from tracking. @keywords remove lazy item, unobserve */
    removeLazyItem: (element?: HTMLElement) => void;
    /** Disconnects the observer and removes all tracked elements. @keywords disconnect, stop observing, clear lazy items */
    disconnectLazy: () => void | undefined;
};