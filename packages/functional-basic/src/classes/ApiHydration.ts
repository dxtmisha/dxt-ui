import { getElementSafeScript } from '../functions/getElementSafeScript'
import { getHydrationData } from '../functions/getHydrationData'
import { isDomRuntime } from '../functions/isDomRuntime'

import type { ApiResponse } from './ApiResponse'

import { ApiMethodItem, type ApiFetch, type ApiHydrationList } from '../types/apiTypes'

/** ID for the hydration script element / ID для элемента скрипта гидратации */
const API_HYDRATION_ID = '__ui:api:hydration:id__'

/**
 * Class for collecting API data for hydration on the client side during SSR.
 *
 * Класс для сбора данных API для последующей гидратации на стороне клиента при SSR.
 */
export class ApiHydration {
  protected list: ApiHydrationList = []

  /**
   * Initializes the response with hydration data.
   *
   * Инициализирует ответ данными гидратации.
   * @param response API response / ответ API
   * @returns void / ничего не возвращает
   */
  initResponse(response: ApiResponse) {
    if (isDomRuntime()) {
      response.add(this.getListByClient())
    }
  }

  /**
   * Saves API response for client-side hydration.
   *
   * Сохраняет ответ API для гидратации на стороне клиента.
   * @param apiFetch API request configuration / конфигурация запроса API
   * @param response API response data / данные ответа API
   * @returns void / ничего не возвращает
   */
  toClient<T>(
    apiFetch: ApiFetch,
    response: T
  ): void {
    const {
      path,
      method = ApiMethodItem.get,
      request,
      global = method === ApiMethodItem.get
    } = apiFetch

    if (
      !global
      || !path
      || isDomRuntime()
    ) {
      return
    }

    this.list.push({
      path,
      method,
      request,
      response
    })
  }

  /**
   * Returns a string representation of the hydration data for the client.
   *
   * Возвращает строковое представление данных гидратации для клиента.
   */
  toString(): string {
    return getElementSafeScript(API_HYDRATION_ID, this.list)
  }

  /**
   * Returns the list of API responses for the client.
   *
   * Возвращает список ответов API для клиента.
   */
  protected getListByClient(): ApiHydrationList {
    return getHydrationData<ApiHydrationList>(API_HYDRATION_ID, [])
  }
}
