import { StorageCallback } from '@dxtmisha/functional-basic'
import { useFigmaUiMessenger } from '../composables/useFigmaUiMessenger'

import { UI_FIGMA_STORAGE_GET } from '../types/framesTypes'

export function fetchStorage<T>(
  name: string,
  callback: (value: any) => void
) {
  /** The messenger instance for bidirectional communication / Экземпляр мессенджера для двусторонней связи */
  const messenger = useFigmaUiMessenger()
  const storageCallback = new StorageCallback<T>(name)
  const update = (value: any) => {
    console.log('value', value)
    storageCallback.run(value)
  }

  storageCallback.addCallback(callback)
  messenger.add(UI_FIGMA_STORAGE_GET, update)
    .post(UI_FIGMA_STORAGE_GET)
}
