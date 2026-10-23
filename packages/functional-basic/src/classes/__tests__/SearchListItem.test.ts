import { describe, expect, it } from 'vitest'
import { SearchListItem } from '../SearchListItem'
import { SearchListOptions } from '../SearchListOptions'

describe('SearchListItem', () => {
  it('should initialize correctly and get value', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('test', options)

    expect(item.get()).toBe('test')
    expect(item.is()).toBe(true)
    expect(item.isSearch()).toBe(true)
  })

  it('should handle empty, undefined, or whitespace-only values as inactive', () => {
    const options = new SearchListOptions()
    let item = new SearchListItem(undefined, options)

    expect(item.get()).toBe('')
    expect(item.is()).toBe(false)
    expect(item.isSearch()).toBe(false)

    item = new SearchListItem('', options)
    expect(item.get()).toBe('')
    expect(item.is()).toBe(false)
    expect(item.isSearch()).toBe(false)

    item = new SearchListItem('   ', options)
    expect(item.get()).toBe('   ')
    expect(item.is()).toBe(false)
    expect(item.isSearch()).toBe(false)

    item = new SearchListItem('\t\n ', options)
    expect(item.is()).toBe(false)
    expect(item.isSearch()).toBe(false)
  })

  it('should evaluate isSearch based on trimmed value length against options limit', () => {
    const options = new SearchListOptions({ limit: 4 })
    const item = new SearchListItem('abc', options)

    expect(item.is()).toBe(true)
    expect(item.isSearch()).toBe(false)

    item.set('  abc  ')
    expect(item.is()).toBe(true)
    expect(item.isSearch()).toBe(false)

    item.set('  abcd  ')
    expect(item.is()).toBe(true)
    expect(item.isSearch()).toBe(true)
  })

  it('should update value correctly and return this for chaining', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('test', options)

    const returnValue = item.set('new')
    expect(returnValue).toBe(item)
    expect(item.get()).toBe('new')

    item.set(undefined)
    expect(item.get()).toBe('')
    expect(item.is()).toBe(false)
  })
})
