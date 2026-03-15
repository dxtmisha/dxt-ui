import { useApiRef } from './useApiRef'
import { useFormattersRef } from './useFormattersRef'

import type { ApiManagementProps } from '../../types/apiTypes'
import type { ComputedRef } from 'vue'
import type { useSearchRef } from './useSearchRef'

export function useApiManagementRef<
  R extends Record<string, any>[],
  T extends Record<string, any>[] = R
>(props: ApiManagementProps<R, T>) {
  const {
    path,
    options,
    reactivity,
    conditions,
    transformation,
    unmounted
  } = props.get

  let formatters: ReturnType<typeof useFormattersRef> | undefined
  let search: ReturnType<typeof useSearchRef> | undefined

  const data = useApiRef<R, T>(
    path,
    options,
    reactivity,
    conditions,
    transformation,
    unmounted
  )

  if (props.formatters) {
    formatters = useFormattersRef(
      data.data as ComputedRef<R>,
      props.formatters
    )
  }

  return {
    get list() {
      if (formatters) {
        return formatters.listFormat
      }

      return data.data
    },

    get data() {
      return data.data
    },
    get starting() {
      return data.starting
    },
    get loading() {
      return data.loading
    },
    get reading() {
      return data.reading
    }
  }
}
