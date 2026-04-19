import { addTagHighlightMatch } from '../functions/addTagHighlightMatch'
import { anyToString } from '../functions/anyToString'
import { getItemByPath } from '../functions/getItemByPath'
import { isFilled } from '../functions/isFilled'

import type { SearchListItem } from './SearchListItem'
import type { SearchListOptions } from './SearchListOptions'
import type { SearchCache, SearchCacheItem, SearchColumns, SearchFormatItem, SearchFormatList, SearchItem, SearchListValue } from '../types/searchTypes'

/**
 * Class for managing and formatting the search data list and its cache.
 *
 * Класс для управления и форматирования списка данных поиска и его кэша.
 */
export class SearchListData<
  T extends SearchItem,
  K extends SearchColumns<T>
> {
  protected listCache?: SearchCache<T>

  /**
   * Constructor for SearchListData.
   *
   * Конструктор для SearchListData.
   * @param list original list of items/ исходный список элементов
   * @param columns columns to search in/ столбцы для поиска
   * @param item current search item state/ текущее состояние элемента поиска
   * @param options search options/ опции поиска
   */
  constructor(
    protected list: SearchListValue<T>,
    protected columns: K | undefined,
    protected item: SearchListItem,
    protected options: SearchListOptions
  ) {
  }

  /**
   * Checks if both list and columns are provided.
   *
   * Проверяет, предоставлены ли и список, и столбцы.
   * @returns boolean indicating if ready for column-based search/ логическое значение, указывающее на готовность к поиску по столбцам
   */
  is(): this is this & { list: T[], columns: string[] } {
    return Boolean(
      this.list
      && this.columns
    )
  }

  /**
   * Checks if the list is provided.
   *
   * Проверяет, предоставлен ли список.
   * @returns boolean/ логическое значение
   */
  isList(): this is this & { list: T[] } {
    return Boolean(this.list)
  }

  /**
   * Returns the original list.
   *
   * Возвращает исходный список.
   * @returns list value/ значение списка
   */
  getList(): SearchListValue<T> {
    return this.list
  }

  /**
   * Returns the search columns.
   *
   * Возвращает столбцы поиска.
   * @returns columns or undefined/ столбцы или undefined
   */
  getColumns(): K | undefined {
    return this.columns
  }

  /**
   * Gets the search cache, initializing it if necessary.
   *
   * Получает кэш поиска, инициализируя его при необходимости.
   * @returns search cache/ кэш поиска
   */
  protected getCache(): SearchCache<T> {
    if (!this.listCache) {
      this.initCache()
    }

    return this.listCache ?? []
  }

  /**
   * Sets a new list and regenerates the cache.
   *
   * Устанавливает новый список и регенерирует кэш.
   * @param list new list/ новый список
   * @returns this instance/ данный экземпляр
   */
  setList(list: SearchListValue<T>): this {
    this.list = list
    this.resetCache()

    return this
  }

  /**
   * Sets new search columns and regenerates the cache.
   *
   * Устанавливает новые столбцы поиска и регенерирует кэш.
   * @param columns new columns/ новые столбцы
   * @returns this instance/ данный экземпляр
   */
  setColumns(columns?: SearchColumns<T>): this {
    this.columns = columns as K
    this.resetCache()

    return this
  }

  /**
   * Finds a cached item corresponding to the given original item.
   *
   * Находит кэшированный элемент, соответствующий данному исходному элементу.
   * @param item original item/ исходный элемент
   * @returns cache item or undefined/ кэшированный элемент или undefined
   */
  findCacheItem(item: T): SearchCacheItem<T> | undefined {
    return this.getCache().find(cache => cache.item === item)
  }

  /**
   * Iterates over the cached list and executes a callback for each item.
   *
   * Перебирает кэшированный список и выполняет обратный вызов для каждого элемента.
   * @param callback function to execute for each item/ функция для выполнения для каждого элемента
   * @returns formatted list/ отформатированный список
   */
  forEach(
    callback: (
      item: SearchCacheItem<T>['item'],
      value: SearchCacheItem<T>['value']
    ) => SearchFormatItem<T, K> | undefined
  ): SearchFormatList<T, K> {
    const list: SearchFormatList<T, K> = []

    if (this.isList()) {
      this.getCache().forEach((cache) => {
        const item = callback(
          cache.item,
          cache.value
        )

        if (item) {
          list.push(item)
        }
      })
    }

    return list
  }

  /**
   * Converts a single item to a formatted item with highlighted matches if selected.
   *
   * Преобразует один элемент в отформатированный элемент с выделенными совпадениями, если он выбран.
   * @param item original item/ исходный элемент
   * @param selection whether the item matches the search and should be highlighted/ совпадает ли элемент с поиском и должен ли он быть выделен
   * @returns formatted item/ отформатированный элемент
   */
  toFormatItem(
    item: T,
    selection: boolean
  ): SearchFormatItem<T, K> {
    const format: Record<string, string> = {}

    if (this.columns) {
      this.columns.forEach((column) => {
        const name = this.getColumnName(column)
        const value = getItemByPath(item, column)

        format[name] = isFilled(value) && selection
          ? this.addTag(value)
          : anyToString(value)
      })
    }

    return {
      ...item,
      ...format,
      searchActive: selection
    }
  }

  /**
   * Formats a column path to a camelCase property name with a 'Search' suffix.
   *
   * Форматирует путь к столбцу в имя свойства camelCase с суффиксом 'Search'.
   * @param column column path/ путь к столбцу
   * @returns property name/ имя свойства
   */
  protected getColumnName(column: string): string {
    return column.replace(
      /\.([a-z0-9])/ig,
      (_: string, char: string) => char.toUpperCase()
    ) + 'Search'
  }

  /**
   * Adds highlight tags to the given value based on the current search value.
   *
   * Добавляет теги выделения к данному значению на основе текущего значения поиска.
   * @param value value to highlight/ значение для выделения
   * @returns highlighted string/ выделенная строка
   */
  protected addTag(value: any): string {
    return addTagHighlightMatch(
      anyToString(value),
      this.item.get(),
      this.options.getClassName()
    )
  }

  /**
   * Generates a search cache for the current list and columns.
   *
   * Генерирует кэш поиска для текущего списка и столбцов.
   * @returns search cache/ кэш поиска
   */
  protected generateCache(): SearchCache<T> {
    if (!this.isList()) {
      return []
    }

    const cache: SearchCache<T> = []

    for (const item of this.list) {
      let valueAll = ''

      if (this.columns) {
        for (const column of this.columns) {
          const value = getItemByPath(item, column)

          if (isFilled(value)) {
            valueAll += ` ${anyToString(value)}`
          }
        }
      }

      cache.push({
        item,
        value: valueAll
      })
    }

    return cache
  }

  /**
   * Initializes the search cache.
   *
   * Инициализирует кэш поиска.
   * @returns void
   */
  protected initCache(): void {
    this.listCache = this.generateCache()
  }

  /**
   * Resets the search cache.
   *
   * Сбрасывает кэш поиска.
   * @returns void
   */
  protected resetCache(): void {
    this.listCache = undefined
  }
}
