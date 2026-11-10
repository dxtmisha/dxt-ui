// md5:78a17004857c5a14b480689489e1bd39
import { type ComputedRef } from 'vue';
import { type UiFigmaFramesList } from '@dxtmisha/figma';
/**
 * Return type for `useFigmaFrameSelection`.
 *
 * Тип возвращаемого значения для `useFigmaFrameSelection`.
 */
export type UseFigmaFrameSelectionReturn = {
    /** List of selected frames / Список выбранных фреймов */
    selection: ComputedRef<UiFigmaFramesList>;
    /**
     * Set the current selection in Figma /
     * Установить текущее выделение в Figma
     * @param id Frame ID / ID фрейма
     */
    setSelection(id: string): void;
    /**
     * Indicates if a fetch operation is currently in progress /
     * Указывает, выполняется ли в данный момент операция получения
     */
    loading: ComputedRef<boolean>;
};
/**
 * Composable for managing and observing the list of selected frames in Figma.
 *
 * Композабл для управления и наблюдения за списком выбранных фреймов в Figma.
 * @returns An object containing the list of selected frames and a loading state /
 * Объект, содержащий список выбранных фреймов и состояние загрузки
 */
export declare function useFigmaFrameSelection(): UseFigmaFrameSelectionReturn;
