import { StorageCallback } from '@dxtmisha/functional-basic'
import { FigmaUiMessenger } from '../classes/FigmaUiMessenger'

import { UI_FIGMA_STORAGE_GET } from '../types/framesTypes'
import type { StorageMessengerData } from '../types/storageTypes'

/** Is initialized / Инициализировано */
let isInit: boolean = false

/**
 * Fetch storage data.
 *
 * Получить данные хранилища.
 * @param name Storage name / Имя хранилища
 * @param callback Callback function / Функция обратного вызова
 * @param id Storage id / Идентификатор хранилища
 * @param defaultValue Default value / Значение по умолчанию
 * @param isOnce Call only once / Вызвать только один раз
 */
export function fetchStorage<T = unknown>(
  name: string,
  callback: (value: T) => void,
  id?: string,
  defaultValue?: T,
  isOnce: boolean = true
): void {
  initMessenger()

  /** Storage callback / Колбэк хранилища */
  const storageCallback = getStorageCallback<T>(name, id)

  storageCallback
    .addCallback(callback, isOnce)

  if (!storageCallback.isLoading()) {
    storageCallback.preparation()

    FigmaUiMessenger
      .getInstance()
      .post<StorageMessengerData<T | undefined>>(UI_FIGMA_STORAGE_GET, {
        name,
        id,
        value: defaultValue
      })
  }
}

/**
 * Get storage key.
 *
 * Получить ключ хранилища.
 * @param name Storage name / Имя хранилища
 * @param id Storage id / Идентификатор хранилища
 * @returns Storage key / Ключ хранилища
 */
const getKey = (name: string, id?: string): string =>
  `figma:storage:${id ? `${name}:${id}` : name}`

/**
 * Get storage callback.
 *
 * Получить колбэк хранилища.
 * @param name Storage name / Имя хранилища
 * @param id Storage id / Идентификатор хранилища
 * @returns Storage callback / Колбэк хранилища
 */
const getStorageCallback = <T>(name: string, id?: string): StorageCallback<T> =>
  StorageCallback.getInstance<T>(getKey(name, id))

/**
 * Initialize messenger.
 *
 * Инициализировать мессенджер.
 */
const initMessenger = (): void => {
  if (isInit) {
    return
  }

  isInit = true

  /** The messenger instance for bidirectional communication / Экземпляр мессенджера для двусторонней связи */
  const messenger = FigmaUiMessenger.getInstance()

  messenger
    .add(UI_FIGMA_STORAGE_GET, (data: StorageMessengerData) => {
      getStorageCallback(data.name, data.id)
        .run(data.value)
    })
}
