import { ref, type Ref, watch } from 'vue'
import { BroadcastMessage, executeFunction } from '@dxtmisha/functional-basic'

type BroadcastValueItem<T> = T | string | undefined

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

  watch(item, value => broadcast.post({ message: value }))

  items[fullName] = item
  return item as Ref<BroadcastValueItem<T>>
}

const items: Record<string, Ref<any>> = {}
