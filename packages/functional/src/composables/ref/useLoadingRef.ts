import { getCurrentScope, onScopeDispose, shallowRef, type ShallowRef } from 'vue'
import { isDomRuntime, Loading, type LoadingDetail } from '@dxtmisha/functional-basic'

/**
 * Returns the loading status and removes its listener when the current scope stops.
 * Without an active scope, the browser listener remains active for the page lifetime.
 * During SSR, only the initial status is read; no event listener is registered.
 *
 * Возвращает статус загрузки и удаляет слушатель при завершении текущей области эффектов.
 * Без активной области эффектов слушатель в браузере остаётся на всё время жизни страницы.
 * При SSR читается только начальный статус; слушатель событий не регистрируется.
 * @returns reactive loading status / реактивный статус загрузки
 */
export function useLoadingRef(): ShallowRef<boolean> {
  const item = shallowRef(Loading.is())

  if (isDomRuntime()) {
    /**
     * Updates the loading status from a global event.
     *
     * Обновляет статус загрузки из глобального события.
     * @param event loading event / событие загрузки
     */
    const listener = ({ detail }: CustomEvent<LoadingDetail>): void => {
      item.value = detail.loading
    }

    Loading.registrationEvent(listener)

    if (getCurrentScope()) {
      onScopeDispose(() => Loading.unregistrationEvent(listener))
    }
  }

  return item
}
