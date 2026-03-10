import type { SearchListOptions } from './SearchListOptions'

export class SearchListItem {
  constructor(
    protected value: string | undefined,
    protected options: SearchListOptions
  ) { }

  is(): this is { value: string } {
    return Boolean(this.value)
  }

  isSearch(): boolean {
    return this.is()
      && this.value.length >= this.options.getLimit()
  }

  get(): string {
    return this.value ?? ''
  }

  set(value?: string): this {
    this.value = value
    return this
  }
}
