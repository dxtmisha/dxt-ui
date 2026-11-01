// md5:11e48ffb1a1f5117ae911d662a793c00
import { type Ref } from 'vue';
import { type RefOrNormal } from '../../types/refTypes';
/**
 * Returns the reactive reference or wraps a plain value in a new ref.
 *
 * Возвращает реактивную переменную или оборачивает обычное значение в новый ref.
 * @param item reactive variable or normal value / реактивная переменная или обычное значение
 * @returns reactive variable / реактивная переменная
 */
export declare function toRefItem<T>(item?: RefOrNormal<T>): Ref<T>;
