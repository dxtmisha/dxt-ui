import { getExactSearchExp } from '../functions/getExactSearchExp'
import { getSearchExp } from '../functions/getSearchExp'

import type { SearchListItem } from './SearchListItem'
import type { SearchListOptions } from './SearchListOptions'

import type { SearchCacheItem } from '../types/searchTypes'

export class SearchListMatcher {
  protected matcher: RegExp | undefined

  constructor(
    protected item: SearchListItem,
    protected options: SearchListOptions
  ) {
    this.initMatcher()
  }

  is() {
    return Boolean(this.matcher)
  }

  isSelection(value: SearchCacheItem<any>['value']): boolean {
    if (!this.matcher) {
      return false
    }

    return Boolean(value.match(this.matcher))
  }

  get(): RegExp | undefined {
    return this.matcher
  }

  update(): void {
    this.initMatcher()
  }

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
