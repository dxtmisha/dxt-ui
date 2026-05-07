import { StorageCallback } from '@dxtmisha/functional-basic'
import { FigmaUiMessenger } from '../classes/FigmaUiMessenger'

import {
  FIGMA_FRAME_STYLES_MESSENGER_NAME,
  type UiFigmaFrameStylesMessengerResponse
} from '../types/figmaStylesTypes'

/** Is initialized / Инициализировано */
let isInit: boolean = false

/**
 * Fetch the styles for the specified frames.
 *
 * Получить стили для указанных фреймов.
 * @param callback Callback function / Функция обратного вызова
 */
export function fetchFrameStyles(
  callback: (value: UiFigmaFrameStylesMessengerResponse) => void
) {
  initStyles()

  /** Storage callback / Колбэк хранилища */
  const storageCallback = getStorageCallback()

  storageCallback
    .addCallback(callback)
}

/**
 * Get the key for frame styles storage.
 *
 * Получить ключ хранилища стилей фреймов.
 * @returns Key / Ключ
 */
const getKey = () => 'figma:frame-styles:get'

/**
 * Get the storage callback instance for frame styles.
 *
 * Получить экземпляр колбэка хранилища для стилей фреймов.
 * @returns Storage callback / Колбэк хранилища
 */
const getStorageCallback = () =>
  StorageCallback.getInstance<UiFigmaFrameStylesMessengerResponse>(getKey())

/**
 * Initialize the messenger for frame styles.
 *
 * Инициализировать мессенджер для стилей фреймов.
 */
const initStyles = () => {
  if (isInit) {
    return
  }

  isInit = true

  /** The messenger instance for bidirectional communication / Экземпляр мессенджера для двусторонней связи */
  const messenger = FigmaUiMessenger.getInstance()

  messenger
    .add(FIGMA_FRAME_STYLES_MESSENGER_NAME, (data: UiFigmaFrameStylesMessengerResponse) => {
      getStorageCallback()
        .run(data)
        .then()
    })
}
