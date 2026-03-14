import { computed } from 'vue'
import {
  Formatters,
  type FormattersList,
  type FormattersListColumns,
  type FormattersListItem,
  type FormattersOptionsList
} from '@dxtmisha/functional-basic'

import type { RefType } from '../../types/refTypes'

export function useFormattersRef<
  Item extends FormattersListItem,
  Options extends FormattersOptionsList,
  List extends FormattersList<Item> = FormattersList<Item>
>(
  list: RefType<List>,
  options: Options
) {
  const item = new Formatters<Item, Options, List>(options)

  return {
    get listFormat() {
      return computed<FormattersListColumns<Item, Options>>(() => {
        return item
          .setList(list.value)
          .to()
      })
    }
  }
}
