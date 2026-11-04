/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'

const storageMocks = {
  get: vi.fn((def: unknown) => (typeof def === 'function' ? def() : def)),
  set: vi.fn()
}

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal() as Record<string, unknown>
  return {
    ...actual,
    DataStorage: vi.fn().mockImplementation(function () {
      return storageMocks
    })
  }
})

import { useSessionRef } from '../useSessionRef'

describe('useSessionRef', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with value from DataStorage', () => {
    storageMocks.get.mockReturnValue('cached value')
    const item = useSessionRef('test-session', 'default')

    expect(item.value).toBe('cached value')
    expect(storageMocks.get).toHaveBeenCalledWith('default')
  })

  it('should support a factory function as defaultValue', () => {
    const factory = () => ({ role: 'admin' })
    storageMocks.get.mockImplementation((def: unknown) => (typeof def === 'function' ? def() : def))

    const item = useSessionRef('factory-session', factory)

    expect(storageMocks.get).toHaveBeenCalledWith(factory)
    expect(item.value).toEqual({ role: 'admin' })
  })

  it('should update DataStorage when ref changes', async () => {
    storageMocks.get.mockReturnValue('default')
    const item = useSessionRef('update-session', 'default')
    item.value = 'new value'

    await nextTick()
    expect(storageMocks.set).toHaveBeenCalledWith('new value')
  })

  it('should persist deep mutations on nested objects and arrays', async () => {
    storageMocks.get.mockReturnValue({ count: 1, tags: ['a'] })
    const item = useSessionRef<{ count: number, tags: string[] }>('deep-session')

    item.value!.count = 2
    item.value!.tags.push('b')
    await nextTick()

    expect(storageMocks.set).toHaveBeenCalledExactlyOnceWith({ count: 2, tags: ['a', 'b'] })
  })

  it('should return the same ref for the same name (singleton)', () => {
    const item1 = useSessionRef('singleton', 'v1')
    const item2 = useSessionRef('singleton', 'v2')

    expect(item1).toBe(item2)
    expect(storageMocks.get).toHaveBeenCalledTimes(1)
  })

  it.each([0, false, '', undefined] as const)('should handle boundary value %s', async (boundary) => {
    storageMocks.get.mockReturnValue('initial')
    const item = useSessionRef<string | number | boolean | undefined>(`boundary-session-${String(boundary)}`, 'initial')

    item.value = boundary
    await nextTick()

    expect(storageMocks.set).toHaveBeenCalledWith(boundary)
  })
})
