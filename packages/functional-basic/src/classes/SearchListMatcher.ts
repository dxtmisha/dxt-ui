import { getExactSearchExp } from '../functions/getExactSearchExp'
import { getSearchExp } from '../functions/getSearchExp'

import type { SearchListItem } from './SearchListItem'
import type { SearchListOptions } from './SearchListOptions'

import type { SearchCacheItem } from '../types/searchTypes'

/**
 * Class responsible for matching search values against the search list data using regular expressions.
 *
 * Класс, отвечающий за сопоставление значений поиска с данными списка поиска с использованием регулярных выражений.
 */
export class SearchListMatcher {
  protected matcher: RegExp | undefined

  /**
   * Constructor for SearchListMatcher.
   *
   * Конструктор для SearchListMatcher.
   * @param item search item containing the current value/ элемент поиска, содержащий текущее значение
   * @param options search options/ опции поиска
   */
  constructor(
    protected item: SearchListItem,
    protected options: SearchListOptions
  ) {
    this.initMatcher()
  }

  /**
   * Checks if the matcher is initialized.
   *
   * Проверяет, инициализирован ли сопоставитель.
   * @returns boolean/ логическое значение
   */
  is(): boolean {
    return Boolean(this.matcher)
  }

  /**
   * Checks if the given value matches the current search expression.
   *
   * Проверяет, соответствует ли данное значение текущему поисковому выражению.
   * @param value value to check/ проверяемое значение
   * @returns boolean indicating a match/ логическое значение, указывающее на совпадение
   */
  isSelection(value: SearchCacheItem<any>['value']): boolean {
    if (!this.matcher) {
      return false
    }

    return this.matcher.test(value)
  }

  /**
   * Returns the current regular expression matcher.
   *
   * Возвращает текущий сопоставитель регулярных выражений.
   * @returns RegExp or undefined/ RegExp или undefined
   */
  get(): RegExp | undefined {
    return this.matcher
  }

  /**
   * Updates the matcher based on the current item value and options.
   *
   * Обновляет сопоставитель на основе текущего значения элемента и опций.
   * @returns void
   */
  update(): void {
    this.initMatcher()
  }

  /**
   * Initializes or resets the regular expression matcher.
   *
   * Инициализирует или сбрасывает сопоставитель регулярных выражений.
   * @returns void
   */
  protected initMatcher(): void {
    if (this.item.is()) {
      this.matcher = this.options.getFindExactMatch()
        ? getExactSearchExp(this.item.get())
        : getSearchExp(this.item.get())
    } else {
      this.matcher = undefined
    }
  }
}
