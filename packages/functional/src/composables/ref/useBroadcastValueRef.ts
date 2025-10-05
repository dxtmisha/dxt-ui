import { ref, type Ref, watch } from 'vue'
import { executeFunction } from '../../functions/executeFunction'
import { random } from '../../functions/random'
import { useStorageRef } from './useStorageRef'

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
  const fullName = `broadcast__${getRandomName()}__${name}`

  if (fullName in items) {
    return items[fullName] as Ref<BroadcastValueItem<T>>
  }

  const broadcast = new BroadcastChannel(fullName)
  const item = ref<BroadcastValueItem<T>>(executeFunction(defaultValue))

  watch(item, value => broadcast.postMessage({ message: value }))
  broadcast.onmessage = (event) => {
    if (item.value !== event.data.message) {
      item.value = event.data.message
    }
  }

  items[fullName] = item
  return item as Ref<BroadcastValueItem<T>>
}

const items: Record<string, Ref<any>> = {}

/**
 * Generates a random name and saves it in local storage.
 *
 * Генерирует случайное имя и сохраняет его в локальном хранилище.
 */
const getRandomName = () => useStorageRef(
  '__broadcast-name',
  () => `name_${random(1_000_000, 9_999_999)}`
)
