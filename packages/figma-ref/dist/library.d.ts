import { ComputedRef } from 'vue';
import { ShallowRef } from 'vue';
import { UiFigmaFramesList } from '@dxtmisha/figma';

/**
 * Composable for working with Figma client storage.
 *
 * Композиция для работы с клиентским хранилищем Figma.
 * @param name Storage name / Название хранилища
 * @param defaultValue Default value / Значение по умолчанию
 * @returns An object containing the storage value and a loading state /
 * Объект, содержащий значение хранилища и состояние загрузки
 */
export declare function useFigmaClientStorage<T = any>(name: string, defaultValue: T): {
    item: ShallowRef<T | undefined, T | undefined>;
    loading: ShallowRef<boolean, boolean>;
};

/**
 * Composable for working with Figma storage.
 *
 * Композиция для работы с хранилищем Figma.
 * @param name Storage name / Название хранилища
 * @param defaultValue Default value / Значение по умолчанию
 * @param id object id/ id объекта
 * @returns An object containing the storage value and a loading state /
 * Объект, содержащий значение хранилища и состояние загрузки
 */
export declare function useFigmaStorage<T = any>(name: string, defaultValue: T, id?: string): {
    item: ShallowRef<T | undefined, T | undefined>;
    loading: ShallowRef<boolean, boolean>;
};

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

export { }
