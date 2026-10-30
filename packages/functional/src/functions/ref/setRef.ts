import { type Ref } from 'vue'

/**
 * Sets a new value for the reactive reference if it differs from the current value.
 *
 * Устанавливает новое значение для реактивной переменной, если оно отличается от текущего значения.
 * @param item reactive element / реактивный элемент
 * @param value value for replacement / значение для замены
 */
export function setRef<T>(item: Ref<T>, value: T): void {
  if (item.value !== value) {
    item.value = value
  }
}
