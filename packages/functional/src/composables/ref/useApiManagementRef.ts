import { computed, type ComputedRef } from 'vue'
import {
  FormattersType,
  type FormattersOptionsList,
  type FormattersReturn,
  type ApiData,
  type ArrayToItem,
  type SearchColumns
} from '@dxtmisha/functional-basic'

import { useApiRef } from './useApiRef'
import { useFormattersRef } from './useFormattersRef'
import type { useSearchRef } from './useSearchRef'

import type { ApiManagementGet, ApiManagementValue } from '../../types/apiTypes'

export function useApiManagementRef<
  Return extends ApiManagementValue,
  FormattersOptions extends FormattersOptionsList,
  Type extends ApiManagementValue = Return,
  Item extends ArrayToItem<Return> = ArrayToItem<Return>
>(
  propsGet: ApiManagementGet<Return, Type>,
  formattersOptions?: FormattersOptions
) {
  const {
    path,
    options,
    reactivity,
    conditions,
    transformation,
    unmounted
  } = propsGet

  let formatters: ReturnType<typeof useFormattersRef<FormattersOptions, Return>> | undefined
  let search: ReturnType<typeof useSearchRef<Item, SearchColumns<Item>>> | undefined

  const data = useApiRef<Return, Type>(
    path,
    options,
    reactivity,
    conditions,
    transformation,
    unmounted
  )

  if (formattersOptions) {
    formatters = useFormattersRef<FormattersOptions, Return>(
      data.data as ComputedRef<Return>,
      formattersOptions
    )
  }

  return {
    get list(): ComputedRef<
      typeof formatters extends undefined
      ? (ApiData<Return> | undefined)
      : FormattersReturn<Return, FormattersOptions>
    > {
      if (formatters) {
        return formatters.listFormat
      }

      return data.data as any
    },
    get data() {
      return data.data
    },

    get length() {
      if (formatters) {
        return formatters.length
      }

      return data.length
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

type t = {
  name: string
  age: number
}

const {
  list
} = useApiManagementRef(
  {
    path: 'test'
  } as ApiManagementGet<t>,
  {
    age: {
      type: FormattersType.number
    }
  }
)

console.log(list.value?.)
