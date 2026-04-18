/**
 * Supported HTTP methods for API requests.
 * Поддерживаемые HTTP-методы для API-запросов.
 */
export enum ApiMethodItem {
  /**
   * HTTP DELETE — used to delete resources.
   * HTTP DELETE — используется для удаления ресурсов.
   */
  delete = 'DELETE',

  /**
   * HTTP GET — used to retrieve resources (no request body).
   * HTTP GET — используется для получения ресурсов (без тела запроса).
   */
  get = 'GET',

  /**
   * HTTP POST — used to create resources or send data.
   * HTTP POST — используется для создания ресурсов или отправки данных.
   */
  post = 'POST',

  /**
   * HTTP PUT — used to update/replace resources.
   * HTTP PUT — используется для обновления/замены ресурсов.
   */
  put = 'PUT',

  /**
   * HTTP PATCH — used to partially update resources.
   * HTTP PATCH — используется для частичного обновления ресурсов.
   */
  patch = 'PATCH'
}

/**
 * Saved value in cache/ Сохраненное значение в кэше
 */
export type ApiCacheItem<T = any> = {
  /** Saved value / Сохраненное значение */
  value: T
  /** Age of the cache / Возраст кэша */
  age?: number
  /** Cache age in seconds / Возраст кэша в секундах */
  cacheAge: number
}

/**
 * List of saved values in cache/ Список сохраненных значений в кэше
 */
export type ApiCacheList = Record<string, ApiCacheItem>

/**
 * API configuration/ Конфигурация API
 */
export type ApiConfig = {
  /** Base URL for API requests/ Базовый URL для API-запросов */
  urlRoot?: string
  /** Default headers for API requests/ Заголовки по умолчанию для API-запросов */
  headers?: Record<string, string>
  /** Default request data for API requests/ Данные запроса по умолчанию для API-запросов */
  requestDefault?: Record<string, any>

  /** Function to call before request/ Функция для вызова перед запросом */
  preparation?: (apiFetch: ApiFetch) => Promise<void>
  /** Function to call after request/ Функция для вызова после запроса */
  end?: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>

  /** Timeout for the request in milliseconds/ Таймаут запроса в миллисекундах */
  timeout?: number
}

/**
 * Shape of API response data wrapper/ Структура обёртки данных ответа API
 */
export type ApiData<T = any> = T extends any[] ? T : ApiDataItem<T>

/**
 * Type of API response data item/ Тип элемента данных ответа API
 */
export type ApiDataItem<T = any>
  = T
    & {
    /** Primary payload (optional)/ Основная полезная нагрузка (опционально) */
      data?: T
      /** Success flag/ Флаг успешности */
      success?: boolean
      /** Status/ Статус */
      status?: ApiStatusType
      /** Message/ Сообщение */
      message?: string
      /** Status object/ Объект статуса */
      statusObject?: ApiStatusItem
    }

/**
 * Default API request data type/ Тип данных запроса API по умолчанию
 */
export type ApiDefaultValue = Record<string, any>

/**
 * Options for making API requests/ Опции для выполнения API-запросов
 */
export type ApiFetch = {
  /** Use base API URL/ Использовать базовый URL API */
  api?: boolean

  /** Endpoint path relative to base URL/ Путь endpoint относительно базового URL */
  path?: string

  /** Complete URL (overrides api + path)/ Полный URL (переопределяет api + path) */
  pathFull?: string

  /** HTTP method/ HTTP метод */
  method?: ApiMethod

  /** Request body data or query parameters/ Данные тела запроса или параметры запроса */
  request?: FormData | Record<string, any> | string

  /** Include authentication headers/ Включить заголовки аутентификации */
  auth?: boolean

  /** Custom headers (null = no headers)/ Пользовательские заголовки (null = без заголовков) */
  headers?: Record<string, string> | null

  /** Content-Type header value/ Значение заголовка Content-Type */
  type?: string

  /** Extract 'data' field from response/ Извлечь поле 'data' из ответа */
  toData?: boolean

  /** Use global response cache/ Использовать глобальный кеш ответов */
  global?: boolean

  /** Enable development logging/ Включить логирование разработки */
  devMode?: boolean

  /** Suppress error logging/ Подавить логирование ошибок */
  hideError?: boolean

  /** Suppress loading/ Подавить загрузку */
  hideLoading?: boolean

  /** Retry count/ Количество повторов */
  retry?: number

  /** Retry delay in milliseconds/ Задержка повтора в миллисекундах */
  retryDelay?: number

  /** Custom response processor/ Пользовательский процессор ответа */
  queryReturn?: (query: Response) => Promise<any>

  /** Run global preparation hooks/ Запускать глобальные хуки подготовки */
  globalPreparation?: boolean

  /** Run global end hooks/ Запускать глобальные хуки завершения */
  globalEnd?: boolean

  /** Additional fetch() options/ Дополнительные опции fetch() */
  init?: RequestInit

  /** Timeout for the request in milliseconds/ Таймаут запроса в миллисекундах */
  timeout?: number

  /** AbortController for canceling the request/ AbortController для отмены запроса */
  controller?: AbortController

  /** Cache age in seconds/ Возраст кэша в секундах */
  cache?: number

  enableClientCache?: boolean

  /** Cache ID for grouping/ ID кэша для группировки */
  cacheId?: number | string

  /** Limit of end reset/ Лимит сброса end */
  endResetLimit?: number
}

/**
 * Type of API hydration item/ Тип элемента гидратации API
 */
export type ApiHydrationItem = {
  /** Path string or RegExp to match request URL/ Путь или RegExp для сопоставления URL */
  path: string
  /** Expected HTTP method/ Ожидаемый HTTP метод */
  method: ApiMethod
  /** Expected request payload or special marker '*any'/ Ожидаемая нагрузка запроса или маркер '*any' */
  request?: ApiFetch['request']
  /** Static response or factory function/ Статический ответ или функция, возвращающая ответ */
  response: any
}

/**
 * List of API hydration items/ Список элементов гидратации API
 */
export type ApiHydrationList = ApiHydrationItem[]

/**
 * Supported HTTP methods type/ Тип HTTP-методов
 * (derived from ApiMethodItem enum)/ (получен из перечисления ApiMethodItem)
 */
export type ApiMethod = string & ApiMethodItem

/**
 * Result of global preparation/end hooks/ Результат глобальных хуков
 */
export type ApiPreparationEnd = {
  /** Reset flag to indicate state reset/ Флаг сброса состояния */
  reset?: boolean
  /** Arbitrary data returned by hook/ Произвольные данные, возвращаемые хуком */
  data?: any
}

/**
 * Mock API response descriptor/ Описание мок-ответа API
 */
export type ApiResponseItem = {
  /** Path string or RegExp to match request URL/ Путь или RegExp для сопоставления URL */
  path: string | RegExp
  /** Expected HTTP method/ Ожидаемый HTTP метод */
  method: ApiMethod
  /** Expected request payload or special marker '*any'/ Ожидаемая нагрузка запроса или маркер '*any' */
  request?: ApiFetch['request'] | '*any'
  /** Static response or factory function/ Статический ответ или функция, возвращающая ответ */
  response: any | ((request?: ApiFetch['request']) => any)
  /** Disable this mock/ Отключить этот мок */
  disable?: any
  /** Mark as global mock/ Мок для глобального использования */
  isForGlobal?: boolean
  /** Simulate network lag/ Имитировать задержку */
  lag?: any
}

export type ApiStatusItem = {
  /** HTTP status code/ Код статуса HTTP */
  status?: number
  /** HTTP status text/ Текст статуса HTTP */
  statusText?: string
  /** Error message/ Сообщение об ошибке */
  error?: string
  /** Last response/ Последний ответ */
  lastResponse?: any
  /** Last status/ Последний статус */
  lastStatus?: ApiStatusType
  /** Last message/ Последнее сообщение */
  lastMessage?: string
}

/** API status type/ Тип статуса API */
export type ApiStatusType = 'success' | 'error' | 'warning' | 'info'
