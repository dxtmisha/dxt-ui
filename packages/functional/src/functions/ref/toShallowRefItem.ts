import {
  isRef,
  shallowRef,
  type ShallowRef
} from 'vue'

import { type RefOrNormal } from '../../types/refTypes'

/**
 * Returns the reactive reference or wraps a plain value in a new shallowRef.
 *
 * Возвращает реактивную переменную или оборачивает обычное значение в новый shallowRef.
 * @param item reactive variable or normal value / реактивная переменная или обычное значение
 * @returns reactive shallow reference / поверхностная реактивная переменная
 */
export function toShallowRefItem<T>(item?: RefOrNormal<T>): ShallowRef<T> {
  return (isRef(item) ? item : shallowRef<T>(item as T)) as ShallowRef<T>
}
