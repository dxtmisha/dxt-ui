import { shallowRef, watch, type Ref } from 'vue'
import { toRefItem } from '@dxtmisha/functional'
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
  inDocument?: Ref<boolean> | boolean,
  inLocal?: Ref<boolean> | boolean,
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

  watch(item, (value) => {
    if (isLocal.value) {
      sendClientStorage(name, isFilled(value) ? value : '')
    }

    if (isDocument.value) {
      sendStorage(name, isFilled(value) ? value : '')
    }
  })

  watch(isLocal, (active) => {
    if (active) {
      if (isFilled(item.value)) {
        sendClientStorage(name, item.value)
      } else {
        fetchClientStorage<T>(
          name,
          update,
          defaultValue,
          false
        )
      }
    } else {
      sendClientStorage(name, '')
    }
  })

  watch(isDocument, (active) => {
    if (active) {
      if (isFilled(item.value)) {
        sendStorage(name, item.value)
      } else {
        fetchStorage<T>(
          name,
          update,
          undefined,
          defaultValue,
          false
        )
      }
    } else {
      sendStorage(name, '')
    }
  })

  return {
    item,
    isDocument,
    isLocal
  }
}
