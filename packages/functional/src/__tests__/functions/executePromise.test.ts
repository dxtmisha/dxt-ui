import { describe, it, expect } from 'vitest'
import { executePromise } from '../../functions/executePromise'

describe('executePromise', () => {
  it('возвращает результат промиса', async () => {
    const res = await executePromise(() => Promise.resolve(7))
    expect(res).toBe(7)
  })

  it('возвращает результат обычной функции', async () => {
    const res = await executePromise(() => 3)
    expect(res).toBe(3)
  })

  it('возвращает значение напрямую', async () => {
    const res = await executePromise(2)
    expect(res).toBe(2)
  })
})
