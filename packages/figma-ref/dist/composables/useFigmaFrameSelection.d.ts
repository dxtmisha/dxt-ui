import { UiFigmaFramesList } from '@dxtmisha/figma';
import { ComputedRef } from 'vue';
/**
 * Composable for managing and observing the list of selected frames in Figma.
 *
 * Композабл для управления и наблюдения за списком выбранных фреймов в Figma.
 * @returns An object containing the list of selected frames and a loading state /
 * Объект, содержащий список выбранных фреймов и состояние загрузки
 */
export declare function useFigmaFrameSelection(): {
    /** List of selected frames / Список выбранных фреймов */
    selection: ComputedRef<UiFigmaFramesList>;
    /**
     * Indicates if a fetch operation is currently in progress /
     * Указывает, выполняется ли в данный момент операция получения
     */
    loading: ComputedRef<boolean>;
};
