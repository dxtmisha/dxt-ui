import { computed, type ComputedRef } from 'vue'
import {
  type FormattersOptionsList,
  type FormattersReturn,
  type ApiData,
  type ArrayToItem,
  type SearchColumns,
  type SearchFormatList,
  type FormattersListColumns
} from '@dxtmisha/functional-basic'

import { useApiRef } from './useApiRef'
import { useFormattersRef } from './useFormattersRef'
import { useSearchRef } from './useSearchRef'

import type { ApiManagementGet, ApiManagementSearch, ApiManagementValue } from '../../types/apiTypes'

export function useApiManagementRef<
  Return extends ApiManagementValue,
  FormattersOptions extends FormattersOptionsList,
  Type extends ApiManagementValue = Return,
  Item extends ArrayToItem<Return> = ArrayToItem<Return>,
  ItemFormatters extends FormattersListColumns<Item, FormattersOptions>[number] = FormattersListColumns<Item, FormattersOptions>[number],
  Columns extends SearchColumns<ItemFormatters> = []
>(
  propsGet: ApiManagementGet<Return, Type>,
  formattersOptions?: FormattersOptions,
  searchOptions?: ApiManagementSearch<Item, Columns>
) {
  const {
    path,
    options,
    reactivity,
    conditions,
    transformation,
    unmounted,
    skeleton
  } = propsGet

  let formatters: ReturnType<typeof useFormattersRef<FormattersOptions, Return>> | undefined
  let search: ReturnType<typeof useSearchRef<Item, Columns>> | undefined

  const request = useApiRef<Return, Type>(
    path,
    options,
    reactivity,
    conditions,
    transformation,
    unmounted
  )

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

  return {
    get list(): ComputedRef<
      typeof search extends undefined ? (
        typeof formatters extends undefined ? (ApiData<Return> | undefined) : FormattersReturn<Return, FormattersOptions>
      ) : SearchFormatList<typeof formatters extends undefined ? Item : ItemFormatters, Columns>
    > {
      if (
        search
        && Array.isArray(request.data.value)
      ) {
        return search.listSearch as any
      }

      if (formatters) {
        return formatters.listFormat as any
      }

      return data.value as any
    },
    get data() {
      return request.data
    },

    get length() {
      if (search) {
        return search.length
      }

      return request.length
    },
    lengthData: request.length,

    starting: request.starting,
    loading: request.loading,
    reading: request.reading,

    reset: request.reset,
    abort: request.abort
  }
}
