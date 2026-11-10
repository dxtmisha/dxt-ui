// md5:4252578e4fad8bce737c0aa62bcdb0ed
import { type ShallowRef } from 'vue';
/**
 * Return type for `useFigmaClientStorage`.
 *
 * Тип возвращаемого значения для `useFigmaClientStorage`.
 */
export type UseFigmaClientStorageReturn<T> = {
    /** Storage value / Значение хранилища */
    item: ShallowRef<T | undefined>;
    /**
     * Indicates if a fetch operation is currently in progress /
     * Указывает, выполняется ли в данный момент операция получения
     */
    loading: ShallowRef<boolean>;
};
/**
 * Composable for working with Figma client storage.
 *
 * Композиция для работы с клиентским хранилищем Figma.
 * @param name Storage name / Название хранилища
 * @param defaultValue Default value / Значение по умолчанию
 * @returns An object containing the storage value and a loading state /
 * Объект, содержащий значение хранилища и состояние загрузки
 */
export declare function useFigmaClientStorage<T = unknown>(name: string, defaultValue?: T): UseFigmaClientStorageReturn<T>;
