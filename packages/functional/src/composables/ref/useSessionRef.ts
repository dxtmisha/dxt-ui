import { ref, type Ref, watch } from 'vue'
import { DataStorage } from '../../classes/DataStorage'

/**
 * Creates a reactive variable to manage session storage.
 *
 * Создает реактивную переменную для управления сессией хранения.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 */
export function useSessionRef<T>(
  name: string,
  defaultValue?: T | (() => T)
): Ref<T | undefined> {
  if (name in items) {
    return items[name] as Ref<T | undefined>
  }

  const storage = new DataStorage<T>(name, true)
  const item = ref<T | undefined>(storage.get(defaultValue))

  watch(item, value => storage.set(value as T))

  items[name] = item
  return item as Ref<T>
}

const items: Record<string, Ref<any>> = {}
