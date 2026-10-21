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
    expect(toDate('20210105 14:20:30').getSeconds()).toBe(30)
    expect(toDate('2021-01-05').getDate()).toBe(5)
    expect(toDate('2021').getFullYear()).toBe(2021)
    expect(toDate('12:30:45').getSeconds()).toBe(45)
  })

  it('should handle null/undefined', () => {
    expect(toDate(undefined) instanceof Date).toBe(true)
  })

  it('should handle ISO 8601 strings with Z suffix', () => {
    const utcDate = toDate('2024-01-15T12:30:00Z')
    expect(isNaN(utcDate.getTime())).toBe(false)
    expect(utcDate.toISOString()).toBe('2024-01-15T12:30:00.000Z')

    const utcMsDate = toDate('2024-01-15T12:30:00.500Z')
    expect(utcMsDate.getUTCMilliseconds()).toBe(500)
    expect(utcMsDate.toISOString()).toBe('2024-01-15T12:30:00.500Z')
  })
})
