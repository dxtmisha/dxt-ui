/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { type EffectScope, nextTick } from 'vue'
import { ServerStorage } from '@dxtmisha/functional-basic'

const storageMocks = {
  get: vi.fn((def?: unknown) => (typeof def === 'function' ? def() : def)),
  set: vi.fn(),
  update: vi.fn(),
  getIndex: vi.fn(() => 'ui-storage__event-storage')
}

let domRuntime = true

vi.mock('@dxtmisha/functional-basic', async (importOriginal) => {
  const actual = await importOriginal() as Record<string, unknown>
  return {
    ...actual,
    DataStorage: vi.fn().mockImplementation(function () {
      return storageMocks
    }),
    isDomRuntime: vi.fn(() => domRuntime)
  }
})

import { useStorageRef } from '../useStorageRef'

describe('useStorageRef', () => {
  beforeEach(() => {
    domRuntime = true
    if (ServerStorage.has('__ui:effect-scope-global__')) {
      ServerStorage.get<EffectScope>('__ui:effect-scope-global__').stop()
    }
    ServerStorage.reset()
    vi.clearAllMocks()
  })

  it('should initialize with value from DataStorage and cache TTL', () => {
    storageMocks.get.mockReturnValue('cached storage')
    const item = useStorageRef('test-storage', 'default', 100)

    expect(item.value).toBe('cached storage')
    expect(storageMocks.get).toHaveBeenCalledWith('default', 100)
  })

  it('should update DataStorage when ref changes', async () => {
    storageMocks.get.mockReturnValue('default')
    const item = useStorageRef('update-storage', 'default')
    item.value = 'new value'

    await nextTick()
    expect(storageMocks.set).toHaveBeenCalledWith('new value')
  })

  it('should update value on global storage event with matching key or null key', async () => {
    storageMocks.get.mockReturnValue('initial')
    storageMocks.getIndex.mockReturnValue('ui-storage__event-storage')
    const item = useStorageRef('event-storage', 'initial')

    storageMocks.get.mockReturnValue('updated from event')
    window.dispatchEvent(new StorageEvent('storage', { key: 'ui-storage__event-storage' }))

    expect(storageMocks.update).toHaveBeenCalledTimes(1)
    expect(item.value).toBe('updated from event')

    storageMocks.get.mockReturnValue('cleared from event')
    window.dispatchEvent(new StorageEvent('storage', { key: null }))

    expect(storageMocks.update).toHaveBeenCalledTimes(2)
    expect(item.value).toBe('cleared from event')
  })

  it('should ignore storage events for unrelated keys', () => {
    storageMocks.getIndex.mockReturnValue('ui-storage__event-storage-filtered')
    useStorageRef('event-storage-filtered', 'initial')
    storageMocks.update.mockClear()

    window.dispatchEvent(new StorageEvent('storage', { key: 'ui-storage__other-key' }))

    expect(storageMocks.update).not.toHaveBeenCalled()
  })

  it('should remove the window storage listener when EffectScopeGlobal stops', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    useStorageRef('disposable-storage', 'initial')

    if (ServerStorage.has('__ui:effect-scope-global__')) {
      ServerStorage.get<EffectScope>('__ui:effect-scope-global__').stop()
    }

    expect(removeSpy).toHaveBeenCalledWith('storage', expect.any(Function))
    removeSpy.mockRestore()
  })

  it('should return the same ref for the same name (singleton)', () => {
    storageMocks.get.mockReturnValue('v1')
    const item1 = useStorageRef('singleton-storage', 'v1')
    const item2 = useStorageRef('singleton-storage', 'v2')

    expect(item1).toBe(item2)
    expect(storageMocks.get).toHaveBeenCalledTimes(1)
  })

  it('should skip window storage event listener registration during SSR when isDomRuntime is false', () => {
    domRuntime = false
    const addSpy = vi.spyOn(window, 'addEventListener')
    storageMocks.get.mockReturnValue('ssr-value')

    const item = useStorageRef('ssr-storage', 'ssr-value')

    expect(item.value).toBe('ssr-value')
    expect(addSpy).not.toHaveBeenCalledWith('storage', expect.any(Function))
    addSpy.mockRestore()
  })
})
