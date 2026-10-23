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

    expect(matcher.isSelection('This is a test case')).toBe(true)
    expect(matcher.isSelection('This is a TEST case')).toBe(true)
    expect(matcher.isSelection('No match here')).toBe(false)
  })

  it('should handle findExactMatch correctly', () => {
    const options = new SearchListOptions({ findExactMatch: true })
    const item = new SearchListItem('test case', options)
    const matcher = new SearchListMatcher(item, options)

    expect(matcher.is()).toBe(true)
    expect(matcher.isSelection('This is a test case example')).toBe(true)
    expect(matcher.isSelection('This is a TEST CASE example')).toBe(true)
    expect(matcher.isSelection('test something else case')).toBe(false)
  })

  it('should not match when the item is empty or whitespace-only', () => {
    const options = new SearchListOptions()
    const emptyItem = new SearchListItem('', options)
    const emptyMatcher = new SearchListMatcher(emptyItem, options)

    expect(emptyMatcher.is()).toBe(false)
    expect(emptyMatcher.get()).toBeUndefined()
    expect(emptyMatcher.isSelection('test')).toBe(false)

    const whitespaceItem = new SearchListItem('   ', options)
    const whitespaceMatcher = new SearchListMatcher(whitespaceItem, options)

    expect(whitespaceMatcher.is()).toBe(false)
    expect(whitespaceMatcher.get()).toBeUndefined()
    expect(whitespaceMatcher.isSelection('   ')).toBe(false)
  })

  it('should update matcher when item value or options change', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('first', options)
    const matcher = new SearchListMatcher(item, options)

    expect(matcher.isSelection('first')).toBe(true)
    expect(matcher.isSelection('second')).toBe(false)

    item.set('second')
    matcher.update()

    expect(matcher.isSelection('first')).toBe(false)
    expect(matcher.isSelection('second')).toBe(true)

    item.set(undefined)
    matcher.update()
    expect(matcher.is()).toBe(false)
    expect(matcher.isSelection('second')).toBe(false)
  })

  it('should safely handle regex metacharacters and Unicode text', () => {
    const options = new SearchListOptions()
    const item = new SearchListItem('price ($100+)', options)
    const matcher = new SearchListMatcher(item, options)

    expect(matcher.isSelection('Total price ($100+) today')).toBe(true)

    item.set('Привет мир')
    matcher.update()
    expect(matcher.isSelection('Сообщение: привет всем и мир')).toBe(true)
  })
})
