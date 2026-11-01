// md5:36ae2db67eee4f933da97e0a4dc6599b
import { type Ref } from 'vue';
/**
 * Creates a reactive variable to manage session storage.
 * Nested object and array changes are persisted on the next Vue update cycle.
 *
 * Создает реактивную переменную для управления сессией хранения.
 * Вложенные изменения объектов и массивов сохраняются в следующем цикле обновления Vue.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 */
export declare function useSessionRef<T>(name: string, defaultValue?: T | (() => T)): Ref<T | undefined>;
