import type { SearchOptions } from '../types/searchTypes'

export class SearchListOptions {
  constructor(
    protected options?: SearchOptions
  ) { }

  getOptions(): SearchOptions {
    return this.options || {}
  }

  getLimit(): number {
    return this.getOptions().limit ?? 2
  }

  getReturnEverything(): boolean {
    return this.getOptions().returnEverything ?? false
  }

  getDelay(): number {
    return this.getOptions().delay ?? 0
  }

  getFindExactMatch(): boolean {
    return this.getOptions().findExactMatch ?? false
  }

  getClassName(): string {
    return this.getOptions().classSearchName ?? 'sys-search-selection'
  }

  setOptions(options: SearchOptions): this {
    this.options = options
    return this
  }
}
