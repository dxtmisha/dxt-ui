import { ref, type Ref, watch } from 'vue'
import { isDomRuntime } from '../../functions/isDomRuntime'
import { DataStorage } from '../../classes/DataStorage'

/**
 * Creates a reactive variable to manage a local storage.
 *
 * Создает реактивный переменный для управления локальным хранилищем.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 * @param cache cache time/ время кэширования
 */
export function useStorageRef<T>(
  name: string,
  defaultValue?: T | (() => T),
  cache?: number
): Ref<T | undefined> {
  if (name in items) {
    return items[name] as Ref<T | undefined>
  }

  const storage = new DataStorage<T>(name)
  const item = ref<T | undefined>(storage.get(defaultValue, cache))

  watch(item, value => storage.set(value as T))

  if (isDomRuntime()) {
    window.addEventListener('storage', () => {
      storage.update()
      item.value = storage.get()
    })
  }

  items[name] = item
  return item as Ref<T>
}

const items: Record<string, Ref<any>> = {}
