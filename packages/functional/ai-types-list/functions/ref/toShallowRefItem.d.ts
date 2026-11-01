// md5:8184a2e455e2c15ecace18d9f4ae7805
import { type ShallowRef } from 'vue';
import { type RefOrNormal } from '../../types/refTypes';
/**
 * Returns the reactive reference or wraps a plain value in a new shallowRef.
 *
 * Возвращает реактивную переменную или оборачивает обычное значение в новый shallowRef.
 * @param item reactive variable or normal value / реактивная переменная или обычное значение
 * @returns reactive shallow reference / поверхностная реактивная переменная
 */
export declare function toShallowRefItem<T>(item?: RefOrNormal<T>): ShallowRef<T>;
