import { describe, it, expect } from 'vitest'
import { getRandomItem } from '../getRandomItem'

describe('getRandomItem', () => {
  it('should return a random element from an array', () => {
    const array = [1, 2, 3, 4, 5]
    const result = getRandomItem(array)
    expect(result).toBeDefined()
    expect(array).toContain(result)
  })

  it('should return the single element from a single-item array', () => {
    expect(getRandomItem(['only'])).toBe('only')
  })

  it('should return undefined for an empty array', () => {
    expect(getRandomItem([])).toBeUndefined()
  })

  it('should return a random value from an object', () => {
    const object = { a: 10, b: 20, c: 30 }
    const result = getRandomItem(object)
    expect(result).toBeDefined()
    expect(Object.values(object)).toContain(result)
  })

  it('should return undefined for an empty object', () => {
    expect(getRandomItem({})).toBeUndefined()
  })

  it('should return the scalar value itself if not an array or object', () => {
    expect(getRandomItem('test')).toBe('test')
    expect(getRandomItem(42)).toBe(42)
    expect(getRandomItem(true)).toBe(true)
  })

  it('should return undefined for undefined or null', () => {
    expect(getRandomItem(undefined)).toBeUndefined()
    expect(getRandomItem(null)).toBeUndefined()
  })
})
