/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { useHashRef } from '../useHashRef'

// Mock Hash from functional-basic
const hashMocks = {
  get: vi.fn(),
  set: vi.fn(),
  addWatch: vi.fn()
}

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal() as any
  return {
    ...actual,
    Hash: {
      get: (name: string, defaultValue: any) => hashMocks.get(name, defaultValue),
      set: (name: string, value: any) => hashMocks.set(name, value),
      addWatch: (name: string, callback: any) => hashMocks.addWatch(name, callback)
    }
  }
})

describe('useHashRef', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // 'items' record is module-level, so use unique names
  })

  it('should initialize with the value from `Hash.get`', () => {
    const name = 'test-hash-init'
    const defaultValue = 'default'
    hashMocks.get.mockReturnValue('value-from-hash')

    const item = useHashRef(name, defaultValue)

    expect(hashMocks.get).toHaveBeenCalledWith(name, defaultValue)
    expect(item.value).toBe('value-from-hash')
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
    let watchCallback: any
    hashMocks.addWatch.mockImplementation((_n, cb) => {
      watchCallback = cb
    })

    const item = useHashRef(name, 'initial')
    expect(hashMocks.addWatch).toHaveBeenCalled()

    watchCallback('updated-externally')
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
})
