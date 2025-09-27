import { Ref } from 'vue';
/**
 * Creates a reactive variable to manage the hash.
 *
 * Создает реактивную переменную для управления хэшем.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 */
export declare function useHashRef<T>(name: string, defaultValue?: T | (() => T)): Ref<any, any> | undefined;
