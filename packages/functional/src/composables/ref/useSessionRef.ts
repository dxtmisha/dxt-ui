import { ref, type Ref, watch } from 'vue'
import { DataStorage, ServerStorage } from '@dxtmisha/functional-basic'
import { EffectScopeGlobal } from '../../classes/ref/EffectScopeGlobal'

/**
 * Returns a list of active SessionRef instances for the current request context.
 *
 * Возвращает список активных экземпляров SessionRef для контекста текущего запроса.
 */
const getItems = () => {
  return ServerStorage.get<Record<string, Ref<any>>>(
    '__ui:session-ref__',
    () => ({})
  )
}

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
  const items = getItems()

  if (name in items) {
    return items[name] as Ref<T | undefined>
  }

  const storage = new DataStorage<T>(name, true)
  const item = ref<T | undefined>(storage.get(defaultValue))

  EffectScopeGlobal.run(() => {
    watch(item, value => storage.set(value as T))
  })

  items[name] = item
  return item as Ref<T>
}
