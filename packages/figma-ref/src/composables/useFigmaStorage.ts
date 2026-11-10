import { shallowRef, watch, type ShallowRef } from 'vue'
import { fetchStorage, sendStorage } from '@dxtmisha/figma'

/**
 * Return type for `useFigmaStorage`.
 *
 * Тип возвращаемого значения для `useFigmaStorage`.
 */
export type UseFigmaStorageReturn<T> = {
  /** Storage value / Значение хранилища */
  item: ShallowRef<T | undefined>
  /**
   * Indicates if a fetch operation is currently in progress /
   * Указывает, выполняется ли в данный момент операция получения
   */
  loading: ShallowRef<boolean>
}

/**
 * Composable for working with Figma storage.
 *
 * Композиция для работы с хранилищем Figma.
 * @param name Storage name / Название хранилища
 * @param defaultValue Default value / Значение по умолчанию
 * @param id Object ID / ID объекта
 * @returns An object containing the storage value and a loading state /
 * Объект, содержащий значение хранилища и состояние загрузки
 */
export function useFigmaStorage<T = unknown>(
  name: string,
  defaultValue?: T,
  id?: string
): UseFigmaStorageReturn<T> {
  /** Value from storage / Значение из хранилища */
  let storageValue: T | undefined = undefined

  /** Storage value / Значение хранилища */
  const item = shallowRef<T | undefined>()

  /**
   * Indicates if a fetch operation is currently in progress /
   * Указывает, выполняется ли в данный момент операция получения
   */
  const loading = shallowRef(true)

  fetchStorage<T>(
    name,
    (value) => {
      storageValue = value

      if (item.value !== value) {
        item.value = value
      }

      loading.value = false
    },
    id,
    defaultValue,
    false
  )

  watch(item, (value) => {
    if (storageValue !== value) {
      sendStorage(name, value, id)
    }
  })

  return {
    item,
    loading
  }
}
