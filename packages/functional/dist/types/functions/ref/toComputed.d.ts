import { ComputedRef, Ref } from 'vue';
/**
 * Packs reactive values into computed to prohibit editing.
 *
 * Упаковывает реактивные значения в computed для запрета редактирования.
 * @param callback callback function/ функция обратного вызова
 */
export declare function toComputed<T>(callback: () => Ref<T>): ComputedRef<T>;
