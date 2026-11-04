/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { useHashRef } from '../useHashRef'

const hashMocks = {
  get: vi.fn(),
  set: vi.fn(),
  addWatch: vi.fn()
}
let domRuntime = true

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal() as Record<string, unknown>
  return {
    ...actual,
    isDomRuntime: () => domRuntime,
    Hash: {
      get: (name: string, defaultValue: unknown) => hashMocks.get(name, defaultValue),
      set: (name: string, value: unknown) => hashMocks.set(name, value),
      addWatch: (name: string, callback: unknown) => hashMocks.addWatch(name, callback)
    }
  }
})

describe('useHashRef', () => {
  beforeEach(() => {
    domRuntime = true
    vi.clearAllMocks()
  })

  it('should initialize with the value from `Hash.get`', () => {
    const name = 'test-hash-init'
    const defaultValue = 'default'
    hashMocks.get.mockReturnValue('value-from-hash')

    const item = useHashRef(name, defaultValue)

    expect(hashMocks.get).toHaveBeenCalledWith(name, defaultValue)
    expect(item.value).toBe('value-from-hash')
  })

  it('should support a factory function as defaultValue', () => {
    const name = 'test-hash-factory'
    const factory = () => 'factory-value'
    hashMocks.get.mockImplementation((_key, def) => (typeof def === 'function' ? def() : def))

    const item = useHashRef(name, factory)

    expect(hashMocks.get).toHaveBeenCalledWith(name, factory)
    expect(item.value).toBe('factory-value')
  })

  it('should update Hash when ref value changes', async () => {
    const name = 'test-hash-update'
    hashMocks.get.mockReturnValue('initial')

    const item = useHashRef(name)
    item.value = 'new-hash-value'

    await nextTick()

    expect(hashMocks.set).toHaveBeenCalledWith(name, 'new-hash-value')
  })

  it('should update ref when Hash changes (external change)', async () => {
    const name = 'test-hash-watch'
    let watchCallback: ((value: string) => void) | undefined
    hashMocks.addWatch.mockImplementation((_name: string, callback: (value: string) => void) => {
      watchCallback = callback
    })

    const item = useHashRef(name, 'initial')
    expect(hashMocks.addWatch).toHaveBeenCalled()

    watchCallback?.('updated-externally')
    await nextTick()

    expect(item.value).toBe('updated-externally')
  })

  it('should implement a singleton pattern per name', () => {
    const name = 'test-hash-single'

    const item1 = useHashRef(name, 'a')
    const item2 = useHashRef(name, 'b')

    expect(item1).toBe(item2)
    expect(hashMocks.get).toHaveBeenCalledTimes(1)
  })

  it.each([0, false, '', undefined] as const)('should handle boundary value %s', async (boundary) => {
    const name = `test-hash-boundary-${String(boundary)}`
    hashMocks.get.mockReturnValue('initial')

    const item = useHashRef<string | number | boolean | undefined>(name, 'initial')
    item.value = boundary
    await nextTick()

    expect(hashMocks.set).toHaveBeenCalledWith(name, boundary)
  })

  it('should skip DOM watchers during SSR when isDomRuntime is false', async () => {
    domRuntime = false
    const name = 'test-hash-ssr'
    hashMocks.get.mockReturnValue('ssr-initial')

    const item = useHashRef(name, 'ssr-initial')
    item.value = 'ssr-changed'
    await nextTick()

    expect(item.value).toBe('ssr-changed')
    expect(hashMocks.addWatch).not.toHaveBeenCalled()
    expect(hashMocks.set).not.toHaveBeenCalled()
  })
})
