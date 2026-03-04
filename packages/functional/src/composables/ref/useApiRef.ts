import {
  computed,
  type ComputedRef,
  isRef,
  onUnmounted,
  type Ref,
  ref,
  watch,
  type WatchHandle
} from 'vue'
import { Api, type ApiFetch, ApiMethodItem } from '@dxtmisha/functional-basic'

import { getRef } from '../../functions/ref/getRef'
import { toRefItem } from '../../functions/ref/toRefItem'

import type { RefOrNormal, RefType } from '../../types/refTypes'

/**
 * Options for api requests.
 *
 * Опции для запросов api.
 */
type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>

/**
 * Get request options.
 *
 * Возвращает опции запроса.
 * @param options options / параметры
 */
const getOptions = (options?: ApiOptions): RefOrNormal<ApiFetch> => {
  if (typeof options === 'string') {
    return { method: options }
  }

  if (options) {
    return options
  }

  return {} as ApiFetch
}

/**
 * Use api ref return type.
 *
 * Тип возвращаемого значения для useApiRef.
 */
export interface UseApiRef<R> {
  /** Loaded data / Загруженные данные */
  data: Ref<R | undefined>

  /** Start request flag (true if no data yet) / Флаг начала запроса (true если еще нет данных) */
  isStarting: ComputedRef<boolean>

  /** Request load flag / Флаг загрузки запроса */
  loading: ComputedRef<boolean>

  /** Active reading flag / Флаг активного чтения */
  reading: ComputedRef<boolean>

  /** Default reset / Сброс по умолчанию */
  reset(): Promise<void>

  /** Stop request / Остановка запроса */
  stop(): void
}

/** Global conditions / Глобальные условия */
let globalConditions: RefType<any>

/**
 * Returns data for working with requests.
 *
 * Возвращает данные для работы с запросами.
 * @param path path to request/ путь к запрос
 * @param options data for the request/ данные для запроса
 * @param reactivity should reactivity be enabled/ включить ли реактивность
 * @param conditions conditions for executing the request/ условия выполнения запроса
 * @param transformation transforms the received request/ преобразовывает полученный запрос
 * @param unmounted delete data from the cache/ удалить ли данные из кеша
 * @param controller controller for aborting the request/ контроллер для отмены запроса
 */
export function useApiRef<R, T = any>(
  path?: RefOrNormal<string | undefined>,
  options?: ApiOptions,
  reactivity: boolean = true,
  conditions?: RefType<boolean>,
  transformation?: (data: T) => R,
  unmounted?: boolean,
  controller?: AbortController
): UseApiRef<R> {
  /** Value item / Элемент-значение */
  const item = ref<R | undefined>()

  /** Ref item options / Опции ссылочного элемента */
  const request = toRefItem(getOptions(options))

  /** Loading state flag / Флаг состояния загрузки */
  const loading = ref<boolean>(false)

  /** Reading state flag / Флаг состояния чтения */
  const reading = ref<boolean>(false)

  /** Abort controller / Контроллер отмены */
  const abortController = controller || new AbortController()

  /** Initial flag / Флаг инициализации */
  let first: boolean = true

  /** Watch end handler / Обработчик окончания наблюдения */
  let watchEnd: WatchHandle | undefined = undefined

  /**
   * Data reload.
   *
   * Перезагрузка данных.
   */
  const reset = async () => {
    if (first) {
      return
    }

    const pathValue = getRef(path)

    if ((!conditions || conditions.value) && pathValue) {
      loading.value = true
      reading.value = true

      let responseData: R | T | undefined = {} as R
      const response = await Api.request<Record<string, any>>({
        path: pathValue,
        controller: abortController,
        ...request.value
      })

      if (response) {
        responseData = response as T
      }

      if (transformation) {
        item.value = transformation(responseData as T)
      } else {
        item.value = responseData as R
      }

      loading.value = false
    } else if (item.value !== undefined) {
      item.value = undefined
    }
  }

  /**
   * Stop request.
   *
   * Остановка запроса.
   */
  const stop = () => {
    console.warn('useApiRef: stop', getRef(path))

    watchEnd?.()
    item.value = undefined
    first = true
  }

  /**
   * Watch initialization.
   *
   * Инициализация наблюдения.
   */
  const initWatch = () => {
    const reactivityList: any[] = []

    if (reactivity) {
      reactivityList.push(request)
    }

    if (isRef(path)) {
      reactivityList.push(path)
    }

    if (conditions) {
      reactivityList.push(conditions)
    }

    if (globalConditions) {
      reactivityList.push(globalConditions)
    }

    if (reactivityList.length > 0) {
      watchEnd = watch(reactivityList, async () => {
        if (!loading.value) {
          await reset()
        }
      })
    }
  }

  if (!unmounted) {
    initWatch()
  }

  return {
    get data() {
      if (first) {
        first = false
        reset().then()

        if (unmounted) {
          initWatch()
          onUnmounted(() => stop())
        }
      }

      return item
    },
    get isStarting() {
      return computed<boolean>(() => item.value === undefined)
    },
    get loading() {
      return computed<boolean>(() => loading.value)
    },
    get reading() {
      return computed<boolean>(() => reading.value)
    },

    reset,
    stop
  }
}

/**
 * Defines global conditions for the API request.
 *
 * Определяет глобальные условия для API запроса.
 * @param conditions conditions for executing the request/ условия выполнения запроса
 */
export const setApiRefGlobalConditions = (conditions: RefType<any>) => {
  if (!globalConditions) {
    globalConditions = conditions
  }
}
