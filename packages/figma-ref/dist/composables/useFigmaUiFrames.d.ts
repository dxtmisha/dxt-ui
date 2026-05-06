import { UiFigmaFramesList } from '@dxtmisha/figma';
import { ComputedRef } from 'vue';
/**
 * Composable for managing and observing the list of top-level frames.
 *
 * Композабл для управления и наблюдения за списком фреймов верхнего уровня.
 * @returns An object containing the list of top-level frames and a loading state /
 * Объект, содержащий список фреймов верхнего уровня и состояние загрузки
 */
export declare function useFigmaUiFrames(): {
    /** List of top-level frames / Список фреймов верхнего уровня */
    frames: ComputedRef<UiFigmaFramesList>;
    /**
     * Indicates if a fetch operation is currently in progress /
     * Указывает, выполняется ли в данный момент операция получения
     */
    loading: ComputedRef<boolean>;
};
