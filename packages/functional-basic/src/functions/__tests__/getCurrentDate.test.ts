import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getCurrentDate } from '../getCurrentDate'

describe('getCurrentDate', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    // Устанавливаем фиксированную дату: 15 октября 2023, 14:30:45
    // new Date(year, monthIndex, day, hours, minutes, seconds)
    vi.setSystemTime(new Date(2023, 9, 15, 14, 30, 45))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should return datetime by default', () => {
    const result = getCurrentDate()
    // Ожидаем формат YYYY-MM-DDTHH:mm:ss+ZZ:ZZ
    expect(result).toMatch(/^2023-10-15T14:30:45[+-]\d{2}:\d{2}$/)
  })

  it('should return date only', () => {
    const result = getCurrentDate('date')
    expect(result).toBe('2023-10-15')
  })

  it('should return time only', () => {
    const result = getCurrentDate('time')
    // Ожидаем формат THH:mm:ss+ZZ:ZZ
    expect(result).toMatch(/^T14:30:45[+-]\d{2}:\d{2}$/)
  })

  it('should return year-month', () => {
    const result = getCurrentDate('year-month')
    expect(result).toBe('2023-10')
  })
})
