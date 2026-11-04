/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { useQueryRef } from '../useQueryRef'

const queryMocks = {
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
    Query: {
      get: (name: string, defaultValue: unknown) => queryMocks.get(name, defaultValue),
      set: (name: string, value: unknown) => queryMocks.set(name, value),
      addWatch: (name: string, callback: unknown) => queryMocks.addWatch(name, callback)
    }
  }
})

describe('useQueryRef', () => {
  beforeEach(() => {
    domRuntime = true
    vi.clearAllMocks()
  })

  it('should initialize with the value from `Query.get`', () => {
    const name = 'test-query-init'
    const defaultValue = 'default'
    queryMocks.get.mockReturnValue('value-from-query')

    const item = useQueryRef(name, defaultValue)

    expect(queryMocks.get).toHaveBeenCalledWith(name, defaultValue)
    expect(item.value).toBe('value-from-query')
  })

  it('should support a factory function as defaultValue', () => {
    const name = 'test-query-factory'
    const factory = () => 'factory-value'
    queryMocks.get.mockImplementation((_key, def) => (typeof def === 'function' ? def() : def))

    const item = useQueryRef(name, factory)

    expect(queryMocks.get).toHaveBeenCalledWith(name, factory)
    expect(item.value).toBe('factory-value')
  })

  it('should update Query when ref value changes', async () => {
    const name = 'test-query-update'
    queryMocks.get.mockReturnValue('initial')

    const item = useQueryRef(name)
    item.value = 'new-query-value'

    await nextTick()

    expect(queryMocks.set).toHaveBeenCalledWith(name, 'new-query-value')
  })

  it('should update ref when Query changes (external change)', async () => {
    const name = 'test-query-watch'
    let watchCallback: ((value: string) => void) | undefined
    queryMocks.addWatch.mockImplementation((_name: string, callback: (value: string) => void) => {
      watchCallback = callback
    })

    const item = useQueryRef(name, 'initial')
    expect(queryMocks.addWatch).toHaveBeenCalled()

    watchCallback?.('updated-externally')
    await nextTick()

    expect(item.value).toBe('updated-externally')
  })

  it('should implement a singleton pattern per name', () => {
    const name = 'test-query-single'

    const item1 = useQueryRef(name, 'a')
    const item2 = useQueryRef(name, 'b')

    expect(item1).toBe(item2)
    expect(queryMocks.get).toHaveBeenCalledTimes(1)
  })

  it.each([0, false, '', undefined] as const)('should handle boundary value %s', async (boundary) => {
    const name = `test-query-boundary-${String(boundary)}`
    queryMocks.get.mockReturnValue('initial')

    const item = useQueryRef<string | number | boolean | undefined>(name, 'initial')
    item.value = boundary
    await nextTick()

    expect(queryMocks.set).toHaveBeenCalledWith(name, boundary)
  })

  it('should skip DOM watchers during SSR when isDomRuntime is false', async () => {
    domRuntime = false
    const name = 'test-query-ssr'
    queryMocks.get.mockReturnValue('ssr-initial')

    const item = useQueryRef(name, 'ssr-initial')
    item.value = 'ssr-changed'
    await nextTick()

    expect(item.value).toBe('ssr-changed')
    expect(queryMocks.addWatch).not.toHaveBeenCalled()
    expect(queryMocks.set).not.toHaveBeenCalled()
  })
})
