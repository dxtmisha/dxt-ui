import type { ApiData, ApiDefaultValue, ApiFetch, ApiMethodItem, SearchColumns, SearchItem, SearchOptions } from '@dxtmisha/functional-basic'
import type { RefOrNormal, RefType } from './refTypes'
import type { Ref } from 'vue'

/** Options for api requests/ Опции для запросов api */
export type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>

/**
 * Base type for API management values, either a single value or an array.
 *
 * Базовый тип для значений управления API: одиночное значение или массив.
 */
export type ApiManagementValue = ApiDefaultValue | ApiDefaultValue[]

/**
 * Configuration for the main GET request in API management.
 *
 * Конфигурация для основного GET-запроса в управлении API.
 */
export type ApiManagementGet<
  Return extends ApiManagementValue,
  Type extends ApiManagementValue = Return
> = {
  /** API endpoint path / Путь к API */
  path?: RefOrNormal<string | undefined>
  /** Additional request options / Дополнительные опции запроса */
  options?: ApiOptions
  /** Enable reactive updates when path or options change / Включить реактивные обновления при изменении пути или опций */
  reactivity?: boolean
  /** Condition to trigger the request / Условие выполнения запроса */
  conditions?: RefType<boolean>
  /** Custom transformation for the fetched data / Пользовательская трансформация полученных данных */
  transformation?: (data: Type) => ApiData<Return>
  /** Validation function or class constructor for data / Функция валидации или конструктор класса для данных */
  typeData?: ((data: Return) => boolean) | any
  /** Whether to clear data when the component is unmounted / Удалять ли данные при размонтировании компонента */
  unmounted?: boolean
  /** Function to provide skeleton data during loading / Функция, предоставляющая данные-заглушки во время загрузки */
  skeleton?: () => Return
}

/**
 * Configuration for client-side search across API data.
 *
 * Конфигурация для клиентского поиска по данным API.
 */
export type ApiManagementSearch<
  T extends SearchItem,
  K extends SearchColumns<T>
> = {
  /** List of columns to search through / Список столбцов для поиска */
  columns: K
  /** Reactive search query / Реактивная строка поиска */
  value?: Ref<string>
  /** Additional search algorithm options / Дополнительные опции алгоритма поиска */
  options?: SearchOptions
}

/**
 * Configuration for mutation requests (POST, PUT, DELETE).
 *
 * Конфигурация для запросов мутации (POST, PUT, DELETE).
 */
export type ApiManagementRequest<
  T,
  Return extends ApiData<T> = ApiData<T>
> = {
  /** Target API endpoint path / Целевой путь к API */
  path?: RefOrNormal<string | undefined>
  /** Action to perform after a successful request / Действие после успешного выполнения запроса */
  action?: (data: Return | undefined) => Promise<void> | void
  /** Transformation before sending data / Трансформация перед отправкой данных */
  transformation?: (data: T) => Return
  /** Whether to wrap the payload in a 'data' property / Обертывать ли полезную нагрузку в свойство 'data' */
  toData?: boolean
  /** Additional mutation request options / Дополнительные опции запроса мутации */
  options?: ApiOptions
}
