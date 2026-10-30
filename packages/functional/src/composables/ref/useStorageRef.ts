import { ref, type Ref, watch } from 'vue'
import { DataStorage, isDomRuntime, ServerStorage } from '@dxtmisha/functional-basic'
import { EffectScopeGlobal } from '../../classes/ref/EffectScopeGlobal'

/**
 * Returns a list of active StorageRef instances for the current request context.
 *
 * Возвращает список активных экземпляров StorageRef для контекста текущего запроса.
 */
const getItems = () => {
  return ServerStorage.get<Record<string, Ref<any>>>(
    '__ui:storage-ref__',
    () => ({})
  )
}

/**
 * Creates a reactive variable to manage a local storage.
 * Nested object and array changes are persisted on the next Vue update cycle.
 *
 * Создает реактивный переменный для управления локальным хранилищем.
 * Вложенные изменения объектов и массивов сохраняются в следующем цикле обновления Vue.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 * @param cache cache time/ время кэширования
 */
export function useStorageRef<T>(
  name: string,
  defaultValue?: T | (() => T),
  cache?: number
): Ref<T | undefined> {
  const items = getItems()

  if (name in items) {
    return items[name] as Ref<T | undefined>
  }

  const storage = new DataStorage<T>(name)
  const item = ref<T | undefined>(storage.get(defaultValue, cache))

  EffectScopeGlobal.run(() => {
    watch(item, value => storage.set(value as T), { deep: true })
  })

  if (isDomRuntime()) {
    window.addEventListener('storage', (event: StorageEvent) => {
      if (
        event.key === null
        || event.key === undefined
        || event.key === storage.getIndex?.()
      ) {
        storage.update()
        item.value = storage.get()
      }
    })
  }

  items[name] = item
  return item as Ref<T>
}
