/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'

const storageMocks = {
  get: vi.fn((def: any) => (typeof def === 'function' ? def() : def)),
  set: vi.fn()
}

vi.mock('@dxtmisha/functional-basic', () => ({
  DataStorage: vi.fn().mockImplementation(function () {
    return storageMocks
  })
}))

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

  it('should update DataStorage when ref changes', async () => {
    const item = useSessionRef('update-session', 'default')
    item.value = 'new value'

    await nextTick()
    expect(storageMocks.set).toHaveBeenCalledWith('new value')
  })

  it('should return the same ref for the same name (singleton)', () => {
    const item1 = useSessionRef('singleton', 'v1')
    const item2 = useSessionRef('singleton', 'v2')

    expect(item1).toBe(item2)
  })
})
