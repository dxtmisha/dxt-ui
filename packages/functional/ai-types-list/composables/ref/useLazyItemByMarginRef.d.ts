// md5:5e38c8c9bf16b306475af7653ad27d68
import { useLazyRef, type LazyItem } from './useLazyRef';
import type { RefType } from '../../types/refTypes';
export type LazyItemByMargin = {
    rootMargin: string;
    item: ReturnType<typeof useLazyRef>;
};
/**
 * Hook for initializing the tracking of an element's appearance on the screen by margin.
 * Multiple registrations of the same element share the observer and are released independently.
 *
 * Хук для инициализации отслеживания появления элемента на экране по отступу.
 * Несколько регистраций одного элемента используют общий observer и освобождаются независимо.
 * @param element element for tracking / элемент для отслеживания
 * @param rootMargin root margin for IntersectionObserver / отступ для IntersectionObserver
 */
export declare const useLazyItemByMarginRef: (element: RefType<HTMLElement | undefined>, rootMargin?: string) => {
    /** Lazy item status / Статус ленивого элемента */
    lazyItemStatus: import("vue").ShallowRef<boolean>;
    /**
     * Gets the tracking state owned by this registration.
     *
     * Получает состояние отслеживания текущей регистрации.
     * @returns owned active registration / собственная активная регистрация
     */
    readonly lazyItem: LazyItem | undefined;
    /**
     * Releases only this registration from tracking.
     *
     * Освобождает только текущую регистрацию из отслеживания.
     */
    removeLazyItem: () => void;
};
