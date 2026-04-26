import {
  computed,
  type ComputedRef,
  getCurrentInstance,
  isRef, onServerPrefetch,
  onUnmounted,
  type Ref,
  ref,
  watch,
  type WatchHandle
} from 'vue'
import {
  Api,
  type ApiInstance,
  type ApiData,
  type ApiDataValidation,
  type ApiFetch,
  isDomRuntime
} from '@dxtmisha/functional-basic'

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

  /**
   * Status of response contract validation.
   *
   * Статус валидации контракта ответа.
   */
  isResponseContractValid: ComputedRef<boolean>

  /**
   * Result of response validation.
   *
   * Результат валидации ответа.
   */
  responseValidationResult: ComputedRef<ApiDataValidation | undefined>

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
   * SSR initialization
   *
   * Инициализация SSR
   */
  initSsr(): void

  /**
   * Default reset.
   *
   * Сброс по умолчанию.
   */
  reset(): Promise<void>

  /**
   * Stop request.
   *
   * Остановка запроса.
   */
  stop(): void

  /**
   * Abort request.
   *
   * Отмена запроса.
   */
  abort(): void
}

/** Global conditions / Глобальные условия */
let globalConditions: RefType<any>

/**
 * Returns data for working with requests.
 *
 * Возвращает данные для работы с запросами.
 * @param path path to request / путь к запросу
 * @param options data for the request / данные для запроса
 * @param reactivity should reactivity be enabled / включить ли реактивность
 * @param conditions conditions for executing the request / условия выполнения запроса
 * @param transformation transforms the received request / преобразовывает полученный запрос
 * @param validateResponseContract function to validate response data contract / функция для проверки контракта данных ответа
 * @param unmounted delete data from the cache / удалить ли данные из кеша
 * @param apiInstance Api instance / Экземпляр Api
 */
export function useApiRef<
  R,
  T = R
>(
  path?: RefOrNormal<string | undefined>,
  options?: ApiOptions,
  reactivity: boolean = true,
  conditions?: RefType<boolean>,
  transformation?: (data: T, isResponseContractValid?: ApiDataValidation) => ApiData<R>,
  validateResponseContract?: (data: T) => ApiDataValidation,
  unmounted: boolean = true,
  apiInstance: ApiInstance = Api.getItem()
): UseApiRef<R> {
  /** Value item / Элемент-значение */
  const item = ref<ApiData<R> | undefined>()

  /** Ref item options / Опции ссылочного элемента */
  const request = toRefItem(getOptions(options))

  /** Loading state flag / Флаг состояния загрузки */
  const loading = ref<boolean>(false)

  /** Reading state flag / Флаг состояния чтения */
  const reading = ref<boolean>(false)

  /** Result of response validation / Результат валидации ответа */
  const responseValidationResult = ref<ApiDataValidation>()

  /** Abort controller / Контроллер отмены */
  let abortController: AbortController | undefined = undefined

  /** Initial flag / Флаг инициализации */
  let first: boolean = true

  /** Watch end handler / Обработчик окончания наблюдения */
  let watchEnd: WatchHandle | undefined = undefined

  /**
   * Checks whether all conditions for executing the request are met.
   *
   * Проверяет, соблюдены ли все условия для выполнения запроса.
   * @returns returns true if all conditions are met / возвращает true, если все условия соблюдены
   */
  const isConditions = (): boolean => {
    const pathValue = getRef(path)
    return Boolean((!conditions || conditions.value) && pathValue)
  }

  /**
   * Returns information for the request.
   *
   * Возвращает информацию для запроса.
   * @returns object with request data / объект с данными запроса
   */
  const getApiFetch = (): ApiFetch => {
    const pathValue = getRef(path)

    return {
      path: pathValue,
      ...request.value
    }
  }

  /**
   * Recovers data from cache synchronously if available.
   *
   * Восстанавливает данные из кеша синхронно, если они доступны.
   */
  const recovery = () => {
    if (
      isDomRuntime()
      && isConditions()
    ) {
      const data = apiInstance.getResponse().emulatorAsync<ApiData<R>>(getApiFetch())

      if (data) {
        item.value = data
      }
    }
  }

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

    if (isConditions()) {
      loading.value = true
      reading.value = true

      try {
        const response = await apiInstance.request<Record<string, any>>({
          controller: abortController,
          ...getApiFetch()
        })

        if (response) {
          responseValidationResult.value = validateResponseContract?.(response as T)

          if (transformation) {
            item.value = transformation(
              response as T,
              responseValidationResult.value
            )
          } else {
            item.value = response as ApiData<R>
          }
        }
      } catch (_) {
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

      if (!isDomRuntime()) {
        return
      }

      recovery()

      if (item.value === undefined) {
        reset().then()
      }

      if (unmounted) {
        initWatch()
      } else {
        EffectScopeGlobal.run(() => initWatch())
      }
    }
  }

  if (
    unmounted
    && getCurrentInstance()
  ) {
    onUnmounted(() => stop())
  }

  /**
   * SSR initialization.
   *
   * Инициализация SSR.
   */
  const initSsr = () => {
    if (isDomRuntime()) {
      return
    }

    onServerPrefetch(async () => {
      first = false
      await reset()
    })
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

    isResponseContractValid: computed<boolean>(() => responseValidationResult.value?.status === 'success'),
    responseValidationResult: computed<ApiDataValidation | undefined>(() => responseValidationResult.value),

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
     * SSR initialization
     *
     * Инициализация SSR
     */
    initSsr,
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
