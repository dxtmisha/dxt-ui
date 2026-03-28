import { describe, it, expect } from 'vitest'
import { sleep } from '../sleep'

describe('sleep', () => {
  it('should resolve after the specified number of milliseconds', async () => {
    const start = Date.now()
    const ms = 100
    await sleep(ms)
    const end = Date.now()
    const duration = end - start
    // We expect the duration to be at least ms, but allow some margin for timing inaccuracies
    expect(duration).toBeGreaterThanOrEqual(ms - 10)
  })

  it('should return a promise that resolves to void', async () => {
    const result = sleep(10)
    expect(result).toBeInstanceOf(Promise)
    await expect(result).resolves.toBeUndefined()
  })
})
