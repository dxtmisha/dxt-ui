import { describe, expect, it } from 'vitest'
import { toIds } from '../toIds'

describe('toIds', () => {
  it('filters out invalid values and deduplicates positive safe integers', () => {
    expect(toIds()).toEqual([])
    expect(toIds([])).toEqual([])
    expect(toIds([0, -1, 1.5, Number.NaN, Infinity, '2', null, undefined])).toEqual([])
    expect(toIds([3, 1, 3, -5, 2, 1, 0, 2.5])).toEqual([3, 1, 2])
  })
})
