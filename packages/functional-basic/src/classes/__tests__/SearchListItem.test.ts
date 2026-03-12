import { describe, expect, it } from 'vitest'
import { SearchListItem } from '../SearchListItem'
import { SearchListOptions } from '../SearchListOptions'

describe('SearchListItem', () => {
  it('should initialize correctly and get value', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('test', options)

    expect(item.get()).toBe('test')
    expect(item.is()).toBe(true)
    expect(item.isSearch()).toBe(true) // length 4 >= limit 2
  })

  it('should handle empty or undefined values', () => {
    const options = new SearchListOptions()
    let item = new SearchListItem(undefined, options)

    expect(item.get()).toBe('')
    expect(item.is()).toBe(false)
    expect(item.isSearch()).toBe(false)

    item = new SearchListItem('', options)
    expect(item.get()).toBe('')
    expect(item.is()).toBe(false)
    expect(item.isSearch()).toBe(false)
  })

  it('should correctly evaluate isSearch based on the options limit', () => {
    const options = new SearchListOptions({ limit: 4 })
    const item = new SearchListItem('abc', options)

    // Length 3 < limit 4
    expect(item.is()).toBe(true)
    expect(item.isSearch()).toBe(false)
  })

  it('should update value correctly', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('test', options)

    item.set('new')
    expect(item.get()).toBe('new')

    item.set(undefined)
    expect(item.get()).toBe('')
    expect(item.is()).toBe(false)
  })
})
