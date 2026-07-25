/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { domContentLoaded } from '../domContentLoaded'

describe('domContentLoaded', () => {
  let originalReadyState: PropertyDescriptor | undefined

  beforeEach(() => {
    originalReadyState = Object.getOwnPropertyDescriptor(document, 'readyState')
  })

  afterEach(() => {
    if (originalReadyState) {
      Object.defineProperty(document, 'readyState', originalReadyState)
    } else {
      delete (document as any).readyState
    }
  })

  it('should execute callback immediately if document.readyState is not loading', async () => {
    Object.defineProperty(document, 'readyState', {
      configurable: true,
      get: () => 'complete'
    })

    const callback = vi.fn().mockReturnValue('loaded')
    const result = await domContentLoaded(callback)

    expect(callback).toHaveBeenCalledTimes(1)
    expect(result).toBe('loaded')
  })

  it('should execute callback immediately if document.readyState is interactive', async () => {
    Object.defineProperty(document, 'readyState', {
      configurable: true,
      get: () => 'interactive'
    })

    const callback = vi.fn().mockReturnValue('interactive result')
    const result = await domContentLoaded(callback)

    expect(callback).toHaveBeenCalledTimes(1)
    expect(result).toBe('interactive result')
  })

  it('should wait for DOMContentLoaded event when document.readyState is loading', async () => {
    Object.defineProperty(document, 'readyState', {
      configurable: true,
      get: () => 'loading'
    })

    const callback = vi.fn().mockReturnValue(42)
    const promise = domContentLoaded(callback)

    expect(callback).not.toHaveBeenCalled()

    // Dispatch DOMContentLoaded event
    document.dispatchEvent(new Event('DOMContentLoaded'))

    const result = await promise
    expect(callback).toHaveBeenCalledTimes(1)
    expect(result).toBe(42)
  })

  it('should handle async callback when event fires', async () => {
    Object.defineProperty(document, 'readyState', {
      configurable: true,
      get: () => 'loading'
    })

    const asyncCallback = vi.fn().mockImplementation(async () => 'async result')
    const promise = domContentLoaded(asyncCallback)

    document.dispatchEvent(new Event('DOMContentLoaded'))

    const result = await promise
    expect(asyncCallback).toHaveBeenCalledTimes(1)
    expect(result).toBe('async result')
  })
})
