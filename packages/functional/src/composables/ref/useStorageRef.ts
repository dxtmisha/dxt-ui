import { onScopeDispose, ref, type Ref, watch } from 'vue'
import { DataStorage, isDomRuntime, isNull, ServerStorage } from '@dxtmisha/functional-basic'
import { EffectScopeGlobal } from '../../classes/ref/EffectScopeGlobal'

/**
 * Returns a list of active StorageRef instances for the current request context.
 *
 * Возвращает список активных экземпляров StorageRef для контекста текущего запроса.
 * @returns dictionary of StorageRef instances / словарь экземпляров StorageRef
 */
const getItems = (): Record<string, Ref> => {
  return ServerStorage.get<Record<string, Ref>>(
    '__ui:storage-ref__',
    () => ({})
  )
}

/**
 * Creates a reactive variable to manage local storage.
 * Nested object and array changes are persisted on the next Vue update cycle.
 *
 * Создает реактивную переменную для управления локальным хранилищем.
 * Вложенные изменения объектов и массивов сохраняются в следующем цикле обновления Vue.
 * @param name value name / название значения
 * @param defaultValue default value / значение по умолчанию
 * @param cache cache time / время кэширования
 * @returns reactive local storage reference / реактивная ссылка на значение локального хранилища
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
  const item = ref<T | undefined>(storage.get(defaultValue, cache) as T | undefined)

  EffectScopeGlobal.run(() => {
    watch(item, value => storage.set(value as T), { deep: true })

    if (isDomRuntime()) {
      /**
       * Synchronizes the reactive item when a storage event occurs in another tab.
       *
       * Синхронизирует реактивное значение при событии хранилища в другой вкладке.
       * @param event browser storage event / событие хранилища браузера
       */
      const listener = (event: StorageEvent): void => {
        if (
          isNull(event.key)
          || event.key === storage.getIndex()
        ) {
          storage.update()
          item.value = storage.get()
        }
      }

      window.addEventListener('storage', listener)
      onScopeDispose(() => window.removeEventListener('storage', listener))
    }
  })

  items[name] = item
  return item as Ref<T | undefined>
}
