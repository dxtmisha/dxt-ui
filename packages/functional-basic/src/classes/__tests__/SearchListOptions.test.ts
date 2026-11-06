import { describe, expect, it } from 'vitest'
import { SearchListOptions } from '../SearchListOptions'

describe('SearchListOptions', () => {
  it('preserves explicit zero, false and an empty class name', () => {
    const options = new SearchListOptions({
      limit: 0,
      delay: 0,
      returnEverything: false,
      findExactMatch: false,
      classSearchName: ''
    })

    expect(options.getLimit()).toBe(0)
    expect(options.getDelay()).toBe(0)
    expect(options.getReturnEverything()).toBe(false)
    expect(options.getFindExactMatch()).toBe(false)
    expect(options.getClassName()).toBe('')
  })

  it('replaces rather than merges options and keeps the supplied reference', () => {
    const initial = { limit: 3, delay: 500 }
    const options = new SearchListOptions(initial)
    const independent = new SearchListOptions()

    expect(options.getOptions()).toBe(initial)
    initial.limit = 4
    expect(options.getLimit()).toBe(4)
    options.setOptions({ limit: 1 })
    expect(options.getDelay()).toBe(0)
    expect(independent.getLimit()).toBe(2)
    expect(options.setOptions()).toBe(options)
    expect(options.getLimit()).toBe(2)
  })

  it('should initialize with default options', () => {
    const options = new SearchListOptions()

    expect(options.getOptions()).toEqual({})
    expect(options.getLimit()).toBe(2)
    expect(options.getReturnEverything()).toBe(false)
    expect(options.getDelay()).toBe(0)
    expect(options.getFindExactMatch()).toBe(false)
    expect(options.getClassName()).toBe('sys-search-selection')
  })

  it('should initialize with provided options', () => {
    const options = new SearchListOptions({
      limit: 3,
      returnEverything: true,
      delay: 500,
      findExactMatch: true,
      classSearchName: 'custom-class'
    })

    expect(options.getOptions()).toEqual({
      limit: 3,
      returnEverything: true,
      delay: 500,
      findExactMatch: true,
      classSearchName: 'custom-class'
    })
    expect(options.getLimit()).toBe(3)
    expect(options.getReturnEverything()).toBe(true)
    expect(options.getDelay()).toBe(500)
    expect(options.getFindExactMatch()).toBe(true)
    expect(options.getClassName()).toBe('custom-class')
  })

  it('should update options correctly and return this for chaining', () => {
    const options = new SearchListOptions()

    const returnValue = options.setOptions({ limit: 4, delay: 100 })

    expect(returnValue).toBe(options)
    expect(options.getLimit()).toBe(4)
    expect(options.getDelay()).toBe(100)
    expect(options.getReturnEverything()).toBe(false)

    options.setOptions(undefined)
    expect(options.getOptions()).toEqual({})
    expect(options.getLimit()).toBe(2)
  })
})
