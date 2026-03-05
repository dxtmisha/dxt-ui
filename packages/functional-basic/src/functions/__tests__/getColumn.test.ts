import { describe, it, expect } from 'vitest'
import { getColumn } from '../getColumn'

describe('getColumn', () => {
  it('should return an array of values for a specific column from an array of objects', () => {
    const data = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 35 }
    ]

    expect(getColumn(data, 'name')).toEqual(['Alice', 'Bob', 'Charlie'])
    expect(getColumn(data, 'id')).toEqual([1, 2, 3])
  })

  it('should return undefined for missing properties in some objects', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2 },
      { id: 3, name: 'Charlie' }
    ]

    expect(getColumn(data, 'name')).toEqual(['Alice', undefined, 'Charlie'])
  })

  it('should work with an object acting as a dictionary/map', () => {
    const obj = {
      user1: { name: 'Alice', role: 'admin' },
      user2: { name: 'Bob', role: 'user' }
    }

    // @ts-ignore - testing object map behavior since forEach supports ObjectOrArray
    expect(getColumn(obj, 'name')).toEqual(['Alice', 'Bob'])
  })

  it('should return an empty array if input array is empty', () => {
    const data: any[] = []
    expect(getColumn(data, 'name')).toEqual([])
  })
})
