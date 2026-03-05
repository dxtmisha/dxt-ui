import { describe, it, expect } from 'vitest'
import { executePromise } from '../executePromise'

describe('executePromise', () => {
  it('should execute a function returning a Promise and resolve it', async () => {
    const fn = async () => 'async result'
    const result = await executePromise(fn)
    expect(result).toBe('async result')
  })

  it('should execute a synchronous function returning a value and wrap it', async () => {
    const fn = () => 'sync result'
    const result = await executePromise(fn)
    expect(result).toBe('sync result')
  })

  it('should resolve a raw Promise if passed directly', async () => {
    const promise = Promise.resolve('raw promise')
    const result = await executePromise(promise)
    expect(result).toBe('raw promise')
  })

  it('should return a raw static value directly wrapped in a resolved promise implicitly', async () => {
    const result = await executePromise('raw string')
    expect(result).toBe('raw string')
  })

  it('should handle rejection properly', async () => {
    const fn = async () => {
      throw new Error('Test error')
    }
    await expect(executePromise(fn)).rejects.toThrow('Test error')
  })
})
