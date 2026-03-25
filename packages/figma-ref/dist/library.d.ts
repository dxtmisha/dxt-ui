import { ComputedRef } from 'vue';
import { ShallowRef } from 'vue';
import { UiFigmaFramesList } from '@dxtmisha/figma';

/**
 * Composable for managing and observing the list of top-level frames.
 *
 * Композабл для управления и наблюдения за списком фреймов верхнего уровня.
 * @returns An object containing the list of top-level frames and a loading state /
 * Объект, содержащий список фреймов верхнего уровня и состояние загрузки
 */
export declare function useFigmaUiFrames(): {
    frames: ComputedRef<UiFigmaFramesList>;
    loading: ShallowRef<boolean, boolean>;
};

export { }
