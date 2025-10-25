import { Ref } from 'vue';
/**
 * Creates a reactive variable to manage a local storage.
 *
 * Создает реактивный переменный для управления локальным хранилищем.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 * @param cache cache time/ время кэширования
 */
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;
