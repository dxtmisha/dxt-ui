import { computed } from 'vue'
import {
  type FormattersOptionsList,
  type FormattersReturn,
  type ApiData,
  type ApiInstance,
  type ArrayToItem,
  type SearchColumns,
  type SearchFormatList,
  type FormattersListColumns,
  type ApiFetch,
  executePromise,
  isFunction,
  isApiSuccess
} from '@dxtmisha/functional-basic'

import { useApiRef } from './useApiRef'
import { useApiPost } from './useApiPost'
import { useApiPut } from './useApiPut'
import { useApiDelete } from './useApiDelete'
import { useFormattersRef } from './useFormattersRef'
import { useSearchRef } from './useSearchRef'

import type {
  ApiManagementGet,
  ApiManagementRequest,
  ApiManagementSearch,
  ApiManagementValue
} from '../../types/apiTypes'

/**
 * Hook for managing API requests, formatting, search, and mutations (POST, PUT, DELETE).
 *
 * Хук для управления API-запросами, форматированием, поиском и мутациями (POST, PUT, DELETE).
 * @param propsGet properties for GET request / параметры для GET запроса
 * @param formattersOptions options for formatting / опции форматирования
 * @param searchOptions options for search / опции поиска
 * @param postRequest properties for POST request / параметры для POST запроса
 * @param putRequest properties for PUT request / параметры для PUT запроса
 * @param deleteRequest properties for DELETE request / параметры для DELETE запроса
 * @param action additional action to perform on mutations / дополнительное действие при мутациях
 */
export function useApiManagementRef<
  Return extends ApiManagementValue,
  FormattersOptions extends FormattersOptionsList,
  Post extends Record<string, any>,
  Put extends Record<string, any>,
  Delete extends Record<string, any>,
  Type extends ApiManagementValue = Return,
  Item extends ArrayToItem<Return> = ArrayToItem<Return>,
  ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number],
  Columns extends SearchColumns<ItemFormatters> = []
>(
  propsGet: ApiManagementGet<Return, Type>,
  formattersOptions?: FormattersOptions,
  searchOptions?: ApiManagementSearch<Item, Columns>,
  postRequest?: ApiManagementRequest<Post>,
  putRequest?: ApiManagementRequest<Put>,
  deleteRequest?: ApiManagementRequest<Delete>,
  action?: () => Promise<void> | void,
  apiInstance?: ApiInstance
) {
  const {
    path,
    options,
    reactivity,
    conditions,
    transformation,
    typeData,
    unmounted,
    skeleton
  } = propsGet

  /** Formatters reference / Ссылка на форматтеры */
  let formatters: ReturnType<typeof useFormattersRef<FormattersOptions, Return>> | undefined
  /** Search reference / Ссылка на поиск */
  let search: ReturnType<typeof useSearchRef<Item, Columns>> | undefined

  /** POST request reference / Ссылка на POST запрос */
  let postItem: ReturnType<typeof useApiPost<Post>> | undefined
  /** PUT request reference / Ссылка на PUT запрос */
  let putItem: ReturnType<typeof useApiPut<Put>> | undefined
  /** DELETE request reference / Ссылка на DELETE запрос */
  let deleteItem: ReturnType<typeof useApiDelete<Delete>> | undefined

  /** Main GET request / Основной GET запрос */
  const request = useApiRef<Return, Type>(
    path,
    options,
    reactivity,
    conditions,
    transformation,
    unmounted,
    apiInstance
  )

  /** Is valid data / Валидность данных */
  const isValid = computed<boolean>(() => {
    if (typeData === undefined) {
      return true
    }

    if (request.isStarting()) {
      return false
    }

    if (isFunction(typeData)) {
      return typeData(request.data.value)
    }

    return request.data.value instanceof typeData
  })

  /** Reactive data with fallback to skeleton / Реактивные данные с фолбеком на скелетон */
  const data = computed(() => {
    if (
      request.isStarting()
      && skeleton
    ) {
      return skeleton()
    }

    return request.data.value
  })

  if (formattersOptions) {
    formatters = useFormattersRef<FormattersOptions, Return>(
      data,
      formattersOptions
    )
  }

  if (searchOptions) {
    /** Target data for search / Целевые данные для поиска */
    const dataForSearch = computed(() => {
      const list = formatters?.listFormat.value ?? request.data.value

      if (Array.isArray(list)) {
        return list
      }

      return undefined
    })

    search = useSearchRef<Item, Columns>(
      dataForSearch,
      searchOptions.columns,
      searchOptions.value,
      searchOptions.options
    )
  }

  if (
    postRequest
    || putRequest
    || deleteRequest
  ) {
    /**
     * Common action to perform after mutation.
     *
     * Общее действие после мутации.
     * @param data response data / данные ответа
     */
    const actionRequest = (data: ApiData) => {
      action?.()

      if (isApiSuccess(data)) {
        request.reset()
      }
    }

    /**
     * Wrapper for API action with callback execution.
     *
     * Обёртка для действия API с выполнением коллбэка.
     * @param action target action / целевое действие
     */
    const getCallbackActionRequest = (
      action?: (data?: any) => Promise<void> | void
    ): ((data?: any) => Promise<void>) => {
      return async (data?: any) => {
        if (isFunction(action)) {
          await executePromise(action(data))
        }

        actionRequest(data)
      }
    }

    if (postRequest) {
      postItem = useApiPost<Post>(
        postRequest.path,
        getCallbackActionRequest(postRequest.action),
        postRequest.transformation,
        postRequest.toData,
        postRequest.options,
        apiInstance
      )
    }

    if (putRequest) {
      putItem = useApiPut<Put>(
        putRequest.path,
        getCallbackActionRequest(putRequest.action),
        putRequest.transformation,
        putRequest.toData,
        putRequest.options,
        apiInstance
      )
    }

    if (deleteRequest) {
      deleteItem = useApiDelete<Delete>(
        deleteRequest.path,
        getCallbackActionRequest(deleteRequest.action),
        deleteRequest.transformation,
        deleteRequest.toData,
        deleteRequest.options,
        apiInstance
      )
    }
  }

  /** List data (Computed) / Данные списка (Computed) */
  const list = computed<
    typeof search extends undefined ? (
      typeof formatters extends undefined ? (ApiData<Return> | undefined) : FormattersReturn<Return, FormattersOptions>
    ) : SearchFormatList<typeof formatters extends undefined ? Item : ItemFormatters, Columns>
  >(() => {
    if (isValid.value) {
      if (
        search
        && Array.isArray(request.data.value)
      ) {
        return search.listSearch.value as any
      }

      if (formatters) {
        return formatters.listFormat.value
      }
    }

    return data.value
  })

  return {
    /** Is valid data (Computed) / Валидность данных (Computed) */
    isValid,

    /** List data (Computed) / Данные списка (Computed) */
    list,
    /** Raw request data (Computed) / Исходные данные запроса (Computed) */
    get data() {
      return request.data
    },

    /** Length of the list (Computed) / Длина списка (Computed) */
    get length() {
      if (search) {
        return search.length
      }

      return request.length
    },
    /** Data length (number) / Длина исходных данных */
    lengthData: request.length,

    /** Active starting flag (true if no data yet) / Флаг начальной загрузки (true если еще нет данных) */
    starting: request.starting,
    /** Active reading flag / Флаг активного чтения */
    reading: request.reading,

    /** Request load flag / Флаг загрузки запроса */
    loading: request.loading,
    /** Loading search flag / Флаг загрузки поиска */
    loadingSearch: search?.loading,
    /** POST request load flag / Флаг загрузки POST запроса */
    loadingPost: postItem?.loading,
    /** PUT request load flag / Флаг загрузки PUT запроса */
    loadingPut: putItem?.loading,
    /** DELETE request load flag / Флаг загрузки DELETE запроса */
    loadingDelete: deleteItem?.loading,

    /** Is search active / Активен ли поиск */
    isSearch: search?.isSearch,
    /** Search function / Функция поиска */
    search: search?.search,

    /**
     * Default reset.
     *
     * Сброс по умолчанию.
     */
    reset: request.reset,
    /**
     * Abort request.
     *
     * Отмена запроса.
     */
    abort: request.abort,

    /**
     * Send POST request.
     *
     * Выполнить POST запрос.
     * @param request request data / данные запроса
     */
    sendPost: async (request?: ApiFetch['request']) => await postItem?.send(request),
    /**
     * Send PUT request.
     *
     * Выполнить PUT запрос.
     * @param request request data / данные запроса
     */
    sendPut: async (request?: ApiFetch['request']) => await putItem?.send(request),
    /**
     * Send DELETE request.
     *
     * Выполнить DELETE запрос.
     * @param request request data / данные запроса
     */
    sendDelete: async (request?: ApiFetch['request']) => await deleteItem?.send(request)
  }
}
