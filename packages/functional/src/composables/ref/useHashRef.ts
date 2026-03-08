import {
  type Ref,
  type ShallowRef,
  shallowRef,
  watch
} from 'vue'
import { Hash } from '@dxtmisha/functional-basic'

/**
 * Creates a reactive variable to manage the hash.
 *
 * Создает реактивную переменную для управления хэшем.
 * @param name value name / название значения
 * @param defaultValue default value / значение по умолчанию
 */
export function useHashRef<T>(
  name: string,
  defaultValue?: T | (() => T)
): ShallowRef<T> {
  if (name in items) {
    return items[name] as ShallowRef<T>
  }

  const item = shallowRef<T>(Hash.get(name, defaultValue))

  watch(item, (value: T) => Hash.set(name, value))
  Hash.addWatch(name, (value: T) => {
    item.value = value
  })

  items[name] = item
  return item
}

const items: Record<string, Ref<any>> = {}
