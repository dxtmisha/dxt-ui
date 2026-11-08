// md5:3e019fe347964c1ed9965f10756a2889 true
import { type ShallowRef } from 'vue';

export type LazyItemByMargin = {
  rootMargin: string;
  item: ReturnType<typeof useLazyRef>;
};

export type UseLazyItemByMarginRef = {
  lazyItemStatus: ShallowRef<boolean>;
  readonly lazyItem: LazyItem | undefined;
  /** Releases registration from tracking. */
  removeLazyItem: () => void;
};

/** Tracks element visibility by root margin with shared observer instances. @keywords lazy observer, intersection, visibility, margin */
export declare const useLazyItemByMarginRef: (element: RefType<HTMLElement | undefined>, rootMargin?: string) => UseLazyItemByMarginRef;