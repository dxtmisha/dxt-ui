// md5:328c159dc27740cbccf4223bc0223c36 true
import { type Ref, type ShallowRef } from 'vue';
/** Lazy tracking item state. @keywords lazy item state */
export type LazyItem = {
  status: ShallowRef<boolean>;
  ratio: ShallowRef<number>;
  entry: ShallowRef<IntersectionObserverEntry | undefined>;
  /** Stops watching the tracked element. @keywords stop watch unobserve */
  stopWatch: () => void;
};
export type LazyList = Record<string, LazyItem>;
/** Lazy tracking controller. @keywords lazy tracking controller observer */
export type UseLazyRef = {
  intersectionObserver: IntersectionObserver | undefined;
  /** Gets an element tracking registration, optionally filtered by status ref. @keywords get lazy item registration */
  getItem(element?: HTMLElement, status?: ShallowRef<boolean>): LazyItem | undefined;
  /** Registers an element for lazy tracking and returns its visibility status. @keywords add track lazy element */
  addLazyItem(element: Ref<HTMLElement | undefined>): ShallowRef<boolean>;
  /** Removes all tracking registrations for an element. @keywords remove untrack lazy element */
  removeLazyItem: (element?: HTMLElement) => void;
  /** Disconnects the observer and clears all tracked elements. @keywords disconnect clear lazy observer */
  disconnectLazy: () => void;
};
/** Initializes element visibility tracking using IntersectionObserver. @keywords use lazy ref intersection observer tracking */
export declare const useLazyRef: (options?: IntersectionObserverInit) => UseLazyRef;