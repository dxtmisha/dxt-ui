import { describe, expect, it } from 'vitest'
import { SearchListOptions } from '../SearchListOptions'

describe('SearchListOptions', () => {
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

  it('should update options correctly', () => {
    const options = new SearchListOptions()

    options.setOptions({ limit: 4, delay: 100 })

    expect(options.getLimit()).toBe(4)
    expect(options.getDelay()).toBe(100)
    expect(options.getReturnEverything()).toBe(false)
  })
})
