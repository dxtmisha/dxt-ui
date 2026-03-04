import { ref } from 'vue'
import { Api, ApiMethodItem, type ApiData, type ApiFetch } from '@dxtmisha/functional-basic'

import { getRef } from '../../functions/ref/getRef'
import { getOptions } from '../../functions/getOptions'
import { toRefItem } from '../../functions/ref/toRefItem'

import type { ApiOptions } from '../../types/apiTypes'
import type { RefOrNormal } from '../../types/refTypes'

/**
 * Use api request.
 *
 * Использование запроса api.
 * @param path Path to the API endpoint / Путь к endpoint API
 * @param method HTTP method / HTTP метод
 * @param action Action to perform after the request / Действие, выполняемое после запроса
 * @param transformation Transformation function / Функция трансформации
 * @param toData Extract 'data' field from response / Извлечь поле 'data' из ответа
 * @param options Additional request options / Дополнительные опции запроса
 * @returns Object with loading state and send method / Объект с состоянием загрузки и методом отправки
 */
export function useApiRequest<
  T,
  Request extends ApiFetch['request'] = ApiFetch['request'],
  Return extends ApiData<T> = ApiData<T>
>(
  path?: RefOrNormal<string | undefined>,
  method: ApiMethodItem = ApiMethodItem.post,
  action?: (data: Return | undefined) => Promise<void> | void,
  transformation?: (data: T) => Return,
  toData: boolean = true,
  options?: ApiOptions
) {
  /** Loading state / Состояние загрузки */
  const loading = ref<boolean>(false)

  /** Ref item options / Опции ссылочного элемента */
  const requestOptions = toRefItem(getOptions(options))

  return {
    loading,

    /**
     * Send request.
     *
     * Отправка запроса.
     * @param request Request data / Данные запроса
     * @returns Response data / Данные ответа
     */
    async send(request?: Request): Promise<Return | undefined> {
      loading.value = true

      /** Response data / Данные ответа */
      let data: Return | undefined

      try {
        data = await Api.request<Return | undefined>({
          path: getRef(path),
          method,
          request,
          toData,
          ...requestOptions.value
        })

        if (data) {
          if (transformation) {
            data = transformation(data)
          }

          if (action) {
            /** Action result / Результат действия */
            const result = action(data)

            if (result instanceof Promise) {
              await result
            }
          }
        }
      } catch (error) {
        console.error('useApiRequest: error', getRef(path), error)
      }

      loading.value = false

      return data
    }
  }
}
