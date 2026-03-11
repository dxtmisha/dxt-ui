import { addTagHighlightMatch } from '../functions/addTagHighlightMatch'
import { anyToString } from '../functions/anyToString'
import { getItemByPath } from '../functions/getItemByPath'
import { isFilled } from '../functions/isFilled'

import type { SearchListItem } from './SearchListItem'
import type { SearchListOptions } from './SearchListOptions'
import type { SearchCache, SearchCacheItem, SearchColumns, SearchFormatItem, SearchFormatList, SearchItem, SearchListValue } from '../types/searchTypes'

export class SearchListData<
  T extends SearchItem,
  K extends SearchColumns<T>
> {
  protected listCache!: SearchCache<T>

  constructor(
    protected list: SearchListValue<T>,
    protected columns: K | undefined,
    protected item: SearchListItem,
    protected options: SearchListOptions
  ) {
    this.initCache()
  }

  is(): this is { list: T[], columns: string[] } {
    return Boolean(
      this.list
      && this.columns
    )
  }

  getList(): SearchListValue<T> {
    return this.list
  }

  getColumns(): K | undefined {
    return this.columns
  }

  setList(list: SearchListValue<T>): this {
    this.list = list
    this.initCache()

    return this
  }

  setColumns(columns?: K): this {
    this.columns = columns
    this.initCache()

    return this
  }

  findCacheItem(item: T) {
    return this.listCache.find(cache => cache.item === item)
  }

  forEach(
    callback: (
      item: SearchCacheItem<T>['item'],
      value: SearchCacheItem<T>['value']
    ) => SearchFormatItem<T, K> | undefined
  ) {
    const list: SearchFormatList<T, K> = []

    if (this.is()) {
      this.listCache.forEach((cache) => {
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

  toFormatItem(
    item: T,
    selection: boolean
  ) {
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

  protected getColumnName(column: string) {
    return column.replace(
      /\.([a-z0-9])/i,
      (_: string, char: string) => char.toUpperCase()
    ) + 'Search'
  }

  protected addTag(value: any) {
    return addTagHighlightMatch(
      anyToString(value),
      this.item.get(),
      this.options.getClassName()
    )
  }

  protected generateCache(): SearchCache<T> {
    if (!this.is()) {
      return []
    }

    const cache: SearchCache<T> = []

    for (const item of this.list) {
      let valueAll = ''

      for (const column of this.columns) {
        const value = getItemByPath(item, column)

        if (isFilled(value)) {
          valueAll += ` ${anyToString(value)}`
        }
      }

      cache.push({
        item,
        value: valueAll
      })
    }

    return cache
  }

  protected initCache() {
    this.listCache = this.generateCache()
  }
}
