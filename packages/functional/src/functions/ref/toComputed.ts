import { computed, type ComputedRef, type Ref } from 'vue'

/**
 * Packs reactive values into computed to prohibit editing.
 *
 * Упаковывает реактивные значения в computed для запрета редактирования.
 * @param callback callback function/ функция обратного вызова
 */
export function toComputed<T>(callback: () => Ref<T>): ComputedRef<T> {
  let item: Ref<T>

  return computed<T>(() => {
    if (!item) {
      item = callback()
    }

    return item.value
  })
}
