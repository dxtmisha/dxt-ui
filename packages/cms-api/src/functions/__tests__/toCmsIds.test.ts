import { describe, expect, it } from 'vitest'
import { toCmsIds } from '../toCmsIds'

describe('toCmsIds', () => {
  it('filters out invalid values and deduplicates positive safe integers', () => {
    expect(toCmsIds()).toEqual([])
    expect(toCmsIds([])).toEqual([])
    expect(toCmsIds([0, -1, 1.5, Number.NaN, Infinity, '2', null, undefined])).toEqual([])
    expect(toCmsIds([3, 1, 3, -5, 2, 1, 0, 2.5])).toEqual([3, 1, 2])
  })
})
