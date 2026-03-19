import { describe, it, expect, beforeEach } from 'vitest'
import { toNumberByMax } from '../toNumberByMax'
import { Geo } from '../../classes/Geo'

describe('toNumberByMax', () => {
  beforeEach(() => {
    // Reset Geo to a known state
    Geo.set('en-US')
  })

  it('should return the number if below or equal to max', () => {
    expect(toNumberByMax(50, 100)).toBe(50)
    expect(toNumberByMax(100, 100)).toBe(100)
  })

  it('should return max+ string if value exceeds max', () => {
    expect(toNumberByMax(150, 100)).toBe('100+')
  })

  it('should handle formatting', () => {
    expect(toNumberByMax(1000, 5000, true)).toBe('1,000')
  })

  it('should handle formatting with max+', () => {
    expect(toNumberByMax(1500, 1000, true)).toBe('1,000+')
  })
})
