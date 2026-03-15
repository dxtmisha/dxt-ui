import { computed } from 'vue'
import {
  Formatters,
  type FormattersList,
  type FormattersListColumns,
  type FormattersListItem,
  type FormattersOptionsList
} from '@dxtmisha/functional-basic'

import type { RefType } from '../../types/refTypes'

/**
 * Composable for handling data formatting logic with reactive data.
 *
 * Композабл для управления логикой форматирования данных с реактивными данными.
 * @param list list of items for formatting / список элементов для форматирования
 * @param options formatting options / настройки форматирования
 */
export function useFormattersRef<
  Item extends FormattersListItem,
  Options extends FormattersOptionsList,
  List extends FormattersList<Item> = FormattersList<Item>
>(
  list: RefType<List | Item>,
  options: Options
) {
  const item = new Formatters<Item, Options, List>(options)

  return {
    /**
     * Formatted list of items /
     * Форматированный список элементов
     */
    get listFormat() {
      return computed<FormattersListColumns<Item, Options>>(() => {
        return item
          .setList(list.value)
          .to()
      })
    }
  }
}
