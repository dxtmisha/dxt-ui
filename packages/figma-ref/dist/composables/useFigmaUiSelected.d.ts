import { ComputedRef } from 'vue';
/**
 * Composable for managing and observing the list of selected frames in the Figma UI.
 *
 * Композабл для управления и наблюдения за списком выбранных фреймов в интерфейсе Figma.
 * @returns An object containing the list of selected frame IDs, a loading state, and utility functions /
 * Объект, содержащий список ID выбранных фреймов, состояние загрузки и вспомогательные функции
 */
export declare function useFigmaUiSelected(): {
    /** List of selected frame IDs / Список ID выбранных фреймов */
    selected: ComputedRef<string[]>;
    /**
     * Indicates if a fetch operation is currently in progress /
     * Указывает, выполняется ли в данный момент операция получения
     */
    loading: ComputedRef<boolean>;
    /**
     * Checks if a frame with the given ID is selected /
     * Проверяет, выбран ли фрейм с указанным ID
     * @param id Frame ID / ID фрейма
     * @returns Computed boolean value / Вычисляемое логическое значение
     */
    isSelected(id: string): ComputedRef<boolean | undefined>;
    /**
     * Toggles the selection state of a frame / Переключает состояние выбора фрейма
     * @param id Frame ID / ID фрейма
     * @param selected Selection state / Состояние выбора
     */
    toggleSelected(id: string, selected: boolean): void;
};
