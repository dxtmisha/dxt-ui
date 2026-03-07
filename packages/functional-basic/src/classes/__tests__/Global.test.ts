// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'

// Global uses a module-level variable, so we need to isolate tests
// by re-importing the module each time via dynamic imports

describe('Global', () => {
  it('should store and retrieve a value', async () => {
    const { Global } = await import('../Global')
    Global.add({ myKey: 'hello', count: 42 })

    expect(Global.get('myKey')).toBe('hello')
    expect(Global.get('count')).toBe(42)
  })

  it('should only allow adding once (later calls are ignored)', async () => {
    const { Global } = await import('../Global')

    // Already added in the previous test (module is cached), so this is the second adding
    Global.add({ myKey: 'second' })

    // Value should still be the original
    expect(Global.get('myKey')).toBe('hello')
  })

  it('should return undefined for an unknown key', async () => {
    const { Global } = await import('../Global')
    const result = Global.get('nonExistentKey')
    expect(result).toBeFalsy()
  })

  it('get should return the typed value', async () => {
    const { Global } = await import('../Global')

    const count = Global.get<number>('count')
    expect(typeof count).toBe('number')
    expect(count).toBe(42)
  })
})
