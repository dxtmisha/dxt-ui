import { ShallowRef } from 'vue';
/**
 * Composable for working with Figma client storage.
 *
 * Композиция для работы с клиентским хранилищем Figma.
 * @param name Storage name / Название хранилища
 * @param defaultValue Default value / Значение по умолчанию
 * @returns An object containing the storage value and a loading state /
 * Объект, содержащий значение хранилища и состояние загрузки
 */
export declare function useFigmaClientStorage<T = any>(name: string, defaultValue?: T): {
    item: ShallowRef<T | undefined, T | undefined>;
    loading: ShallowRef<boolean, boolean>;
};
