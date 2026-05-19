import { ref } from 'vue'
import { Api, type ApiInstance, ApiMethodItem, type ApiData, type ApiFetch, type ApiErrorStorageList, ApiError, type ApiDataValidation, isApiSuccess } from '@dxtmisha/functional-basic'

import { getRef } from '../../functions/ref/getRef'
import { getOptions } from '../../functions/getOptions'
import { toRefItem } from '../../functions/ref/toRefItem'

import type { ApiOptions } from '../../types/apiTypes'
import type { RefOrNormal } from '../../types/refTypes'

/**
 * Setup interface for API request.
 *
 * Интерфейс настроек для запроса API.
 */
export interface UseApiRequestSetup<
  T,
  Request extends ApiFetch['request'] = ApiFetch['request'],
  Return extends ApiData<T> = ApiData<T>
> {
  /**
   * Path to the API endpoint. Can be a reactive Ref or a normal string.
   *
   * Путь к endpoint API. Может быть реактивным Ref или обычной строкой.
   */
  path?: RefOrNormal<string | undefined>

  /**
   * HTTP method used for the request (e.g., GET, POST, PUT, DELETE). Defaults to POST.
   *
   * HTTP метод, используемый для запроса (например, GET, POST, PUT, DELETE). По умолчанию POST.
   */
  method?: ApiMethodItem

  /**
   * Action/callback to perform after the request has successfully completed.
   * Can return a Promise for asynchronous operations.
   *
   * Действие/колбэк, выполняемое после успешного завершения запроса.
   * Может возвращать Promise для асинхронных операций.
   */
  action?: (data: Return | undefined) => Promise<void> | void

  /**
   * Transformation function that modifies the raw response data before returning it.
   *
   * Функция трансформации, которая преобразует исходные данные ответа перед их возвратом.
   */
  transformation?: (data: T) => Return

  /**
   * Function to validate the request payload contract. Used to ensure that the API
   * request payload matches the expected structure.
   *
   * Функция для проверки контракта данных запроса. Используется для гарантии того,
   * что отправляемая полезная нагрузка запроса API соответствует ожидаемой структуре.
   */
  validateRequestContract?: (data: Request) => ApiDataValidation & Return

  /**
   * Function to validate response data contract. Used to ensure that the API
   * response matches the expected structure. Highly recommended to use with `@effect/schema`.
   * It should return `ApiDataValidation` containing a `status` ('success' or 'error')
   * and the parsed data or errors.
   *
   * Функция для проверки контракта данных ответа. Используется для гарантии того, что ответ API соответствует
   * ожидаемой структуре. Настоятельно рекомендуется использовать с `@effect/schema`. Должна возвращать объект
   * `ApiDataValidation`, содержащий `status` ('success' или 'error') и распарсенные данные или ошибки.
   */
  validateResponseContract?: (data: T) => ApiDataValidation & Return

  /**
   * Array of expected error contracts for the request (`ApiErrorStorageList`).
   * Highly recommended to add if there is information about possible request errors. Allows you to predefine
   * possible errors (by code, status, or custom validation) which will be centrally processed by the application.
   *
   * Массив контрактов ожидаемых ошибок для запроса (`ApiErrorStorageList`). Желательно добавлять, если есть
   * информация о возможных ошибках запроса. Позволяет заранее описать возможные ошибки (по коду, статусу или
   * кастомной валидации) для централизованной обработки в приложении.
   */
  errorContract?: ApiErrorStorageList

  /**
   * If true, extracts the nested 'data' field from the response object instead of returning the raw envelope.
   * Defaults to true.
   *
   * Если true, извлекает вложенное поле 'data' из объекта ответа вместо возврата исходного конверта.
   * По умолчанию true.
   */
  toData?: boolean

  /**
   * Additional request options (headers, query params, etc.).
   *
   * Дополнительные опции запроса (заголовки, параметры запроса и т.д.).
   */
  options?: ApiOptions

  /**
   * Custom Api instance to execute the request on. Defaults to global Api singleton instance.
   *
   * Кастомный экземпляр класса Api для выполнения запроса. По умолчанию используется глобальный синглтон Api.
   */
  apiInstance?: ApiInstance
}

/**
 * Use api request.
 *
 * Использование запроса api.
 * @param setup Configured parameters as a single object / Настроенные параметры в виде единого объекта
 * @returns Object with loading state and send method / Объект с состоянием загрузки и методом отправки
 */
export function useApiRequest<
  T,
  Request extends ApiFetch['request'] = ApiFetch['request'],
  Return extends ApiData<T> = ApiData<T>
>(
  {
    path,
    method = ApiMethodItem.post,
    action,
    transformation,
    validateRequestContract,
    validateResponseContract,
    errorContract,
    toData = true,
    options,
    apiInstance = Api.getItem()
  }: UseApiRequestSetup<T, Request, Return>
) {
  /** Loading state / Состояние загрузки */
  const loading = ref<boolean>(false)

  /** Ref item options / Опции ссылочного элемента */
  const requestOptions = toRefItem(getOptions(options))

  if (errorContract) {
    ApiError.add(
      errorContract,
      getRef(path),
      method
    )
  }

  return {
    /** Loading state / Состояние загрузки */
    loading,

    /**
     * Send request.
     *
     * Отправка запроса.
     * @param request Request data / Данные запроса
     * @returns Response data / Данные ответа
     */
    async send(request?: Request): Promise<Return | undefined> {
      /** Response data / Данные ответа */
      let data: Return | undefined

      try {
        if (
          request
          && validateRequestContract
        ) {
          /** Validation request result / Результат валидации запроса */
          const validateRequestResult = validateRequestContract(request)

          if (
            validateRequestResult
            && !isApiSuccess(validateRequestResult)
          ) {
            return validateRequestResult
          }
        }

        loading.value = true

        data = await apiInstance.request<Return | undefined>({
          path: getRef(path),
          method,
          request,
          toData,
          ...requestOptions.value
        })

        if (data) {
          if (
            validateResponseContract
            && isApiSuccess(data)
          ) {
            /** Validation response result / Результат валидации ответа */
            const validateResponseResult = validateResponseContract(data)

            if (
              validateResponseResult
              && !isApiSuccess(validateResponseResult)
            ) {
              data = validateResponseResult
            }
          }

          if (
            transformation
            && isApiSuccess(data)
          ) {
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
      } catch (_) {
        data = undefined
      }

      loading.value = false

      return data
    }
  }
}
