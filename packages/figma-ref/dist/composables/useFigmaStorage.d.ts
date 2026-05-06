import { ShallowRef } from 'vue';
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
export declare function useFigmaStorage<T = any>(name: string, defaultValue?: T, id?: string): {
    item: ShallowRef<T | undefined, T | undefined>;
    loading: ShallowRef<boolean, boolean>;
};
