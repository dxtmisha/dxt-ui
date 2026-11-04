import { ref, type Ref } from 'vue'
import { Api, type ApiInstance, ApiMethodItem, type ApiData, type ApiFetch, type ApiErrorStorageList, ApiError, type ApiDataValidation, isApiSuccess } from '@dxtmisha/functional-basic'

import { getRef } from '../../functions/ref/getRef'
import { getOptions } from '../../functions/getOptions'
import { toRefItem } from '../../functions/ref/toRefItem'

import type { ApiOptions } from '../../types/apiTypes'
import type { RefOrNormal } from '../../types/refTypes'

/** Setup interface for API request / Интерфейс настроек для запроса API */
export interface UseApiRequestSetup<
  T,
  Request extends ApiFetch['request'] = ApiFetch['request'],
  Return extends ApiData<T> = ApiData<T>
> {
  /** Path to the API endpoint (can be a reactive Ref or a string) / Путь к endpoint API (может быть реактивным Ref или строкой) */
  path?: RefOrNormal<string | undefined>

  /** HTTP method used for the request (defaults to POST) / HTTP метод для запроса (по умолчанию POST) */
  method?: ApiMethodItem

  /**
   * Callback invoked after receiving and processing response data, regardless of success /
   * Колбэк после получения и обработки данных ответа, независимо от успешности
   */
  action?: (data: Return | undefined) => Promise<void> | void

  /** Callback for a successful response / Колбэк для успешного ответа */
  actionSuccess?: (data: Return) => Promise<void> | void

  /**
   * Callback for an error response or validation failure; transport errors pass undefined and the exception /
   * Колбэк для ошибочного ответа или результата валидации; при ошибке сети передаются undefined и исключение
   */
  actionError?: (data: Return | undefined, error?: unknown) => Promise<void> | void

  /**
   * Transformation function that modifies the raw response data before returning it /
   * Функция трансформации, которая преобразует исходные данные ответа перед их возвратом
   */
  transformation?: (data: T) => Return

  /**
   * Function to validate the request payload contract /
   * Функция для проверки контракта отправляемых данных запроса
   */
  validateRequestContract?: (data: Request) => ApiDataValidation & Return

  /**
   * Function to validate response data contract (recommended with `@effect/schema`) /
   * Функция для проверки контракта данных ответа (рекомендуется использовать с `@effect/schema`)
   */
  validateResponseContract?: (data: T) => ApiDataValidation & Return

  /**
   * Array of expected error contracts for the request (`ApiErrorStorageList`) /
   * Массив контрактов ожидаемых ошибок для запроса (`ApiErrorStorageList`)
   */
  errorContract?: ApiErrorStorageList

  /**
   * If true, extracts the nested 'data' field from the response object (defaults to true) /
   * Если true, извлекает вложенное поле 'data' из объекта ответа (по умолчанию true)
   */
  toData?: boolean

  /** Additional request options (headers, query params, etc.) / Дополнительные опции запроса (заголовки, параметры запроса и т.д.) */
  options?: ApiOptions

  /** Custom Api instance to execute the request on (defaults to global Api instance) / Кастомный экземпляр класса Api для выполнения запроса (по умолчанию глобальный синглтон Api) */
  apiInstance?: ApiInstance
}

/** Return interface for useApiRequest / Интерфейс возвращаемого значения для useApiRequest */
export interface UseApiRequestReturn<
  Return,
  Request extends ApiFetch['request'] = ApiFetch['request']
> {
  /** Whether any send call is active / Выполняется ли хотя бы один вызов send */
  loading: Ref<boolean>

  /**
   * Sends a request and awaits callbacks; loading covers all active send calls.
   *
   * Отправляет запрос и ожидает колбэки; loading учитывает все активные вызовы send.
   * @param request Request data / Данные запроса
   * @returns Response data / Данные ответа
   */
  send(request?: Request): Promise<Return | undefined>
}

/**
 * Use api request.
 *
 * Использование запроса api.
 * @template T raw response data type / тип исходных данных ответа
 * @template Request request payload type / тип отправляемых данных запроса
 * @template Return transformed response data type / тип возвращаемых данных ответа
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
    actionSuccess,
    actionError,
    transformation,
    validateRequestContract,
    validateResponseContract,
    errorContract,
    toData = true,
    options,
    apiInstance = Api.getItem()
  }: UseApiRequestSetup<T, Request, Return>
): UseApiRequestReturn<Return, Request> {
  /** Whether any send call is active / Выполняется ли хотя бы один вызов send */
  const loading = ref<boolean>(false)

  /** Number of active send calls, including validation and callbacks / Число активных вызовов send, включая валидацию и колбэки */
  let activeRequestCount = 0

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
    /** Whether any send call is active / Выполняется ли хотя бы один вызов send */
    loading,

    /**
     * Sends a request and awaits callbacks; loading covers all active send calls.
     *
     * Отправляет запрос и ожидает колбэки; loading учитывает все активные вызовы send.
     * @param request Request data / Данные запроса
     * @returns Response data / Данные ответа
     */
    async send(request?: Request): Promise<Return | undefined> {
      /** Response data / Данные ответа */
      let data: Return | undefined

      activeRequestCount++
      loading.value = true

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
            await actionError?.(validateRequestResult)
            return validateRequestResult
          }
        }

        try {
          data = await apiInstance.request<Return | undefined>({
            path: getRef(path),
            method,
            request,
            toData,
            ...requestOptions.value
          })
        } catch (error) {
          await actionError?.(undefined, error)
        }

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

          await action?.(data)

          if (isApiSuccess(data)) {
            await actionSuccess?.(data)
          } else {
            await actionError?.(data)
          }
        }
      } catch (_) {
        data = undefined
      } finally {
        activeRequestCount--
        loading.value = activeRequestCount > 0
      }

      return data
    }
  }
}
