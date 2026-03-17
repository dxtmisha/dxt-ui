import {
  computed,
  type ComputedRef,
  getCurrentInstance,
  isRef,
  onUnmounted,
  type Ref,
  ref,
  watch,
  type WatchHandle
} from 'vue'
import { Api, type ApiData } from '@dxtmisha/functional-basic'

import { getRef } from '../../functions/ref/getRef'
import { getOptions } from '../../functions/getOptions'
import { toRefItem } from '../../functions/ref/toRefItem'

import { EffectScopeGlobal } from '../../classes/ref/EffectScopeGlobal'

import type { ApiOptions } from '../../types/apiTypes'
import type { RefOrNormal, RefType } from '../../types/refTypes'

/**
 * Use api ref return type.
 *
 * Тип возвращаемого значения для useApiRef.
 */
export interface UseApiRef<R> {
  /** Reactive data (Computed) / Реактивные данные (Computed) */
  data: ComputedRef<ApiData<R> | undefined>

  /** Item (Ref) / Элемент (Ref) */
  item: Ref<ApiData<R> | undefined>

  /** Length of the list (Computed) / Длина списка (Computed) */
  length: ComputedRef<number>

  /** Start request flag (true if no data yet) / Флаг начала запроса (true если еще нет данных) */
  starting: ComputedRef<boolean>

  /** Request load flag / Флаг загрузки запроса */
  loading: Ref<boolean>

  /** Active reading flag / Флаг активного чтения */
  reading: Ref<boolean>

  /** Checks if the request is starting (true if no data yet) / Проверяет, начинается ли запрос (true, если данных еще нет) */
  isStarting(): boolean

  /**
   * Checks if the request is currently loading.
   *
   * Проверяет, загружается ли запрос в данный момент.
   */
  isLoading(): boolean

  /**
   * Checks if the request is currently reading.
   *
   * Проверяет, читается ли запрос в данный момент.
   */
  isReading(): boolean

  /**
   * Gets the current item data.
   *
   * Получает текущие данные элемента.
   */
  getItem(): ApiData<R> | undefined

  /**
   * Manual initialization
   *
   * Ручная инициализация
   */
  init(): void

  /**
   * Default reset
   *
   * Сброс по умолчанию
   */
  reset(): Promise<void>

  /**
   * Stop request
   *
   * Остановка запроса
   */
  stop(): void

  /**
   * Abort request
   *
   * Отмена запроса
   */
  abort(): void
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
 */
export function useApiRef<
  R,
  T = R
>(
  path?: RefOrNormal<string | undefined>,
  options?: ApiOptions,
  reactivity: boolean = true,
  conditions?: RefType<boolean>,
  transformation?: (data: T) => ApiData<R>,
  unmounted: boolean = true
): UseApiRef<R> {
  /** Value item / Элемент-значение */
  const item = ref<ApiData<R> | undefined>()

  /** Ref item options / Опции ссылочного элемента */
  const request = toRefItem(getOptions(options))

  /** Loading state flag / Флаг состояния загрузки */
  const loading = ref<boolean>(false)

  /** Reading state flag / Флаг состояния чтения */
  const reading = ref<boolean>(false)

  /** Abort controller / Контроллер отмены */
  let abortController: AbortController | undefined = undefined

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

    if (abortController) {
      abortController.abort()
    }

    abortController = request.value.controller
      || new AbortController()

    const pathValue = getRef(path)

    if ((!conditions || conditions.value) && pathValue) {
      loading.value = true
      reading.value = true

      try {
        const response = await Api.request<Record<string, any>>({
          path: pathValue,
          controller: abortController,
          ...request.value
        })

        if (response) {
          if (transformation) {
            item.value = transformation(response as T)
          } else {
            item.value = response as ApiData<R>
          }
        }
      } catch (error) {
        console.error('useApiRef: error', pathValue, error)
        item.value = undefined
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
   * Manual initialization.
   *
   * Ручная инициализация.
   */
  const init = () => {
    if (first) {
      first = false
      reset().then()

      if (unmounted) {
        initWatch()

        if (getCurrentInstance()) {
          onUnmounted(() => stop())
        }
      } else {
        EffectScopeGlobal.run(() => initWatch())
      }
    }
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

  /** Reactive data (Computed) / Реактивные данные (Computed) */
  const data = computed(() => {
    init()

    return item.value
  })

  /**
   * Returns the count of records in the list (ComputedRef) /
   * Возвращает количество записей в списке (ComputedRef)
   */
  const length = computed<number>(() => {
    if (Array.isArray(item.value)) {
      return item.value.length
    }

    return item.value ? 1 : 0
  })

  /** Start request flag (true if no data yet) / Флаг начала запроса (true если еще нет данных) */
  const starting = computed<boolean>(() => item.value === undefined)

  return {
    /** Reactive data (Computed) / Реактивные данные (Computed) */
    data,
    /** Item (Ref) / Элемент (Ref) */
    get item() {
      init()

      return item
    },

    /**
     * Returns the count of records in the list (ComputedRef) /
     * Возвращает количество записей в списке (ComputedRef)
     */
    length,

    /** Start request flag (true if no data yet) / Флаг начала запроса (true если еще нет данных) */
    starting,
    /** Request load flag / Флаг загрузки запроса */
    loading,
    /** Active reading flag / Флаг активного чтения */
    reading,

    /**
     * Checks if the request is starting (true if no data yet)
     *
     * Проверяет, начинается ли запрос (true, если данных еще нет)
     */
    isStarting() {
      return item.value === undefined
    },
    /**
     * Checks if the request is currently loading.
     *
     * Проверяет, загружается ли запрос в данный момент.
     */
    isLoading() {
      return loading.value
    },
    /**
     * Checks if the request is currently reading.
     *
     * Проверяет, читается ли запрос в данный момент.
     */
    isReading() {
      return reading.value
    },
    /**
     * Gets the current item data.
     *
     * Получает текущие данные элемента.
     */
    getItem() {
      return item.value
    },

    /**
     * Manual initialization
     *
     * Ручная инициализация
     */
    init,
    /**
     * Default reset
     *
     * Сброс по умолчанию
     */
    reset,
    /**
     * Stop request
     *
     * Остановка запроса
     */
    stop,
    /**
     * Abort request
     *
     * Отмена запроса
     */
    abort: () => abortController?.abort()
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
