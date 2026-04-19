import { shallowRef } from 'vue'
import { isDomRuntime, Loading } from '@dxtmisha/functional-basic'

/**
 * Returns the loading status.
 *
 * Возвращает статус загрузки.
 */
export function useLoadingRef() {
  const item = shallowRef(Loading.is())

  if (isDomRuntime()) {
    Loading.registrationEvent(({ detail }) => {
      item.value = detail.loading
    })
  }

  return item
}
