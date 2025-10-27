/**
 * Supported HTTP methods for API requests.
 * Поддерживаемые HTTP-методы для API-запросов.
 */
export enum ApiMethodItem {
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
   * HTTP DELETE — used to delete resources.
   * HTTP DELETE — используется для удаления ресурсов.
   */
  delete = 'DELETE'
}

/**
 * Supported HTTP methods type/ Тип HTTP-методов
 * (derived from ApiMethodItem enum)/ (получен из перечисления ApiMethodItem)
 */
export type ApiMethod = string & ApiMethodItem

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

  /** Custom response processor/ Пользовательский процессор ответа */
  queryReturn?: (query: Response) => Promise<any>

  /** Run global preparation hooks/ Запускать глобальные хуки подготовки */
  globalPreparation?: boolean

  /** Run global end hooks/ Запускать глобальные хуки завершения */
  globalEnd?: boolean

  /** Additional fetch() options/ Дополнительные опции fetch() */
  init?: RequestInit
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

/**
 * Shape of API response data wrapper/ Структура обёртки данных ответа API
 */
export type ApiData<T>
  = T
    & {
      /** Primary payload (optional)/ Основная полезная нагрузка (опционально) */
      data?: T
      /** Success flag/ Флаг успешности */
      success?: boolean
    }

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
 * Default API request data type/ Тип данных запроса API по умолчанию
 */
export type ApiDefaultValue = Record<string, any>

export type ApiStatusItem = {
  status?: number
  statusText?: string
  error?: string
  lastResponse?: any
  lastMessage?: string
}
