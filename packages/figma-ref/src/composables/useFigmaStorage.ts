import { shallowRef, watch } from 'vue'
import { fetchStorage, sendStorage } from '@dxtmisha/figma'

/**
 * Composable for working with Figma storage.
 *
 * Композиция для работы с хранилищем Figma.
 * @param name Storage name / Название хранилища
 * @param defaultValue Default value / Значение по умолчанию
 * @param id object id/ id объекта
 * @returns An object containing the storage value and a loading state /
 * Объект, содержащий значение хранилища и состояние загрузки
 */
export function useFigmaStorage<T = any>(
  name: string,
  defaultValue?: T,
  id?: string
) {
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
