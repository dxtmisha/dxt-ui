// md5:5f184d986ea3946a8e6caa30d1a6be91
import { type Ref, type ShallowRef } from 'vue';
import { type RefOrNormal } from '@dxtmisha/functional';
/**
 * Return type for `useFigmaStorageMulti`.
 *
 * Тип возвращаемого значения для `useFigmaStorageMulti`.
 */
export type UseFigmaStorageMultiReturn<T> = {
    /** Storage value / Значение хранилища */
    item: ShallowRef<T | undefined>;
    /** Save in document flag / Флаг сохранения в макете */
    isDocument: Ref<boolean>;
    /** Save in local storage flag / Флаг локального сохранения */
    isLocal: Ref<boolean>;
};
/**
 * Composable for working with multiple Figma storage types (document and client).
 *
 * Композиция для работы с несколькими типами хранилищ Figma (макет и клиент).
 * @param name Storage name / Название хранилища
 * @param inDocument Save in document flag or ref / Флаг или ref сохранения в макете
 * @param inLocal Save in local storage flag or ref / Флаг или ref локального сохранения
 * @param defaultValue Default value / Значение по умолчанию
 * @returns An object containing the storage value and storage flags /
 * Объект, содержащий значение хранилища и флаги хранилища
 */
export declare function useFigmaStorageMulti<T = unknown>(name: string, inDocument?: RefOrNormal<boolean>, inLocal?: RefOrNormal<boolean>, defaultValue?: T): UseFigmaStorageMultiReturn<T>;
