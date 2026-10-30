import {
  isRef,
  type Ref,
  ref
} from 'vue'

import { type RefOrNormal } from '../../types/refTypes'

/**
 * Returns the reactive reference or wraps a plain value in a new ref.
 *
 * Возвращает реактивную переменную или оборачивает обычное значение в новый ref.
 * @param item reactive variable or normal value / реактивная переменная или обычное значение
 * @returns reactive variable / реактивная переменная
 */
export function toRefItem<T>(item?: RefOrNormal<T>): Ref<T> {
  return isRef(item) ? item : (ref<T>(item as T) as Ref<T>)
}
