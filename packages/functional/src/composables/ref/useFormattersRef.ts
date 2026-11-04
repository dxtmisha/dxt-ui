import { computed, type ComputedRef } from 'vue'
import {
  Formatters,
  type FormattersListProp,
  type FormattersOptionsList,
  type FormattersReturn
} from '@dxtmisha/functional-basic'

import { GeoRef } from '../../classes/ref/GeoRef'

import type { RefType } from '../../types/refTypes'

/** Return interface for useFormattersRef / Интерфейс возвращаемого значения для useFormattersRef */
export interface UseFormattersRef<
  List extends FormattersListProp = FormattersListProp,
  Options extends FormattersOptionsList = FormattersOptionsList
> {
  /** Formatted data list (ComputedRef) / Отформатированный список данных (ComputedRef) */
  listFormat: ComputedRef<FormattersReturn<List, Options>>

  /** Returns the count of records in the list (ComputedRef) / Возвращает количество записей в списке (ComputedRef) */
  length: ComputedRef<number>
}

/**
 * Composable for reactive formatting of data lists based on specified rules for each property.
 *
 * Композабл для реактивного форматирования списков данных на основе заданных правил для каждого свойства.
 * @template Options formatting configuration rules / правила конфигурации форматирования
 * @template List source data list or item type / тип исходного списка данных или элемента
 * @param list source data list (Ref or ComputedRef) / исходный список данных (Ref или ComputedRef)
 * @param options formatting settings for each property / настройки форматирования для каждого свойства
 * @returns reactive formatted list and record count / реактивный отформатированный список и количество записей
 */
export function useFormattersRef<
  Options extends FormattersOptionsList = FormattersOptionsList,
  List extends FormattersListProp = FormattersListProp
>(
  list: RefType<List | undefined>,
  options: Options
): UseFormattersRef<List, Options> {
  /** Formatters instance / Экземпляр форматтеров */
  const item = new Formatters<Options, List>(options)

  /** Formatted data list (ComputedRef) / Отформатированный список данных (ComputedRef) */
  const listFormat = computed<FormattersReturn<List, Options>>(() => {
    /** Track the locale used internally by Formatters / Отслеживание локали, используемой внутри Formatters */
    void GeoRef.getLocation().value

    return item
      .setList(list.value)
      .to()
  })

  /** Returns the count of records in the list (ComputedRef) / Возвращает количество записей в списке (ComputedRef) */
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
