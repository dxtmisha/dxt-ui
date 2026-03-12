import type { SearchOptions } from '../types/searchTypes'

/**
 * Class for managing search list options.
 *
 * Класс для управления опциями списка поиска.
 */
export class SearchListOptions {
  /**
   * Constructor for SearchListOptions.
   *
   * Конструктор для SearchListOptions.
   * @param options search options/ опции поиска
   */
  constructor(
    protected options?: SearchOptions
  ) { }

  /**
   * Returns the current search options.
   *
   * Возвращает текущие опции поиска.
   * @returns search options/ опции поиска
   */
  getOptions(): SearchOptions {
    return this.options || {}
  }

  /**
   * Returns the minimum number of characters required to trigger a search.
   *
   * Возвращает минимальное количество символов, необходимых для запуска поиска.
   * @returns limit value/ значение лимита
   */
  getLimit(): number {
    return this.getOptions().limit ?? 2
  }

  /**
   * Returns whether to return all items even if they don't match the search query.
   *
   * Возвращает, следует ли возвращать все элементы, даже если они не соответствуют поисковому запросу.
   * @returns boolean value/ логическое значение
   */
  getReturnEverything(): boolean {
    return this.getOptions().returnEverything ?? false
  }

  /**
   * Returns the search delay in milliseconds.
   *
   * Возвращает задержку поиска в миллисекундах.
   * @returns delay value/ значение задержки
   */
  getDelay(): number {
    return this.getOptions().delay ?? 0
  }

  /**
   * Returns whether to perform an exact match search.
   *
   * Возвращает, следует ли выполнять поиск с точным совпадением.
   * @returns boolean value/ логическое значение
   */
  getFindExactMatch(): boolean {
    return this.getOptions().findExactMatch ?? false
  }

  /**
   * Returns the CSS class name used for highlighting matches.
   *
   * Возвращает имя класса CSS, используемое для выделения совпадений.
   * @returns class name/ имя класса
   */
  getClassName(): string {
    return this.getOptions().classSearchName ?? 'sys-search-selection'
  }

  /**
   * Sets new search options.
   *
   * Устанавливает новые опции поиска.
   * @param options search options/ опции поиска
   * @returns this instance/ данный экземпляр
   */
  setOptions(options: SearchOptions): this {
    this.options = options
    return this
  }
}
