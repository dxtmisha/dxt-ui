import { StorageCallback } from '@dxtmisha/functional-basic'
import { FigmaUiMessenger } from '../classes/FigmaUiMessenger'

import { UI_FIGMA_CLIENT_STORAGE_GET } from '../types/framesTypes'
import type { ClientStorageMessengerData } from '../types/storageTypes'

/** Is initialized / Инициализировано */
let isInit: boolean = false

/**
 * Fetch client storage data.
 *
 * Получить данные клиентского хранилища.
 * @param name Storage name / Имя хранилища
 * @param callback Callback function / Функция обратного вызова
 * @param defaultValue Default value / Значение по умолчанию
 * @param isOnce Call only once / Вызвать только один раз
 */
export function fetchClientStorage<T = unknown>(
  name: string,
  callback: (value: T) => void,
  defaultValue?: T,
  isOnce: boolean = true
): void {
  initMessenger()

  /** Storage callback / Колбэк хранилища */
  const storageCallback = getStorageCallback<T>(name)

  storageCallback
    .addCallback(callback, isOnce)

  if (!storageCallback.isLoading()) {
    storageCallback.preparation()

    FigmaUiMessenger
      .getInstance()
      .post<ClientStorageMessengerData<T | undefined>>(UI_FIGMA_CLIENT_STORAGE_GET, {
        name,
        value: defaultValue
      })
  }
}

/**
 * Get client storage key.
 *
 * Получить ключ клиентского хранилища.
 * @param name Storage name / Имя хранилища
 * @returns Storage key / Ключ хранилища
 */
const getKey = (name: string): string =>
  `figma:client-storage:${name}`

/**
 * Get client storage callback instance.
 *
 * Получить экземпляр колбэка клиентского хранилища.
 * @param name Storage name / Имя хранилища
 * @returns Storage callback / Колбэк хранилища
 */
const getStorageCallback = <T>(name: string): StorageCallback<T> =>
  StorageCallback.getInstance<T>(getKey(name))

/**
 * Initialize messenger for client storage.
 *
 * Инициализировать мессенджер для клиентского хранилища.
 */
const initMessenger = (): void => {
  if (isInit) {
    return
  }

  isInit = true

  /** The messenger instance for bidirectional communication / Экземпляр мессенджера для двусторонней связи */
  const messenger = FigmaUiMessenger.getInstance()

  messenger
    .add(UI_FIGMA_CLIENT_STORAGE_GET, (data: ClientStorageMessengerData) => {
      getStorageCallback(data.name)
        .run(data.value)
    })
}
