/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'

const storageMocks = {
  get: vi.fn((def: any) => (typeof def === 'function' ? def() : def)),
  set: vi.fn(),
  update: vi.fn()
}

vi.mock('@dxtmisha/functional-basic', () => ({
  DataStorage: vi.fn().mockImplementation(function () {
    return storageMocks
  }),
  isDomRuntime: vi.fn(() => true)
}))

import { useStorageRef } from '../useStorageRef'

describe('useStorageRef', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with value from DataStorage', () => {
    storageMocks.get.mockReturnValue('cached storage')
    const item = useStorageRef('test-storage', 'default', 100)

    expect(item.value).toBe('cached storage')
    expect(storageMocks.get).toHaveBeenCalledWith('default', 100)
  })

  it('should update DataStorage when ref changes', async () => {
    const item = useStorageRef('update-storage', 'default')
    item.value = 'new value'

    await nextTick()
    expect(storageMocks.set).toHaveBeenCalledWith('new value')
  })

  it('should update value on global storage event', async () => {
    const item = useStorageRef('event-storage', 'initial')

    storageMocks.get.mockReturnValue('updated from event')
    const event = new Event('storage')
    window.dispatchEvent(event)

    expect(storageMocks.update).toHaveBeenCalled()
    expect(item.value).toBe('updated from event')
  })
})
