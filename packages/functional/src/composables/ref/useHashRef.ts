import {
  type Ref,
  type ShallowRef,
  shallowRef,
  watch
} from 'vue'
import { Hash, ServerStorage } from '@dxtmisha/functional-basic'
import { EffectScopeGlobal } from '../../classes/ref/EffectScopeGlobal'

/**
 * Returns a list of active HashRef instances for the current request context.
 *
 * Возвращает список активных экземпляров HashRef для контекста текущего запроса.
 */
const getItems = () => {
  return ServerStorage.get<Record<string, Ref>>(
    '__ui:hash-ref__',
    () => ({})
  )
}

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
  const items = getItems()

  if (name in items) {
    return items[name] as ShallowRef<T>
  }

  const item = shallowRef<T>(Hash.get(name, defaultValue))

  EffectScopeGlobal.run(() => {
    watch(item, (value: T) => Hash.set(name, value))
  })

  Hash.addWatch(name, (value: T) => {
    item.value = value
  })

  items[name] = item
  return item
}
