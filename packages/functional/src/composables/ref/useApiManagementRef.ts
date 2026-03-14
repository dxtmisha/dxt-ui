import { useApiRef } from './useApiRef'
import { useFormattersRef } from './useFormattersRef'

import type { ApiManagementProps } from '../../types/apiTypes'

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

  const data = useApiRef<R, T>(
    path,
    options,
    reactivity,
    conditions,
    transformation,
    unmounted
  )

  const formatters = props.formatters ? useFormattersRef(data.data, props.formatters) : undefined

  return {
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
