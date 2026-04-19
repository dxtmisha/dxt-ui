import { ref, type Ref, watch } from 'vue'
import { BroadcastMessage, executeFunction, ServerStorage } from '@dxtmisha/functional-basic'
import { EffectScopeGlobal } from '../../classes/ref/EffectScopeGlobal'

type BroadcastValueItem<T> = T | string | undefined

/**
 * Returns a list of active BroadcastValueRef instances for the current request context.
 *
 * Возвращает список активных экземпляров BroadcastValueRef для контекста текущего запроса.
 */
const getItems = () => {
  return ServerStorage.get<Record<string, Ref>>(
    '__ui:broadcast-value-ref__',
    () => ({})
  )
}

/**
 * Creates a reactive variable to manage data between browser tabs.
 *
 * Создает реактивную переменную для управления данными между вкладками браузера.
 * @param name value name/ название значения
 * @param defaultValue default value/ значение по умолчанию
 */
export function useBroadcastValueRef<T>(
  name: string,
  defaultValue?: T | string | (() => (T | string))
): Ref<BroadcastValueItem<T>> {
  const fullName = `broadcast--${name}`
  const items = getItems()

  if (fullName in items) {
    return items[fullName] as Ref<BroadcastValueItem<T>>
  }

  const item = ref<BroadcastValueItem<T>>(executeFunction(defaultValue))
  const broadcast = new BroadcastMessage(
    fullName,
    (event) => {
      if (item.value !== event.data.message) {
        item.value = event.data.message
      }
    }
  )

  EffectScopeGlobal.run(() => {
    watch(item, value => broadcast.post({ message: value }))
  })

  items[fullName] = item
  return item as Ref<BroadcastValueItem<T>>
}
