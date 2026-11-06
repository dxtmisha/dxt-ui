import { describe, expect, it } from 'vitest'
import { SearchListItem } from '../SearchListItem'
import { SearchListOptions } from '../SearchListOptions'

describe('SearchListItem', () => {
  it('reads changes to the shared options without changing the original query', () => {
    const options = new SearchListOptions({ limit: 2 })
    const item = new SearchListItem('  abc  ', options)
    expect(item.isSearch()).toBe(true)
    options.setOptions({ limit: 4 })
    expect(item.isSearch()).toBe(false)
    expect(item.get()).toBe('  abc  ')
    options.setOptions({ limit: 0 })
    expect(item.isSearch()).toBe(true)
    item.set(' ')
    expect(item.isSearch()).toBe(false)
  })

  it('keeps queries independent between instances and resets an omitted value', () => {
    const options = new SearchListOptions()
    const first = new SearchListItem('first', options)
    const second = new SearchListItem('second', options)
    first.set()
    expect(first.get()).toBe('')
    expect(first.isSearch()).toBe(false)
    expect(second.get()).toBe('second')
    expect(second.isSearch()).toBe(true)
  })
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
