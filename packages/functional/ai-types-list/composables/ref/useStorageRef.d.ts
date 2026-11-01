// md5:662edefe6f5964f3aa042333fc211bdb
import { type Ref } from 'vue';
/**
 * Creates a reactive variable to manage a local storage.
 * Nested object and array changes are persisted on the next Vue update cycle.
 *
 * Создает реактивный переменный для управления локальным хранилищем.
 * Вложенные изменения объектов и массивов сохраняются в следующем цикле обновления Vue.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 * @param cache cache time/ время кэширования
 */
export declare function useStorageRef<T>(name: string, defaultValue?: T | (() => T), cache?: number): Ref<T | undefined>;
