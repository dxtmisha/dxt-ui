import {
  computed,
  type ComputedRef,
  isRef,
  onUnmounted,
  type Ref,
  ref,
  watch
} from 'vue'

import { getRef } from '../../functions/ref/getRef'
import { toRefItem } from '../../functions/ref/toRefItem'

import {
  Api,
  type ApiFetch,
  ApiMethodItem
} from '../../classes/Api'

import type { RefOrNormal, RefType } from '../../types/refTypes'

type ApiOptions = ApiMethodItem | RefOrNormal<ApiFetch>

const getOptions = (options?: ApiOptions): RefOrNormal<ApiFetch> => {
  if (typeof options === 'string') {
    return { method: options }
  }

  if (options) {
    return options
  }

  return {} as ApiFetch
}

export interface UseApiRef<R> {
  data: Ref<R | undefined>
  isStarting: ComputedRef<boolean>
  loading: Ref<boolean>

  reset(): Promise<void>
}

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
export function useApiRef<R, T = any>(
  path?: RefOrNormal<string | undefined>,
  options?: ApiOptions,
  reactivity: boolean = true,
  conditions?: RefType<boolean>,
  transformation?: (data: T) => R,
  unmounted?: boolean
): UseApiRef<R> {
  const item = ref<R | undefined>()
  const request = toRefItem(getOptions(options))
  const loading = ref<boolean>(false)

  let first = true
  let stop = 0

  const reset = async () => {
    if (first) {
      return
    }

    const pathValue = getRef(path)

    if ((!conditions || conditions.value) && pathValue) {
      loading.value = true

      let responseData: R | T | undefined = {} as R
      const response = await Api.request<Record<string, any>>({
        path: pathValue,
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
      watch(reactivityList, async () => {
        if (!loading.value) {
          await reset()
        }
      })
    }
  }

  return {
    get data() {
      if (first) {
        first = false
        reset().then()
      }

      initWatch()

      if (unmounted) {
        stop++
        onUnmounted(() => {
          stop--

          if (stop < 1) {
            console.warn('useApiRef: unmounted')
            item.value = undefined
            first = true
            stop = 0
          }
        })
      }

      return item
    },
    get isStarting() {
      return computed<boolean>(() => item.value === undefined)
    },
    loading,
    reset
  }
}

export const setApiRefGlobalConditions = (conditions: RefType<any>) => {
  if (!globalConditions) {
    globalConditions = conditions
  }
}
