import { describe, expect, it } from 'vitest'
import { SearchListItem } from '../SearchListItem'
import { SearchListMatcher } from '../SearchListMatcher'
import { SearchListOptions } from '../SearchListOptions'

describe('SearchListMatcher', () => {
  it('should initialize and match correctly with default options', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('test', options)
    const matcher = new SearchListMatcher(item, options)

    expect(matcher.is()).toBe(true)
    expect(matcher.get()).toBeInstanceOf(RegExp)

    // Default search is partial, case-insensitive
    expect(matcher.isSelection('This is a test case')).toBe(true)
    expect(matcher.isSelection('This is a TEST case')).toBe(true)
    expect(matcher.isSelection('No match here')).toBe(false)
  })

  it('should handle findExactMatch correctly', () => {
    const options = new SearchListOptions({ findExactMatch: true })
    const item = new SearchListItem('test', options)
    const matcher = new SearchListMatcher(item, options)

    // getExactSearchExp usually creates a stricter regex, e.g., for whole words or strict boundaries
    expect(matcher.is()).toBe(true)
    expect(matcher.isSelection('test')).toBe(true)
    expect(matcher.isSelection('TEST')).toBe(true)
  })

  it('should not match when the item is empty', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('', options)
    const matcher = new SearchListMatcher(item, options)

    expect(matcher.is()).toBe(false)
    expect(matcher.get()).toBeUndefined()
    expect(matcher.isSelection('test')).toBe(false)
  })

  it('should update matcher when called', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('first', options)
    const matcher = new SearchListMatcher(item, options)

    expect(matcher.isSelection('first')).toBe(true)
    expect(matcher.isSelection('second')).toBe(false)

    item.set('second')
    matcher.update() // Update RegExp based on a new item value

    expect(matcher.isSelection('first')).toBe(false)
    expect(matcher.isSelection('second')).toBe(true)
  })
})
