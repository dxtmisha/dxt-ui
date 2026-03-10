import { getExactSearchExp } from '../functions/getExactSearchExp'
import { getSearchExp } from '../functions/getSearchExp'

import type { SearchListItem } from './SearchListItem'
import type { SearchListOptions } from './SearchListOptions'

export class SearchListMatcher {
  protected matcher: RegExp | undefined

  constructor(
    protected item: SearchListItem,
    protected options: SearchListOptions
  ) {
    this.initMatcher()
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
