import { type Ref } from 'vue'

import type { RefType } from '../../types/refTypes'
import type { SearchColumns, SearchItem } from '../../types/searchTypes'

export function useSearch<
  T extends SearchItem,
  K extends SearchColumns<T>
>(
  list: RefType<T[] | undefined> | (() => RefType<T[] | undefined>),
  columns: K,
  value?: Ref<string>,
  options?: SearchOptions
) {

}
