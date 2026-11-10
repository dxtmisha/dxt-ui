// md5:75c45590fb603e7a7365afd50d7ca953
import { type ShallowRef } from 'vue';
/**
 * Return type for `useFigmaStorage`.
 *
 * Тип возвращаемого значения для `useFigmaStorage`.
 */
export type UseFigmaStorageReturn<T> = {
    /** Storage value / Значение хранилища */
    item: ShallowRef<T | undefined>;
    /**
     * Indicates if a fetch operation is currently in progress /
     * Указывает, выполняется ли в данный момент операция получения
     */
    loading: ShallowRef<boolean>;
};
/**
 * Composable for working with Figma storage.
 *
 * Композиция для работы с хранилищем Figma.
 * @param name Storage name / Название хранилища
 * @param defaultValue Default value / Значение по умолчанию
 * @param id Object ID / ID объекта
 * @returns An object containing the storage value and a loading state /
 * Объект, содержащий значение хранилища и состояние загрузки
 */
export declare function useFigmaStorage<T = unknown>(name: string, defaultValue?: T, id?: string): UseFigmaStorageReturn<T>;
