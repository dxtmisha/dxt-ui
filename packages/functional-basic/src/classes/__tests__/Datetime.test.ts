import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { Datetime } from '../Datetime'

describe('Datetime', () => {
  let dateObj: Date

  beforeEach(() => {
    // Fixed date for predictable outputs: 2024-03-15T10:30:00.000Z
    dateObj = new Date('2024-03-15T10:30:00Z')
    vi.useFakeTimers()
    vi.setSystemTime(dateObj)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should initialize with the current date if no date is provided', () => {
    const dt = new Datetime()
    expect(dt.getDate().getTime()).toBe(dateObj.getTime())
  })

  it('should initialize with the provided date string', () => {
    const dt = new Datetime('2023-01-01 12:00:00')
    expect(dt.getYear()).toBe(2023)
  })

  it('should get year, month, day, hour, minute, second correctly', () => {
    const dt = new Datetime(dateObj)
    expect(dt.getYear()).toBe(dateObj.getFullYear())
    expect(dt.getMonth()).toBe(dateObj.getMonth() + 1)
    expect(dt.getDay()).toBe(dateObj.getDate())
    expect(dt.getMinute()).toBe(dateObj.getMinutes())
  })

  it('should set year, month, day, hour, minute, second correctly', () => {
    const dt = new Datetime()
    dt.setYear(2025)
    expect(dt.getYear()).toBe(2025)

    dt.setMonth(5)
    expect(dt.getMonth()).toBe(5)

    dt.setDay(10)
    expect(dt.getDay()).toBe(10)
  })

  it('should move by year, month, day, hour, minute, second', () => {
    const dt = new Datetime(dateObj)

    const initialYear = dt.getYear()
    dt.moveByYear(2)
    expect(dt.getYear()).toBe(initialYear + 2)

    const initialMonth = dt.getMonth()
    dt.moveByMonth(2)
    expect(dt.getMonth()).toBe((initialMonth + 2 > 12) ? (initialMonth + 2) % 12 : (initialMonth + 2))

    const initialDay = dt.getDay()
    dt.moveByDay(5)
    expect(dt.getDay()).toBe(initialDay + 5)
  })

  it('should move to the first and last day of the month', () => {
    const dt = new Datetime(dateObj) // 2024-03-15

    dt.moveDayFirst()
    expect(dt.getDay()).toBe(1)

    dt.moveDayLast()
    // March has 31 days
    expect(dt.getDay()).toBe(31)
  })

  it('should format standard date and datetime string', () => {
    const dt = new Datetime(dateObj)
    dt.setType('date')
    const stdDate = dt.standard(false)
    expect(stdDate).toBe('2024-03-15')

    dt.setType('datetime')
    const stdDateTime = dt.standard(false)
    expect(stdDateTime).toContain('2024-03-15T')
  })

  it('should handle cloning correctly', () => {
    const dt = new Datetime(dateObj)
    const cloned = dt.cloneClass()

    expect(cloned).not.toBe(dt)
    expect(cloned.getDate().getTime()).toBe(dt.getDate().getTime())
    expect(cloned.getType()).toBe(dt.getType())
  })
})
