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
 * A powerful composable for comprehensive API request orchestration.
 * It centrally manages data loading (GET), list formatting, client-side searching,
 * and mutations (POST, PUT, DELETE) through a single reactive interface.
 *
 * Мощный композабл для комплексной оркестрации API-запросов.
 * Он централизованно управляет загрузкой данных (GET), форматированием списков,
 * клиентским поиском и мутациями (POST, PUT, DELETE) через единый реактивный интерфейс.
 *
 * @template Return type of data returned by the API / тип данных, возвращаемых API
 * @template FormattersOptions optional formatting rules / опциональные правила форматирования
 * @template Post data type for POST creation request / тип данных для POST-запроса создания
 * @template Put data type for PUT update request / тип данных для PUT-запроса обновления
 * @template Delete data type for DELETE removal request / тип данных для DELETE-запроса удаления
 * @template Type original data type (before transformation) / тип исходных данных (до трансформации)
 * @template Item type of a single item in the data list / тип одного элемента из списка данных
 * @template ItemFormatters item type after formatters are applied / тип элемента после применения форматировщиков
 * @template Columns search columns derived from formatting / колонки, по которым производится поиск
 *
 * @param propsGet main GET request settings (path, reactivity, skeleton, etc.) / настройки главного GET-запроса
 * @param formattersOptions optional reactive formatting rules / правила для реактивного форматирования данных
 * @param searchOptions optional client-side search settings / настройки для клиентского поиска по списку
 * @param postRequest optional POST mutation settings / настройки для POST-запроса создания
 * @param putRequest optional PUT mutation settings / настройки для PUT-запроса обновления
 * @param deleteRequest optional DELETE mutation settings / настройки для DELETE-запроса удаления
 * @param action common callback executed after any successful mutation / общий коллбэк после любой успешной мутации
 * @param apiInstance API instance for requests (defaults to Api.getItem()) / экземпляр API для выполнения запроса
 *
 * @returns {object} reactive API management interface / реактивный интерфейс управления API
 *
 * @note This hook is recommended to be used in tandem with `executeUse` for centralized state management.
 * By wrapping `useApiManagementRef` in `executeUseProvide` or `executeUseGlobal`, you can ensure
 * a single source of truth across the component tree or the entire application.
 *
 * Рекомендуется использовать этот хук в тандеме с `executeUse` для централизованного управления состоянием.
 * Обернув `useApiManagementRef` в `executeUseProvide` или `executeUseGlobal`, вы обеспечите
 * единый источник истины в дереве компонентов или во всем приложении.
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
    /** Whether data passed the `typeData` check / `true`, если данные прошли проверку `typeData` */
    isValid,

    /** Processed data array (supports Skeleton, formatters, and search) / Обработанный массив данных (поддерживает Skeleton, форматтеры и поиск) */
    list,
    /** Raw reactive data from `useApiRef` / «Сырые» реактивные данные из `useApiRef` */
    get data() {
      return request.data
    },

    /** Current number of items in `list` (changes with search) / Текущее количество элементов в `list` (меняется при поиске) */
    get length() {
      if (search) {
        return search.length
      }

      return request.length
    },
    /** Total number of items in raw `data` / Общее количество элементов в исходном `data` */
    lengthData: request.length,

    /** Initial loading flag (true when no data yet) / Флаг первичной загрузки (когда данных еще нет) */
    starting: request.starting,
    /** Active read process flag / Флаг активного процесса чтения данных */
    reading: request.reading,

    /** Loading state for the main GET request / Общее состояние загрузки главного GET-запроса */
    loading: request.loading,
    /** Loading state during search processing / Состояние загрузки в процессе поиска */
    loadingSearch: search?.loading,
    /** Loading state for POST mutation / Состояние загрузки для POST мутации */
    loadingPost: postItem?.loading,
    /** Loading state for PUT mutation / Состояние загрузки для PUT мутации */
    loadingPut: putItem?.loading,
    /** Loading state for DELETE mutation / Состояние загрузки для DELETE мутации */
    loadingDelete: deleteItem?.loading,

    /** Whether search is currently active / Активен ли поиск (есть ли поисковый запрос) */
    isSearch: search?.isSearch,
    /** Reactive search string (Proxy to `searchOptions.value`) / Реактивная строка поиска (Proxy к переданному `searchOptions.value`) */
    search: search?.search,

    /**
     * Force reset the GET request and clear state.
     *
     * Принудительный перезапуск GET-запроса и очистка состояния.
     */
    reset: request.reset,
    /**
     * Abort the current network request.
     *
     * Прекращение текущего сетевого запроса.
     */
    abort: request.abort,

    /**
     * Execute POST mutation request.
     *
     * Выполнить POST запрос мутации.
     * @param request request data / данные запроса
     */
    sendPost: async (request?: ApiFetch['request']) => await postItem?.send(request),
    /**
     * Execute PUT mutation request.
     *
     * Выполнить PUT запрос мутации.
     * @param request request data / данные запроса
     */
    sendPut: async (request?: ApiFetch['request']) => await putItem?.send(request),
    /**
     * Execute DELETE mutation request.
     *
     * Выполнить DELETE запрос мутации.
     * @param request request data / данные запроса
     */
    sendDelete: async (request?: ApiFetch['request']) => await deleteItem?.send(request)
  }
}
