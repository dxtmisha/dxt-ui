import { shallowRef, watch } from 'vue'
import { toRefItem, type RefOrNormal } from '@dxtmisha/functional'
import { isFilled } from '@dxtmisha/functional-basic'
import {
  fetchClientStorage,
  fetchStorage,
  sendClientStorage,
  sendStorage
} from '@dxtmisha/figma'

/**
 * Composable for working with multiple Figma storage types (document and client).
 *
 * Композиция для работы с несколькими типами хранилищ Figma (макет и клиент).
 * @param name Storage name / Название хранилища
 * @param inDocument Save in document flag or ref / Флаг или ref сохранения в макете
 * @param inLocal Save in local storage flag or ref / Флаг или ref локального сохранения
 * @param defaultValue Default value / Значение по умолчанию
 * @returns An object containing the storage value and storage flags /
 * Объект, содержащий значение хранилища и флаги хранилища
 */
export function useFigmaStorageMulti<T = unknown>(
  name: string,
  inDocument?: RefOrNormal<boolean>,
  inLocal?: RefOrNormal<boolean>,
  defaultValue?: T
) {
  /** Save in document flag / Флаг сохранения в макете */
  const isDocument = toRefItem(inDocument ?? false)

  /** Save in local storage flag / Флаг локального сохранения */
  const isLocal = toRefItem(inLocal ?? false)

  /** Storage value / Значение хранилища */
  const item = shallowRef<T | undefined>(defaultValue)

  /**
   * Updates the value if not yet set.
   *
   * Обновляет значение, если оно ещё не установлено.
   * @param value storage value / значение из хранилища
   */
  const update = (value?: T) => {
    if (item.value !== value) {
      item.value = value
    }
  }

  fetchClientStorage<T>(
    name,
    (value) => {
      if (isFilled(value)) {
        update(value)
      } else {
        fetchStorage<T>(
          name,
          update,
          undefined,
          defaultValue,
          false
        )
      }
    },
    defaultValue,
    false
  )

  watch([item, isLocal, isDocument], () => {
    sendClientStorage(
      name,
      isLocal.value && isFilled(item.value) ? item.value : ''
    )

    sendStorage(
      name,
      isDocument.value && isFilled(item.value) ? item.value : ''
    )
  })

  return {
    item,
    isDocument,
    isLocal
  }
}
