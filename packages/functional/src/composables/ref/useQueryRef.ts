import {
  type Ref,
  type ShallowRef,
  shallowRef,
  watch
} from 'vue'
import { Query, isDomRuntime, ServerStorage } from '@dxtmisha/functional-basic'
import { EffectScopeGlobal } from '../../classes/ref/EffectScopeGlobal'

/**
 * Returns a list of active QueryRef instances for the current request context.
 *
 * Возвращает список активных экземпляров QueryRef для контекста текущего запроса.
 */
const getItems = () => {
  return ServerStorage.get<Record<string, Ref>>(
    '__ui:query-ref__',
    () => ({})
  )
}

/**
 * Creates a reactive variable to manage URL query parameters.
 *
 * Создает реактивную переменную для управления query-параметрами URL.
 * @param name value name / название значения
 * @param defaultValue default value / значение по умолчанию
 */
export function useQueryRef<T>(
  name: string,
  defaultValue?: T | (() => T)
): ShallowRef<T> {
  const items = getItems()

  if (name in items) {
    return items[name] as ShallowRef<T>
  }

  const item = shallowRef<T>(Query.get(name, defaultValue))

  if (isDomRuntime()) {
    EffectScopeGlobal.run(() => {
      watch(item, (value: T) => Query.set(name, value))
    })

    Query.addWatch(name, (value: T) => {
      item.value = value
    })
  }

  items[name] = item
  return item
}
