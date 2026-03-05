import { describe, it, expect } from 'vitest'
import { getItemByPath } from '../getItemByPath'

describe('getItemByPath', () => {
  it('should retrieve a top-level property', () => {
    const obj = { attr: 'value1' }
    expect(getItemByPath(obj, 'attr')).toBe('value1')
  })

  it('should retrieve a nested property using dot notation', () => {
    const obj = { nested: { deep: { id: '777' } } }
    expect(getItemByPath(obj, 'nested.deep.id')).toBe('777')
  })

  it('should return undefined if the property is undefined', () => {
    const obj = { valid: 'yes' }
    expect(getItemByPath(obj, 'invalid')).toBeUndefined()
  })

  it('should return undefined if deeply nested property is not found', () => {
    const obj = { level1: { level2: 'exists' } }
    expect(getItemByPath(obj, 'level1.levelX.level3')).toBeUndefined()
  })

  it('should work with arrays implicitly via string indexes', () => {
    const obj = { list: [{ name: 'first' }, { name: 'second' }] }
    expect(getItemByPath(obj, 'list.1.name')).toBe('second')
  })

  it('should handle empty paths gracefully', () => {
    const obj = { key: 'val' }
    expect(getItemByPath(obj, '')).toBeUndefined()
  })
})
