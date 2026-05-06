import { StorageCallback } from '@dxtmisha/functional-basic'
import { FigmaUiMessenger } from '../classes/FigmaUiMessenger'

import { UI_FIGMA_FRAME_GET_SELECTION, type UiFigmaFramesList } from '../types/framesTypes'

/** Is initialized / Инициализировано */
let isInit: boolean = false

/**
 * Fetch the list of selected frames.
 *
 * Получить список выбранных фреймов.
 * @param callback Callback function / Функция обратного вызова
 */
export function fetchFrameSelection(
  callback: (value: UiFigmaFramesList) => void
) {
  console.log('fetchFrameSelection')
  initSelection()

  /** Storage callback / Колбэк хранилища */
  const storageCallback = getStorageCallback<UiFigmaFramesList>()

  storageCallback
    .addCallback(callback)

  if (!storageCallback.isLoading()) {
    storageCallback.preparation()

    FigmaUiMessenger
      .getInstance()
      .post(UI_FIGMA_FRAME_GET_SELECTION)
  }
}

/**
 * Get the key for frame selection storage.
 *
 * Получить ключ хранилища выборки фреймов.
 * @returns Key / Ключ
 */
const getKey = () => `figma:frame-selection:get`

/**
 * Get the storage callback instance for frame selection.
 *
 * Получить экземпляр колбэка хранилища для выборки фреймов.
 * @returns Storage callback / Колбэк хранилища
 */
const getStorageCallback = <T>() => StorageCallback.getInstance<T>(getKey())

/**
 * Initialize the messenger for frame selection.
 *
 * Инициализировать мессенджер для выборки фреймов.
 */
const initSelection = () => {
  if (isInit) {
    return
  }
  console.log('initSelection')
  isInit = true

  /** The messenger instance for bidirectional communication / Экземпляр мессенджера для двусторонней связи */
  const messenger = FigmaUiMessenger.getInstance()

  messenger
    .add(UI_FIGMA_FRAME_GET_SELECTION, (data: UiFigmaFramesList) => {
      console.log('data', data)
      getStorageCallback()
        .run(data)
    })
}
