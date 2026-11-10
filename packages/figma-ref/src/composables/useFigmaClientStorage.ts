import { shallowRef, watch, type ShallowRef } from 'vue'
import { fetchClientStorage, sendClientStorage } from '@dxtmisha/figma'

/**
 * Return type for `useFigmaClientStorage`.
 *
 * Тип возвращаемого значения для `useFigmaClientStorage`.
 */
export type UseFigmaClientStorageReturn<T> = {
  /** Storage value / Значение хранилища */
  item: ShallowRef<T | undefined>
  /**
   * Indicates if a fetch operation is currently in progress /
   * Указывает, выполняется ли в данный момент операция получения
   */
  loading: ShallowRef<boolean>
}

/**
 * Composable for working with Figma client storage.
 *
 * Композиция для работы с клиентским хранилищем Figma.
 * @param name Storage name / Название хранилища
 * @param defaultValue Default value / Значение по умолчанию
 * @returns An object containing the storage value and a loading state /
 * Объект, содержащий значение хранилища и состояние загрузки
 */
export function useFigmaClientStorage<T = unknown>(
  name: string,
  defaultValue?: T
): UseFigmaClientStorageReturn<T> {
  /** Value from storage / Значение из хранилища */
  let storageValue: T | undefined = undefined

  /** Storage value / Значение хранилища */
  const item = shallowRef<T | undefined>()

  /**
   * Indicates if a fetch operation is currently in progress /
   * Указывает, выполняется ли в данный момент операция получения
   */
  const loading = shallowRef(true)

  fetchClientStorage<T>(
    name,
    (value) => {
      storageValue = value

      if (item.value !== value) {
        item.value = value
      }

      loading.value = false
    },
    defaultValue,
    false
  )

  watch(item, (value) => {
    if (storageValue !== value) {
      sendClientStorage(name, value)
    }
  })

  return {
    item,
    loading
  }
}
