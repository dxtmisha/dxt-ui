// md5:03f530a108139eee352d243859c0611b true
import { type Ref, type ShallowRef } from 'vue';
export type LazyItem = {
    status: ShallowRef<boolean>;
    ratio: ShallowRef<number>;
    entry: ShallowRef<IntersectionObserverEntry | undefined>;
    stopWatch: () => void;
};
export type LazyList = Record<string, LazyItem>;
/** Tracks element visibility on screen using IntersectionObserver with shared observation. @keywords intersection observer, lazy load, viewport, visibility */
export declare const useLazyRef: (options?: IntersectionObserverInit) => {
    intersectionObserver: IntersectionObserver | undefined;
    /** Gets an element tracking registration, optionally filtered by its status ref. @keywords get item, lazy item, lookup, entry */
    getItem(element?: HTMLElement, status?: ShallowRef<boolean>): LazyItem | undefined;
    /** Registers an element for visibility tracking and returns its visibility status. @keywords track element, observe, lazy item */
    addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean>;
    /** Removes all tracking registrations for an element. @keywords remove, unobserve, cleanup */
    removeLazyItem: (element?: HTMLElement) => void;
    /** Disconnects the observer and removes all tracked elements. @keywords disconnect, clear, stop tracking */
    disconnectLazy: () => void | undefined;
};