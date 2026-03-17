import { computed } from 'vue'
import {
  Formatters,
  type FormattersListProp,
  type FormattersOptionsList,
  type FormattersReturn
} from '@dxtmisha/functional-basic'

import type { RefType } from '../../types/refTypes'

/**
 * Composable for reactive formatting of data lists based on specified rules for each property. /
 * Композабл для реактивного форматирования списков данных на основе заданных правил для каждого свойства.
 * @param list source data list (Ref or ComputedRef) / исходный список данных (Ref или ComputedRef)
 * @param options formatting settings for each property / настройки форматирования для каждого свойства
 */
export function useFormattersRef<
  Options extends FormattersOptionsList = FormattersOptionsList,
  List extends FormattersListProp = FormattersListProp
>(
  list: RefType<List | undefined>,
  options: Options
) {
  const item = new Formatters<Options, List>(options)

  const listFormat = computed<FormattersReturn<List, Options>>(() => {
    return item
      .setList(list.value)
      .to()
  })

  const length = computed<number>(() => {
    return item
      .setList(list.value)
      .length()
  })

  return {
    /**
     * Formatted data list (ComputedRef) /
     * Отформатированный список данных (ComputedRef)
     */
    listFormat,

    /**
     * Returns the count of records in the list (ComputedRef) /
     * Возвращает количество записей в списке (ComputedRef)
     */
    length
  }
}
