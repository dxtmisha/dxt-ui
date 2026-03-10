import { SearchListData } from './SearchListData'
import { SearchListItem } from './SearchListItem'
import { SearchListMatcher } from './SearchListMatcher'
import { SearchListOptions } from './SearchListOptions'

import type { SearchCacheItem, SearchColumns, SearchItem, SearchListValue, SearchOptions } from '../types/searchTypes'

export class SearchList<
  T extends SearchItem,
  K extends SearchColumns<T>
> {
  protected options: SearchListOptions
  protected item: SearchListItem

  protected matcher: SearchListMatcher
  protected data: SearchListData<T, K>

  constructor(
    list: SearchListValue<T>,
    columns?: K,
    value?: string,
    options?: SearchOptions
  ) {
    this.options = new SearchListOptions(options)
    this.item = new SearchListItem(value, this.options)

    this.matcher = new SearchListMatcher(this.item, this.options)
    this.data = new SearchListData(list, columns, this.item, this.options)
  }

  getData(): SearchListData<T, K> {
    return this.data
  }

  getList(): SearchListValue<T> {
    return this.data.getList()
  }

  getColumns(): K | undefined {
    return this.data.getColumns()
  }

  getItem(): SearchListItem {
    return this.item
  }

  getValue(): string | undefined {
    return this.item.get()
  }

  getOptions(): SearchListOptions {
    return this.options
  }

  setList(list: SearchListValue<T>): this {
    this.data.setList(list)
    return this
  }

  setColumns(columns?: K): this {
    this.data.setColumns(columns)
    return this
  }

  setValue(value?: string): this {
    this.item.set(value)
    this.matcher.update()

    return this
  }

  setOptions(options: SearchOptions): this {
    this.options.setOptions(options)
    this.matcher.update()

    return this
  }

  to() {
    if (this.data.is()) {
      if (this.item.isSearch()) {
        return forEach(
          listCache.value,
          (item) => {
            if (isSelection(item)) {
              return toFormatItem(item.item, true)
            }

            if (returnEverything) {
              return toFormatItem(item.item, false)
            }
          }
        ) as SearchFormatList<T, K>
      }

      return forEach(listCache.value, item => toFormatItem(item.item, false))
    }

    return []
  }

  protected readonly callbackToSelection = (
    item: SearchCacheItem<T>['item'],
    value: SearchCacheItem<T>['value']
  ) => this.data.toFormatItem(item, false)

  protected readonly callbackToNone = (
    item: SearchCacheItem<T>['item'],
    _: SearchCacheItem<T>['value']
  ) => this.data.toFormatItem(item, false)
}
