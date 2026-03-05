import { describe, it, expect } from 'vitest'
import { toDate } from '../toDate'

describe('toDate', () => {
  it('should handle Date objects', () => {
    const d = new Date()
    expect(toDate(d)).toBe(d)
  })

  it('should handle timestamps', () => {
    const ts = 1609459200000 // 2021-01-01
    expect(toDate(ts).getFullYear()).toBe(2021)
  })

  it('should handle various string formats', () => {
    expect(toDate('20210105').getDate()).toBe(5)
    expect(toDate('2021-01').getMonth()).toBe(0)
    expect(toDate('12:30').getHours()).toBe(12)
  })

  it('should handle null/undefined', () => {
    expect(toDate(undefined) instanceof Date).toBe(true)
  })
})
